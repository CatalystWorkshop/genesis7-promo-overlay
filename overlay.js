$(document).ready(() => { 
    const entrance = new TimelineMax();
    entrance
    .fromTo('.g7-logo', 2, {drawSVG:"0 5%"}, {drawSVG: "20% 80%"}, 0.6);
 /*       .from('.g7-logo', .3, {
            scaleY: 0,
            y: "-=30px"
        }, 2.25)
        .add('b')
        .staggerFrom('.command', .4, {
            x: "-=50px",
            opacity: 0
        }, .15, 'b')
        .repeatDelay(2); */
        
    
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