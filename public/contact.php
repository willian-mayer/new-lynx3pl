<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("Content-Type: text/plain; charset=UTF-8");
    
    $to = "info@lynx3pl.com";
    $subject = "New Contact Form Submission";
    
    $name = strip_tags(trim($_POST["name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"] ?? "");
    $interests = isset($_POST["interests"]) ? $_POST["interests"] : "None";
    
    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "error";
        exit;
    }
    
    // Mejorar el subject con el nombre
    $subject = "New Contact Form - " . $name;
    
    $body = "You received a new message from your website:\n\n";
    $body .= "═══════════════════════════════════\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Interests: $interests\n";
    $body .= "═══════════════════════════════════\n\n";
    $body .= "Message:\n$message\n\n";
    $body .= "═══════════════════════════════════\n";
    $body .= "This message was sent from the Lynx3PL contact form.\n";
    
    // 🔥 CAMBIO CLAVE: Usar TU dominio en From, email del usuario en Reply-To
    $headers = array();
    $headers[] = "From: Lynx3PL Website <noreply@lynx3pl.com>";
    $headers[] = "Reply-To: $name <$email>";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/plain; charset=UTF-8";
    $headers[] = "X-Priority: 3";
    
    if (mail($to, $subject, $body, implode("\r\n", $headers))) {
        echo "success";
    } else {
        http_response_code(500);
        echo "error";
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>