<?php
if(isset($_POST['mail']))
	$mail= sanitizeString($_POST['mail']);
else
	$mail= "Not entered";

if(isset($_POST['firstname']))
	$firstname= sanitizeString($_POST['firstname']);
else
	$firstname= "Not entered";
			
if(isset($_POST['lastname']))
	$lastname= sanitizeString($_POST['lastname']);
else
	$lastname= "Not entered";
					
if(isset($_POST['subject']))
	$subject= sanitizeString($_POST['subject']);
else
	$subject= "Not entered";

try {
	$username = 'qzf281';
	$password = 'Colacao9';
	$pdo = new PDO('mysql:host=qzf281.femmeinline.com:3306;dbname=qzf281', $username, $password);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$stmt = $pdo->prepare('INSERT INTO CONTACT_MESSAGE (EMAIL, NAME, SURNAMES, MESSAGE) VALUES(:email, :name, :surnames, :message)');
	$stmt->execute(array(
			':email' => $mail,
			':name' => $firstname,
			':surnames' => $lastname,			
			':message' => $subject
	));
	
	# Affected Rows?
	echo $stmt->rowCount(); // 1
} catch(PDOException $e) {
	echo 'Error: ' . $e->getMessage();
	
	

function sanitizeString($var)
{	
	$var = stripslashes($var);
	$var = htmlentities($var);
	$var = strip_tags($var);
	return $var;
}