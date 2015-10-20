<?php

if(isset($_POST["more_name"]) && isset($_POST["more_phone"])){
    $rowFormName = trim(strip_tags($_POST["more_name"]));
    $rowFormPhone = trim(strip_tags($_POST["more_phone"]));
    $result = mail("summer.kseni@gmail.com","Заявка с сайта hrweekend.ru (ХОТИТЕ УЗНАТЬ ПОДРОБНЕЙ?)", "Введенные данные: \nИмя: $rowFormName \nТелефон: $rowFormPhone","Content-type:text/plain; charset = utf8");
    
    //логин в системе смс(учетная запись с которой
    //происходит отправка смс и списываются средства)
   $smsLogin = '9649241621';
    //пароль в системе смс
    $smsPassword = '!QAZ2wsx';
    //Номер телефона на который отправляются смс
    $smsReceivePhoneNum = '79181348736';
    //api_id в системе смс. получить или 
    $smsApiId = 'bbcf0725-997f-f424-6941-9c6cb6631488';
    
    if($result) {
        echo "yes";
        $ch = curl_init("http://sms.ru/auth/get_token");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	$token = curl_exec($ch);
    	curl_close($ch);
    
    
    	$ch = curl_init("http://sms.ru/sms/send");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	curl_setopt($ch, CURLOPT_POSTFIELDS, array(
    
    		"login"		=>	$smsLogin,
    		"sha512"	=>	hash("sha512",$smsPassword.$token.$smsApiId),
    		"token"		=>	$token,
    		"to"		=>	$smsReceivePhoneNum,
    		"text"		=>	$rowFormPhone.' - '.$rowFormName/*iconv("windows-1251","utf-8","Привет!")*/
    
    	));
    	$body = curl_exec($ch);
    	curl_close($ch);
        if( $body ) {
    		$body = explode("\n",$body);
    		if( $body[0] == 201 ) {
    			$headers = "From: hrweekend.ru@yandex.ru" . PHP_EOL;
    			//$headers .= "Reply-To: $email" . PHP_EOL;
    			$headers .= "MIME-Version: 1.0" . PHP_EOL;
    			$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
    			$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
    			$e_subject = 'Для отправки смс не хватает средств.';
                $msg = "СМС не удалось отправить из-за не хватки средств на счету.";
    			mail($address, $e_subject, $msg, $headers);
    		}
    	}
    }else {
        echo "no";
    }
}

if(isset($_POST["modalName"]) && isset($_POST["modalPhone"])){
    $modalName = trim(strip_tags($_POST["modalName"]));
    $modalPhone = trim(strip_tags($_POST["modalPhone"]));
    $modalInteresting = trim(strip_tags($_POST["modalInteresting"]));
    $result = mail("summer.kseni@gmail.com","Заявка с сайта hrweekend.ru", "Введенные данные: \nИмя: $modalName \nТелефон: $modalPhone \nИнтересует: $modalInteresting","Content-type:text/plain; charset = utf8");
    
    //логин в системе смс(учетная запись с которой
    //происходит отправка смс и списываются средства)
   $smsLogin = '9649241621';
    //пароль в системе смс
    $smsPassword = '!QAZ2wsx';
    //Номер телефона на который отправляются смс
    $smsReceivePhoneNum = '79181348736';
    //api_id в системе смс. получить или 
    $smsApiId = 'bbcf0725-997f-f424-6941-9c6cb6631488';
    
    if($result) {
        echo "yes";
        $ch = curl_init("http://sms.ru/auth/get_token");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	$token = curl_exec($ch);
    	curl_close($ch);
    
    
    	$ch = curl_init("http://sms.ru/sms/send");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	curl_setopt($ch, CURLOPT_POSTFIELDS, array(
    
    		"login"		=>	$smsLogin,
    		"sha512"	=>	hash("sha512",$smsPassword.$token.$smsApiId),
    		"token"		=>	$token,
    		"to"		=>	$smsReceivePhoneNum,
    		"text"		=>	$modalPhone.' - '.$modalName.' - '.$modalInteresting/*iconv("windows-1251","utf-8","Привет!")*/
    
    	));
    	$body = curl_exec($ch);
    	curl_close($ch);
        if( $body ) {
    		$body = explode("\n",$body);
    		if( $body[0] == 201 ) {
    			$headers = "From: hrweekend.ru@yandex.ru" . PHP_EOL;
    			//$headers .= "Reply-To: $email" . PHP_EOL;
    			$headers .= "MIME-Version: 1.0" . PHP_EOL;
    			$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
    			$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
    			$e_subject = 'Для отправки смс не хватает средств.';
                $msg = "СМС не удалось отправить из-за не хватки средств на счету.";
    			mail($address, $e_subject, $msg, $headers);
    		}
    	}
    }else {
        echo "no";
    }
}

