$(document).ready(() => { 
    const entrance = new TimelineMax();

    // Entrance Animation
    TweenMax.to($('.g7-svg'), .4, {opacity: 1, delay: 0.5});

    var tl =  new TimelineMax({ repeatDelay: 10, repeat: -1});

    /* Split Texts for Typewriter Animation */
    let venueSplit = new SplitText(".venue", {type:"words,chars"}), 
    venueChars = venueSplit.chars;

    let dateSplit = new SplitText(".date", {type:"words,chars"}), 
    dateChars = dateSplit.chars;

    let infoSplit = new SplitText(".moreinfo", {type:"words,chars"}),
    infoChars = infoSplit.chars;

    // BEGIN REPEAT ANIMATION
    tl.from('.g7-svg', .5, {
        y: "+=40",
        ease: Power2.easeOut
    }, 3)
    
    tl.staggerFrom(dateChars, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=.25");
    tl.add(TweenMax.to($('#sheen'), 2.5, {ease: Power3.easeInOut, backgroundPosition: "50px 0"}), "+=0.25");
    tl.staggerTo(dateChars, 0.01, {opacity:0, ease:Power1.easeOut}, -0.06, "+=1.5");

    tl.staggerFrom(venueChars, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=.25");
    tl.staggerTo(venueChars, 0.01, {opacity:0, ease:Power1.easeOut}, -0.06, "+=1.5");

    tl.staggerFrom(infoChars, 0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=.25");
    tl.add(TweenMax.to($('#sheen'), 2.5, {ease: Power3.easeInOut, backgroundPosition: "50px 0"}), "+=2");
    tl.staggerTo(infoChars, 0.01, {opacity:0, ease:Power1.easeOut}, -0.08, "+=6");

    tl.to('.g7-svg', .5, {
        y: "+=40",
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