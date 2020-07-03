<?php
    include "../db.php";

    $userid = $_POST["userId"];
    $username = $_POST["username"];
    $pw=$_POST["userPassword"];
    $email=$_POST["email"];

    $URL = '../index.php';

    $query = "INSERT INTO member (id, username, pwd, email) VALUES('".$userid."', '".$username."', '".$pw."', '".$email."')";

    if($conn->query($query)) {
?>

<script>
    alert('Sign up successful!');
    location.replace("<?php echo $URL?>");
</script>
 
<?php
    
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;

?>
                        
<?php
    }
    mysqli_close($conn);
?>

<meta charset="utf-8" />
<script type="text/javascript">alert('회원가입이 완료되었습니다.');</script>
<meta http-equiv="refresh" content="0 url=/">