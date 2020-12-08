class IbrahimTarla_Animation extends Animator {
    constructor() {
        super();
        this.author = 'İbrahim TARLA'
        this.desc = 'Moving train with animation.'
        let x0 = "translate(0)", x1 = "translateY(300px)", r0 = "rotate(270deg)", r1 = "rotate(45deg)", x2 = "translateX(100px)"
        this.anim = { transform: [x0, r0, x1, x2, r1, x0] }
        this.elt = document.createElement('img')
        this.elt.src = "https://ibrahimtarla.github.io/Advanced_Programming_With_Java_Script/banana.gif"
        this.elt.style = "text-align: center"
        this.time = 5000
    }
    update() {

    }
}