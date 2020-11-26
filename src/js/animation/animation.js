import { gsap } from "gsap";


// Animate SVG

const rightFoot = document.querySelector("#rightFoot");
const rightLeg = document.querySelector("#rightLeg");
const leftFoot = document.querySelector("#leftFoot");
const leftHand = document.querySelector("#leftHand");
const rightHand = document.querySelector("#rightHand");

const tl_LEFT_FOOT = gsap.timeline({repeat: -1, yoyo: true});
tl_LEFT_FOOT.set(leftFoot, {rotation: 5, y: 12, x:-38});

const tl_RIGHT_FOOT = gsap.timeline({repeat: -1, yoyo: true});
tl_RIGHT_FOOT.set(rightFoot, {rotation: 10, y: 1, x:-2});
tl_RIGHT_FOOT.to(rightFoot, {rotation: -5,y: -1,duration: .5}); 

const tl_RIGHT_LEG= gsap.timeline({repeat: -1, yoyo: true});
tl_RIGHT_LEG.to(rightLeg, {rotation: -1, y: -3, duration: .5});

const tl_LEFT_HAND = gsap.timeline({repeat: -1, yoyo: true});
tl_LEFT_HAND.to(leftHand, {x:2, duration: .8});
tl_LEFT_HAND.to(leftHand, {y:1, duration: .3, rotation: 3});
tl_LEFT_HAND.to(leftHand, {y:0, duration: .1, rotation: 0});
tl_LEFT_HAND.to(leftHand, {y:1, duration: .1, rotation: 2});

const tl_RIGHT_HAND = gsap.timeline({repeat: -1, yoyo: true});
tl_RIGHT_HAND.to(rightHand, {x:2, duration: .4});
tl_RIGHT_HAND.to(rightHand, {y:2, duration: .2});
tl_RIGHT_HAND.to(rightHand, {x:1, y:0, duration: .2});
tl_RIGHT_HAND.to(rightHand, {x:1, y:2, duration: .2});



// Animation label

export function shakeThisElement(element){
    const tl_Shaking = gsap.timeline({repeat: 0, yoyo: true});
    tl_Shaking.to(element, {rotation: 1, duration: .1});
    tl_Shaking.to(element, {rotation: -1, duration: .1});
    tl_Shaking.to(element, {rotation: 1, duration: .1});
    tl_Shaking.to(element, {rotation: 0, duration: .1});
} 

