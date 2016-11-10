<?php

$frm_name  = "Evgenii";
$recepient = "rikardo1618@gmail.com";
$sitename  = "Учебный: LandX";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["user_name"]);
$email = trim($_POST["user_email"]);
$phone = trim($_POST["user_phone"]);
$message = "
Имя: $name <br>
E-mail: $email <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
