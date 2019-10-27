$(document).ready(() => {
    const tl = new TimelineMax({ repeatDelay: 10, repeat: -1 });

    /* Split Texts for Typewriter Animation */
    let venueSplit = new SplitText(".venue", { type: "words,chars" }),
        venueChars = venueSplit.chars;

    let dateSplit = new SplitText(".date", { type: "words,chars" }),
        dateChars = dateSplit.chars;

    let infoSplit = new SplitText(".moreinfo", { type: "words,chars" }),
        infoChars = infoSplit.chars;


    // BEGIN REPEAT ANIMATION
    tl.to(['.g7-svg', '.background-svg'], .8, { opacity: 1, delay: 1 });

    tl.from(['.g7-svg', '.background-svg'], .5, {
        y: "+=40",
        ease: Power2.easeOut
    }, 3);

    // Enter background command
    tl.to(".background-command", 0.17, { opacity: 1, ease: Power1.easeIn }, "+=.25");

    let shineAnimation = () => {return TweenMax.fromTo('#sheen', 2.5, {
        backgroundPosition: "-330px 0"
    }, { 
        ease: Power3.easeInOut,
        backgroundPosition: "50px 0"}); };

    // Date/Time
    tl.staggerFrom(dateChars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=.25");
    tl.add(shineAnimation, "+=0.25");
    tl.staggerTo(dateChars, 0.01, { opacity: 0, ease: Power1.easeOut }, -0.06, "+=3");

    // Location
    tl.staggerFrom(venueChars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=.25");
    tl.staggerTo(venueChars, 0.01, { opacity: 0, ease: Power1.easeOut }, -0.06, "+=1.5");

    // More Info
    tl.staggerFrom(infoChars, 0.01, { opacity: 0, ease: Power1.easeIn }, 0.08, "+=.25");
    tl.add(shineAnimation, "+=0.25"); // works
    tl.staggerTo(infoChars, 0.01, { opacity: 0, ease: Power1.easeOut }, -0.08, "+=3");

    // Exit Command Background
    tl.to(".background-command", 0.17, { opacity: 0, ease: Power1.easeOut }, "+=0.05");

    tl.to(['.g7-svg', '.background-svg'], .5, {
        y: "+=40",
        ease: Power2.easeOut
    }, "+=0.2")

    tl.add(shineAnimation, "+=0.25"); // works

    tl.to(['.g7-svg', '.background-svg'], .4, { opacity: 0, ease: Power1.easeOut }, "+=2");

    // END REPEAT ANIMATION

    if (window.obsstudio) {
        window.obsstudio.onActiveChange = (active) => {
            if (active) {
                tl.restart();
            }
            else {
                tl.pause(0);
            }
        }
        window.obsstudio.onVisibilityChange = (visible) => {
            if (visible) {
                tl.restart();
            }
        }
    }
    else {
        tl.restart();
    }

    window.entrance = tl;
});