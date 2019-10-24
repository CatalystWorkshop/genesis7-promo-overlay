$(document).ready(() => { 
    const entrance = new TimelineMax();
    // entrance
    //     .fromTo('.g7-logo', 2, {
    //         drawSVG:"0 5%"
    //     }, {
    //         drawSVG: "20% 80%"
    //     }, 3);
 
    //var sheen = document.getElementById('sheen');
    //TweenMax.fromTo(sheen, 1, {backgroundPosition:"-200px 0"}, {backgroundPosition:"20px 0"}); 
    
    // Entrance Animation
    TweenMax.to($('.g7-svg'), .4, {opacity: 1, delay: 0.5});

    /* Repeat Animations */
    var tl =  new TimelineMax({ repeatDelay: 10, repeat: -1});
    mySplitText = new SplitText(".command", {type:"words,chars"}), 
    chars = mySplitText.chars;

    // BEGIN REPEAT ANIMATION
    tl.from('.g7-svg', .5, {
        x: "+=400",
        ease: Power2.easeOut
    }, 3)
    tl.staggerFrom(chars, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=.25");
    tl.add(TweenMax.to($('#sheen'), 2.5, {ease: Power3.easeInOut, backgroundPosition: "50px 0"}), "+=4");
    tl.staggerTo(chars, 0.01, {opacity:0, ease:Power1.easeOut}, -0.08, "+=8");
    tl.to('.g7-svg', .5, {
        x: "+=400",
        ease: Power2.easeOut
    }, "+=1")
    tl.add(TweenMax.to($('#sheen'), 2.5, {ease: Power3.easeInOut, backgroundPosition: "50px 0", repeat: 3, repeatDelay: 5}));
    // END REPEAT ANIMATION


    if (window.obsstudio) {
        window.obsstudio.onActiveChange = (active) => {
            if (active) {
                entrance.restart();
            }
            else {
                entrance.pause(0);
            }
        }
        window.obsstudio.onVisibilityChange = (visible) => {
            if (visible) {
                entrance.restart();
            }
        }
    }
    else {
        entrance.restart();
    }

    window.entrance = entrance;
});