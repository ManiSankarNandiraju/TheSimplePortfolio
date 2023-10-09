<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Recipient email address (your email address)
    $to = "manisankarnandiraju@gmail.com";

    // Email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n";
    $email_message .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        // Email sent successfully
        echo "Your message has been sent successfully!";
    } else {
        // Error sending email
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    // If the form wasn't submitted, display an error message
    echo "Error: The form was not submitted.";
}
?>
