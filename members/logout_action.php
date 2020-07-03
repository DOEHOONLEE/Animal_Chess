<?php
    session_start();
    $result = session_destroy();

    if ($result) {
        ?>
        <script>
            alert("You are now logged out.");
            alert("Thank You for using!");
            location.replace("../index.php");
        </script>
        <?php
    }
?>