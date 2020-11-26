import { gsap } from "gsap";

const rightFoot = document.querySelector("#rightFoot");
const leftFoot = document.querySelector("#leftFoot");
const rightLeg = document.querySelector("#rightLeg");


const tl_LEFT_FOOT = gsap.timeline({repeat: -1, yoyo: true});
tl_LEFT_FOOT.set(leftFoot, {rotation: 5, y: 12, x:-38});

const tl_FOOT = gsap.timeline({repeat: -1, yoyo: true});
tl_FOOT.set(rightFoot, {rotation: 10, y: 1, x:-2});
tl_FOOT.to(rightFoot, {rotation: -5,y: -6,duration: .5}); 

const tl_LEG= gsap.timeline({repeat: -1, yoyo: true});
tl_LEG.to(rightLeg, {rotation: -1, y: -8, duration: .5});

