<?php
    
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    if(!empty($_GET['title']))
    {
        $title = $_GET['title'];
    }
    if(!empty($_GET['fbimage']))
    {
        $fbImage = $_GET['fbimage'];
    }
    if(!empty($_GET['twimage']))
    {
        $twImage = $_GET['twimage'];
    }
?>
<!DOCTYPE html>
<html lang="eng">
<head>
    <meta charset="UTF-8" />
    <title>Work Off Your Dinner</title>
    <meta name="description" content="Had too much fun on a night out and feeling guilty the next morning? Want to burn off those excess calories and feel better? Work off your dinner will show you how much of each exercise you need to do to burn off last nights' take-away and drinking session.">
    <meta name="author" content="Luke Sims">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:url"           content="<?php echo $url; ?>" />
    <meta property="og:type"          content="website" />
    <meta property="og:title"         content="<?php if (empty($title)){ echo 'Work Off Your Dinner'; }else { echo $title; } ?>" />
    <meta property="og:description"   content=" Tell us what you have had to drink and eat on a night out and we will tell you how many exercises you need to do to work it off - be honest." />
    <meta property="og:image"         content="https://work-off-your-dinner.firebaseapp.com/assets/img/social/<?php if (empty($fbImage)){ echo 'fb-share.png'; }else { echo $fbImage. '.png'; } ?>" />
    <meta name="twitter:image" content="https://work-off-your-dinner.firebaseapp.com/assets/img/social/<?php if (empty($twImage)){ echo 'tw-share.png'; }else { echo $twImage. '.png'; } ?>" />
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="./assets/img/woyd-logo.ico ">
    <link rel="stylesheet" type="text/css" href="./assets/css/normalize-min.css" />
    <link rel="stylesheet" href="https://use.typekit.net/tht0mbs.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/styles.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/media-queries-homepage.css" />
    <script type="text/javascript" src="./assets/js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="./assets/js/jquery.enllax.min.js"></script>
    <script type="text/javascript" src="./assets/js/layout.js"></script>
    <script type="text/javascript" src="./assets/js/option-animation.js"></script>
    <script type="text/javascript" src="./assets/js/app.js"></script>
</head>
<body>
    <header id="main-header">
        <div class="logo">
            <object class="svg" type="image/svg+xml" data="./assets/svg/woyd-logo-white.svg"></object>
        </div>
        <div class="social-icons">
            <a target="_blank" href="https://www.facebook.com/MyAlertr"><img class="icon fb" src="./assets/img/social/fb.png" /></a>
            <a target="_blank" href="https://twitter.com/MyAlertr"><img class="icon twitter" src="./assets/img/social/twitter.png" /></a>
        </div>    
        <div class="grid-header">
            <div>
                <img class="burger-img" src="./assets/img/burger-min.png" alt="burger" data-enllax-ratio=".15" data-enllax-type="foreground" />
            </div>
            <div>
                <div class="title-div">
                    <h1 class="main-title">Work Off Your Dinner.
                        <span class="sub-title">
                            Tell us what you have had to drink and eat on a night out and we will tell
                            you how many exercises you need to do to work it off - be honest.
                        </span>    
                    </h1>
                    <a class="scroll-down-link" href="#main-section"><img class="mouse-img bounce" src="./assets/img/mouse-min.png" alt="mouse" /><span class="scroll-down-text bounce">Scroll Down</span></a>
                </div>
            </div>
            <div class="coke-img-div">
                <img class="coke-img" src="./assets/img/coke-min.png" alt="coke" data-enllax-ratio=".15" data-enllax-type="foreground" />
            </div>
        </div>
    </header>
    <section id="main-section">
        <div class="column-1">
            <div class="site-logo-link-home">
                <a class="site-logo-link" href="/">
                    <img class="site-logo" src="./assets/img/woyd-logo.png" />
                </a>
            </div>
            <form id="drink-form" name="main-form" method="POST">
                <input type="hidden" id="totalCalories" name="totalCalories" style="background-color: #FFF;" value="0"/>
                <div id="drink-container"></div>
            </form>
        </div>
        <div class="column-2">
            <a class="next-btn">
                <img class="next-img" src="./assets/img/next-btn-min.png" alt="next button" />
                <div class="next-btn-text">next</div>
            </a>
        </div>
    </section>
</body>
</html>