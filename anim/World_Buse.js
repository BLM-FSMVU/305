class World_Buse extends Animator {
    constructor() {
        super();
        "use strict";
        this.author = 'Buse TOPÇU'
        this.desc = "Earth's Movement"

        const iterations = 679;
        const tx = .100;

        this.earth = document.createElement("IMG", "img");
        this.earth.setAttribute("src", 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png');
        this.elt = this.earth;
        this.anim = { transform: `rotate(.120turn) translateX(${iterations * tx}vmin) translateY(${iterations * tx}vmin)` }
        this.time = 16000
    }
    update() {}  //no code is needed here
}