<?php
    if(isset($_GET["series"])){
        $series = $_GET["series"];
    } else {
        http_response_code(400);
        die("Bad Request");
    }
    if(isset($_GET["season"])) {
        $season = $_GET["season"];
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
    <title>Brooklyn Nine Nine</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script>
        var seriesId = <?php echo $series ?>;
        var seasonNumber = <?php echo $season ?>;
    </script>
    <script src="main.js"></script> 
</head>
<body>
    <div class="header">
        <h1>vShelf</h1>
    </div>
    
    <script src="manifest.js"></script>
    <script src="season.js"></script>
</body>
</html>