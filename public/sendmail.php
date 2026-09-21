<?php
/**
 * sendmail.php - Kontaktformular-Backend (elektro-prüfdienst.de)
 * Empfängt POST-Daten vom Angebotsformular und versendet sie per PHP mail().
 * Antwort: JSON {"ok":true} | {"ok":false,"error":"..."}
 */
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// Honeypot gegen Spam-Bots: Menschen sehen das Feld nicht, Bots füllen es.
// Bots still "erfolgreich" beantworten, ohne E-Mail zu versenden.
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

// Einzeilige Felder säubern (Header-Injection verhindern)
$clean = static function (string $value): string {
    $value = trim($value);
    return str_replace(["\r", "\n", '%0a', '%0d', '%0A', '%0D'], ' ', $value);
};

$name    = $clean((string)($_POST['name'] ?? ''));
$phone   = $clean((string)($_POST['phone'] ?? ''));
$email   = $clean((string)($_POST['email'] ?? ''));
$plz     = $clean((string)($_POST['plz'] ?? ''));
$message = trim((string)($_POST['message'] ?? '')); // Mehrzeilig erlaubt (nur Body)

if ($name === '' || $phone === '' || $plz === '' || $message === ''
    || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation']);
    exit;
}

$to = 'vertrieb@xn--elektro-prfdienst-c3b.de'; // = vertrieb@elektro-prüfdienst.de

$subject = '=?UTF-8?B?' . base64_encode('Neue Anfrage Kontaktformular: ' . $name . ' (' . $plz . ')') . '?=';

// ---------- Plain-Text-Alternative (für Mail-Clients ohne HTML) ----------
$textBody = implode("\r\n", [
    'Neue Anfrage über das Kontaktformular auf elektro-prüfdienst.de',
    '',
    'Name:    ' . $name,
    'Telefon: ' . $phone,
    'E-Mail:  ' . $email,
    'PLZ:     ' . $plz,
    '',
    'Nachricht:',
    $message,
    '',
    '---',
    'Gesendet am ' . date('d.m.Y') . ' um ' . date('H:i') . ' Uhr',
]);

// ---------- HTML-Version ----------
$esc = static function (string $v): string {
    return htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
};
$eName     = $esc($name);
$ePhone    = $esc($phone);
$eEmail    = $esc($email);
$ePlz      = $esc($plz);
$eMessage  = nl2br($esc($message), false);
$phoneTel  = preg_replace('/[^0-9+]/', '', $phone);
$sendDate  = date('d.m.Y');
$sendTime  = date('H:i');

$htmlBody = <<<HTML
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Neue Kontaktanfrage</title></head>
<body style="margin:0;padding:0;background-color:#eef2f5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f5;padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #dfe7ec;">

        <!-- Header -->
        <tr>
          <td style="background-color:#062B4A;padding:24px 30px 22px;">
            <div style="color:#8ef05a;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:2.5px;text-transform:uppercase;">elektro-pr&uuml;fdienst.de</div>
            <div style="color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:21px;font-weight:bold;line-height:1.3;padding-top:7px;">Neue Anfrage &uuml;ber das Kontaktformular</div>
          </td>
        </tr>
        <tr><td style="background-color:#58d21f;height:4px;font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- Kontaktdaten -->
        <tr>
          <td style="padding:22px 30px 6px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;color:#7a8a99;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;width:105px;vertical-align:top;border-bottom:1px solid #eef2f5;">Name</td>
                <td style="padding:10px 0;color:#16283a;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;vertical-align:top;border-bottom:1px solid #eef2f5;">{$eName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#7a8a99;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;vertical-align:top;border-bottom:1px solid #eef2f5;">Telefon</td>
                <td style="padding:10px 0;vertical-align:top;border-bottom:1px solid #eef2f5;"><a href="tel:{$phoneTel}" style="color:#0e5aad;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;text-decoration:none;">{$ePhone}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#7a8a99;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;vertical-align:top;border-bottom:1px solid #eef2f5;">E-Mail</td>
                <td style="padding:10px 0;vertical-align:top;border-bottom:1px solid #eef2f5;"><a href="mailto:{$eEmail}" style="color:#0e5aad;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;text-decoration:none;">{$eEmail}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#7a8a99;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;vertical-align:top;">PLZ</td>
                <td style="padding:10px 0;color:#16283a;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:bold;vertical-align:top;">{$ePlz}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Nachricht -->
        <tr>
          <td style="padding:16px 30px 6px;">
            <div style="color:#7a8a99;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1.2px;text-transform:uppercase;padding-bottom:9px;">Nachricht</div>
            <div style="background-color:#f7f9fa;border:1px solid #e3e9ee;border-left:4px solid #58d21f;border-radius:8px;padding:15px 17px;color:#22303d;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.65;">{$eMessage}</div>
          </td>
        </tr>

        <!-- Antwort-Button -->
        <tr>
          <td align="center" style="padding:24px 30px 26px;">
            <a href="mailto:{$eEmail}?subject=Ihre%20Anfrage%20DGUV%20V3%20Pr%C3%BCfung%20Berlin" style="display:inline-block;background-color:#58d21f;color:#05233d;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;padding:13px 30px;border-radius:999px;text-decoration:none;">Auf die Anfrage antworten</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#f2f5f7;padding:15px 30px;color:#7a8a99;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;">
            Gesendet am {$sendDate} um {$sendTime} Uhr &uuml;ber das Kontaktformular auf elektro-pr&uuml;fdienst.de<br>
            Tipp: Sie k&ouml;nnen diese E-Mail auch einfach direkt beantworten &ndash; die Antwort geht an {$eEmail}.
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;

// ---------- Multipart-Mail (Plaintext + HTML) ----------
$boundary = '=_NextPart_' . md5(uniqid((string) mt_rand(), true));

$body = '--' . $boundary . "\r\n"
    . "Content-Type: text/plain; charset=utf-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $textBody . "\r\n"
    . '--' . $boundary . "\r\n"
    . "Content-Type: text/html; charset=utf-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $htmlBody . "\r\n"
    . '--' . $boundary . "--\r\n";

$headers = implode("\r\n", [
    'From: =?UTF-8?B?' . base64_encode('Website Kontaktformular') . '?= <kontaktformular@xn--elektro-prfdienst-c3b.de>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

if (!mail($to, $subject, $body, $headers)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
    exit;
}

echo json_encode(['ok' => true]);
