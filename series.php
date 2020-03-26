<?php
    if(isset($_GET["series"])){
        $series = $_GET["series"];
    } else {
        http_response_code(400);
        die("Bad Request");
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>vShelf</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
    <script>
        var seriesId = <?php echo $series ?>;
    </script>
</head>
<body>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="/">Home</a>
    </div>
    <div class="header">
        <img src="res/menu.svg" class="menuicon" onclick="openNav()"/>
        <h1>vShelf</h1>
    </div>
    
    <script src="manifest.js"></script>
    <script src="series.js"></script>
</body>
</html>