<?php	
    session_start();

    include "../db.php";

    $id=$_POST['userId'];
    // $pwd=md5($_POST['userPassword']);
    $pwd=$_POST['userPassword'];
    $status=$_POST['statusMessage'];

    $query = "SELECT * FROM member WHERE id='$id'";
    $result = $conn -> query($query);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        // var_dump($result);
        // var_dump($row);
        // var_dump($pwd);
        // var_dump($_POST['userPassword']);
        if ($row['pwd'] == $pwd) {
            $_SESSION['userId'] = $id;
            if (isset($_SESSION['userId'])) {
                ?>
                <script>
                    alert("Welcome back! You are now logged in!");
                    location.replace("./play.html");
                </script>
                <?php
            }
            else {
                echo "SESSION FAILED!";
            }
        }
        else {
            ?>
            <script>
                alert("User ID or/and PASSWORD is/are wrong");
                //history.back();
            </script>
            <?php
        }
    }
    else {
        ?>
        <script>
                alert("Testing");
                history.back();
        </script>
        <?php
    }
?>