//Задать вопрос
if(isset($_POST["modalTextAsk"])){
    $modalName = trim(strip_tags($_POST["modalNameAsk"]));
    $modalPhone = trim(strip_tags($_POST["modalPhoneAsk"]));
    $modalInteresting = trim(strip_tags($_POST["modalInteresting"]));
    $modalTextAsk = trim(strip_tags($_POST["modalTextAsk"]));
    $result = mail("summer.kseni@gmail.com","Вопрос с сайта hrweekend.ru", "Введенные данные: \nИмя: $modalName \nТелефон: $modalPhone \nВопрос: $modalTextAsk \nИнтересует: $modalInteresting","Content-type:text/plain; charset = utf8");
    
    //логин в системе смс(учетная запись с которой
    //происходит отправка смс и списываются средства)
   $smsLogin = '9649241621';
    //пароль в системе смс
    $smsPassword = '!QAZ2wsx';
    //Номер телефона на который отправляются смс
    $smsReceivePhoneNum = '79181348736';
    //api_id в системе смс. получить или 
    $smsApiId = 'bbcf0725-997f-f424-6941-9c6cb6631488';
    
    if($result) {
        echo "yes";
        $ch = curl_init("http://sms.ru/auth/get_token");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	$token = curl_exec($ch);
    	curl_close($ch);
    
    
    	$ch = curl_init("http://sms.ru/sms/send");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	curl_setopt($ch, CURLOPT_POSTFIELDS, array(
    
    		"login"		=>	$smsLogin,
    		"sha512"	=>	hash("sha512",$smsPassword.$token.$smsApiId),
    		"token"		=>	$token,
    		"to"		=>	$smsReceivePhoneNum,
    		"text"		=>	$modalPhone.' - '.$modalName.' - '.$modalInteresting.' - '.$modalTextAsk/*iconv("windows-1251","utf-8","Привет!")*/
    
    	));
    	$body = curl_exec($ch);
    	curl_close($ch);
        if( $body ) {
    		$body = explode("\n",$body);
    		if( $body[0] == 201 ) {
    			$headers = "From: hrweekend.ru@yandex.ru" . PHP_EOL;
    			//$headers .= "Reply-To: $email" . PHP_EOL;
    			$headers .= "MIME-Version: 1.0" . PHP_EOL;
    			$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
    			$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
    			$e_subject = 'Для отправки смс не хватает средств.';
                $msg = "СМС не удалось отправить из-за не хватки средств на счету.";
    			mail($address, $e_subject, $msg, $headers);
    		}
    	}
    }else {
        echo "no";
    }
}

//Скачать програму
if(isset($_POST["modalEmailDownload"])){
    $modalName = trim(strip_tags($_POST["modalNameDownload"]));
    $modalPhone = trim(strip_tags($_POST["modalEmailDownload"]));
    $modalInteresting = trim(strip_tags($_POST["modalInteresting"]));
    $result = mail("summer.kseni@gmail.com","Хотят скачать программу - Заявка с сайта hrweekend.ru", "Введенные данные: \nИмя: $modalName \nEmail: $modalPhone \nИнтересует: $modalInteresting","Content-type:text/plain; charset = utf8");
    
    //логин в системе смс(учетная запись с которой
    //происходит отправка смс и списываются средства)
   $smsLogin = '9649241621';
    //пароль в системе смс
    $smsPassword = '!QAZ2wsx';
    //Номер телефона на который отправляются смс
    $smsReceivePhoneNum = '79181348736';
    //api_id в системе смс. получить или 
    $smsApiId = 'bbcf0725-997f-f424-6941-9c6cb6631488';
    
    if($result) {
        echo "yes";
        $ch = curl_init("http://sms.ru/auth/get_token");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	$token = curl_exec($ch);
    	curl_close($ch);
    
    
    	$ch = curl_init("http://sms.ru/sms/send");
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    	curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    	curl_setopt($ch, CURLOPT_POSTFIELDS, array(
    
    		"login"		=>	$smsLogin,
    		"sha512"	=>	hash("sha512",$smsPassword.$token.$smsApiId),
    		"token"		=>	$token,
    		"to"		=>	$smsReceivePhoneNum,
    		"text"		=>	$modalPhone.' - '.$modalName.' - '.$modalInteresting/*iconv("windows-1251","utf-8","Привет!")*/
    
    	));
    	$body = curl_exec($ch);
    	curl_close($ch);
        if( $body ) {
    		$body = explode("\n",$body);
    		if( $body[0] == 201 ) {
    			$headers = "From: hrweekend.ru@yandex.ru" . PHP_EOL;
    			//$headers .= "Reply-To: $email" . PHP_EOL;
    			$headers .= "MIME-Version: 1.0" . PHP_EOL;
    			$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
    			$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
    			$e_subject = 'Для отправки смс не хватает средств.';
                $msg = "СМС не удалось отправить из-за не хватки средств на счету.";
    			mail($address, $e_subject, $msg, $headers);
    		}
    	}
    }else {
        echo "no";
    }
}

?>