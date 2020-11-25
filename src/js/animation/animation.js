import { gsap } from "gsap";

const rightFoot = document.querySelector("#rightFoot");
const rightLeg = document.querySelector("#rightLeg");
const head = document.querySelector("#head");
const hair = document.querySelector("#hair");
const buttons = document.querySelectorAll("button");

const leafs = [document.querySelector("#leftLeaf"),
            document.querySelector("#rightLeaf")];

const tl_FOOT = gsap.timeline({repeat: -1, yoyo: true});
tl_FOOT.set(rightFoot, {rotation: 10, y: -3, x:-1});
tl_FOOT.to(rightFoot, {rotation: -5,duration: .5}); 

const tl_LEG= gsap.timeline({repeat: -1, yoyo: true});
tl_LEG.to(rightLeg, {rotation: -1, y: -2, duration: .5});

