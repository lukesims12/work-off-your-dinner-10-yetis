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
    <meta name="description" content="Work Off Your Dinner">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:url"         content="<?php echo $url; ?>" />
    <meta property="og:type"        content="website" />
    <meta property="og:title"       content="<?php if (empty($title)){ echo 'Work Off Your Dinner'; }else { echo $title; } ?>" />
    <meta property="og:description" content="Tell us what you have had to drink and eat on a night out and we will tell you how many exercises you need to do to work it off - be honest." />
    <meta property="og:image"       content="https://work-off-your-dinner.firebaseapp.com/assets/img/social/<?php if (empty($fbImage)){ echo 'fb-share.png'; }else { echo $fbImage. '.png'; } ?>" />
    <meta name="twitter:image"      content="https://work-off-your-dinner.firebaseapp.com/assets/img/social/<?php if (empty($twImage)){ echo 'tw-share.png'; }else { echo $twImage. '.png'; } ?>" />
    <meta name="twitter:card"       content="summary_large_image">
    <title>Results - Work Off Your Dinner</title>
    <link rel="icon" href="./assets/img/woyd-logo.ico">
    <link rel="stylesheet" type="text/css" href="./assets/css/normalize-min.css" />
    <link rel="stylesheet" href="https://use.typekit.net/tht0mbs.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/styles.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/media-queries-results.css" />
    <script type="text/javascript" src="./assets/js/jquery-3.5.1.min.js"></script>
</head>
<body class="container">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0" nonce="u8RQ8XgI"></script>   
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <a class="site-logo-link" href="/">
        <img class="site-logo" src="./assets/img/woyd-logo.png" />
    </a>
    <div id="loading-animation"></div>
    <section id="results-section">
        <div class="content">
            <h1 id="result-text">To work off your dinner you would need to <span id="key-text">complete:</span></h1>
            <h2 class="social-disc-text">The social sharing buttons NEVER auto tweet or auto share anything! EVER.</h2>
            <div class="exercise">
                <div class="lottie">
                    <div id="lottie-cycling" class="anim"></div>
                </div>
                <div class="text-right exercise-cycle">
                    <div class="result-text-yellow cycling">
                        00mi.
                    </div>
                    <div class="result-text-normal">
                        CYCLING
                    </div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share cycling-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button cycling-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
            <div class="exercise">
                <div class="text-left exercise-burpees">
                    <div class="result-text-yellow burpees">
                        0000
                    </div>
                    <div class="result-text-normal">
                        BURPEES
                    </div>
                </div>
                <div class="lottie">
                    <div id="lottie-burpees" class="anim"></div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share burpees-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button burpees-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
            <div class="exercise exercise-run">
                <div class="lottie">
                    <div id="lottie-running" class="anim"></div>
                </div>
                <div class="text-right">
                    <div class="result-text-yellow run">
                        00mi.
                    </div>
                    <div class="result-text-normal">
                        RUNNING
                    </div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share running-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button running-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
            <div class="exercise exercise-walk">
                <div class="text-left">
                    <div class="result-text-yellow walk">
                        00mi.
                    </div>
                    <div class="result-text-normal">
                        WALKING
                    </div>
                </div>
                <div class="lottie" >
                    <div id="lottie-walk" class="anim"></div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share walking-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button walking-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
            <div class="exercise exercise-squats">
                <div class="lottie">
                    <div id="lottie-squats" class="anim"></div>
                </div>
                <div class="text-right">
                    <div class="result-text-yellow squats">
                        0000
                    </div>
                    <div class="result-text-normal">
                        SQUATS
                    </div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share squats-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button squats-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
            <div class="exercise exercise-rowing">
                <div class="text-left">
                    <div class="result-text-yellow rowing">
                        00mi.
                    </div>
                    <div class="result-text-normal">
                        ROWING
                    </div>
                </div>
                <div class="lottie">
                    <div id="lottie-row" class="anim"></div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share rowing-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button rowing-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
            <div class="exercise exercise-situps">
                <div class="lottie">
                    <div id="lottie-situps" class="anim"></div>
                </div>
                <div class="text-right">
                    <div class="result-text-yellow situps">
                        0000
                    </div>
                    <div class="result-text-normal">
                        SIT-UPS
                    </div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share situps-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button situps-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
            <div class="exercise exercise-sex">
                <div class="text-left">
                    <div class="result-text-yellow sex">
                        00min
                    </div>
                    <div class="result-text-normal sex-txt">
                        MODERATE SEX
                    </div>
                </div>
                <div class="lottie">
                    <div id="lottie-sex" class="anim"></div>
                </div>
            </div>
            <div class="social-share">
                <div class="fb-share-button fb-share sex-fb" data-href="https://work-off-your-dinner.firebaseapp.com/results.html" data-layout="button"></div>
                <div class="twitter-share"><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button sex-twitter" data-url="https://work-off-your-dinner.firebaseapp.com/" data-hashtags="woyd" data-show-count="false">Tweet</a></div>
            </div>
        </div>
        <div class="start-btn-div">
            <a class="start-btn" href="./index.html">START AGAIN</a>
        </div>
    </section>
    <footer id="main-footer-results">
        <a class="alertr-link" target="_blank" href="https://alertr.co.uk/">brought to you by <img class="alertr-logo" src="./assets/img/AlertrLogo-Rectangle.png" alt="alertr"></a>
    </footer>
    <script type="text/javascript" src="./assets/js/results.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.10/lottie_light_html.min.js" type="text/javascript"></script>
    <script type="text/javascript">
    var loadingData = {
        container: document.getElementById('loading-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/woyd-loader.json'
    };
    var cycleData = {
        container: document.getElementById('lottie-cycling'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/bicycle.json'
    };
    var runningData = {
        container: document.getElementById('lottie-running'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/running.json'
    };
    var squatData = {
        container: document.getElementById('lottie-squats'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/squats.json'
    };
    var situpData = {
        container: document.getElementById('lottie-situps'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/sit-ups.json'
    };
    var burpeeData = {
        container: document.getElementById('lottie-burpees'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/burpees.json'
    };
    var walkData = {
        container: document.getElementById('lottie-walk'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/walking.json'
    };
    var rowData = {
        container: document.getElementById('lottie-row'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/rowing.json'
    };
    var sexData = {
        container: document.getElementById('lottie-sex'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://work-off-your-dinner.firebaseapp.com/assets/animations/sex.json'
    };
    bodymovin.loadAnimation(loadingData);
    bodymovin.loadAnimation(cycleData);
    bodymovin.loadAnimation(runningData);
    bodymovin.loadAnimation(squatData);
    bodymovin.loadAnimation(situpData);
    bodymovin.loadAnimation(burpeeData);
    bodymovin.loadAnimation(walkData);
    bodymovin.loadAnimation(rowData);
    bodymovin.loadAnimation(sexData);
    </script>
</body>
</html>