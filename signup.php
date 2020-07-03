<?php
    include "./db.php";
?>
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Baloo+Tamma" rel="stylesheet">
        <link rel="stylesheet" href="./font-awesome-4.6.3/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="./css/over1240px.css" />
        <link rel="stylesheet" type="text/css" href="./css/below650px.css" />
        <script type="text/javascript" src="./jquery/jquery-3.1.0.min.js"></script>
        <scipt type="text/javascript" src="./jquery/jquery-ui-1.12.0/" ></scipt>
    </head>
    <body>
        <div class="header">
            <p id="title" class="animal_chess">Animal Chess</p>
        </div>
        <div id="side_menu_bar" class="side_menu">
            <ul>
                <li><a href="javascript:void(0)" onclick="close_side_menu()"><i class="fa fa-times-circle" aria-hidden="true"></i></a></li>
                <li><a href="./index.php">Login</a></li>
                <li><a href="./play.html">Play</a></li>
                <li><a href="./instruction.html">How to</a></li>
                <li><a href="./about.html">About</a></li>
                <p> &copy; 2016 - website built by Doe Hoon LEE</p>
            </ul>
        </div>
        <span id="span" style="font-size:25px;cursor:pointer" onclick="open_side_menu()"><i class="fa fa-bars" aria-hidden="true"></i></span>
        <div class="navbar">
            <ul>
                <li><a href="./index.php">Login</a></li>
                <li><a href="./play.html">Play</a></li>
                <li><a href="./instruction.html">How to</a></li>
                <li><a href="./about.html">About</a></li>
            </ul>
        </div>
        <div class="login_table">
            <div class="user_input">
                <form method="post" action="./members/signup_action.php">
                    <p>STATUS</p><input type="text" name="statusMessage" size="20" maxlength="25" placeholder="Your status message" />
                    <p>USERNAME</p><input type="text" name="username" size="20" maxlength="25" placeholder="user name" />
                    <p>USER ID</p><input type="text" name="userId" size="20" maxlength="25" placeholder="user ID">
                    <p>PASSWORD</p><input type="password" name="userPassword" size="20" maxlength="25" placeholder="password must contain lower & uppercase + special character" />
                    <p>E-MAIL</p><input type="text" name="email" placeholder="____ @ ____ . ___" />
                    <input type="submit" class="sign-up btn" value="SIGN UP" />
                </form>
            </div>
            <div class="sign" id="sign_up">
            </div>
        </div>
        <div class="copyright">
            <h3> &copy; 2016 - website built by Doe Hoon LEE </h3>
        </div>
        <script type="text/javascript" src="slideMenu.js"></script>
    </body>
</html>