import {animate, style, animation, trigger, transition, useAnimation, group } from '@angular/animations';
 
export const fadeIn = animation ([
    style({opacity:0}),
    animate("1000ms", style({opacity:1}))    
]);

//export const fadeOut = animation ([ 
//    animate("1000ms", style({opacity:0}))    
//]);

export const fadeOut = animation ([ 
    group([
            animate('400ms ease-in-out', style({
                opacity: 0
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                visibility: 'hidden'
            }))
        ]) 
]);

export const fadeInOut = trigger ('fadeInOut', [ 
    transition("void => *", useAnimation(fadeIn)),
    transition("* => void", useAnimation(fadeOut))    
]);
