class SametEmre_Gif extends Animator {
    constructor() {
        super();
        this.author = 'Samet Emre TOPALOĞLU'
        this.desc = 'Moving a basketballer gif with animation'
        let x0 = "translate(100px)", x1 = "translateY(500px)", r0 = "rotate(300deg)", r1 = "rotate(45deg)", x2 = "translateX(50px)"
        this.anim = { transform: [x0, r0, (x1+x2), x2, r1, x0] }
        this.elt = document.createElement('img')
        this.elt.src = "https://sametemret.github.io/AdvanceProg_Works/kobe.gif"
        this.elt.style = "text-align: center"
        this.time = 10000
    }
    update() {

    }
}
