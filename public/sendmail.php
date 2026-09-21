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

$body = implode("\r\n", [
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

$headers = implode("\r\n", [
    'From: =?UTF-8?B?' . base64_encode('Website Kontaktformular') . '?= <kontaktformular@xn--elektro-prfdienst-c3b.de>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

if (!mail($to, $subject, $body, $headers)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
    exit;
}

echo json_encode(['ok' => true]);
