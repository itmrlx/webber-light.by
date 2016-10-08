<?php
	if($_POST['email']){
		echo "Robot";
	}else{

	/* Здесь проверяется существование переменных */
	if (isset($_POST['name'])) {$name = 'Имя: '.$_POST['name'];}
	if (isset($_POST['mail'])) {$mail = 'Email: '.$_POST['mail'].'<br />';}
	if (isset($_POST['tel'])) {$tel = 'Тел: '.$_POST['tel'].'<br />';}
	if (isset($_POST['comment'])) {$comment = 'Сообщение: '.$_POST['comment'].'<br />';}
	if (isset($_POST['title'])) {$title = 'Заголовок формы: '.$_POST['title'].'<br />';}

	/* эл. почта */
	$address = "webber.bel@gmail.com";

	/* текст сообщения */
	$mes = "
	<h1>Webberlight.by</h1>
	<h3>$title</h3><br />
	$name<br />
	$tel
	$mail
	$comment
	";

	/* А эта функция как раз занимается отправкой письма на указанный вами email */
	$send = mail ($address,$name,$mes,"Content-type:text/html; charset = UTF-8\r\nFrom:webber.bel@gmail.com");
	echo 'OK';

	};
?>