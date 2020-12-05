class halilyaris extends Animator  {
    constructor() {
        super();
        this.author = 'Halil Ibrahim YARIS'
        this.desc = 'Moving a triangle'
        let x0 = "translate(300px,50px)"
        let x1 = "translate(50px,300px)"
        let x2 = "translate(480px,300px)"
        let x3 = "translate(300px,50px)"
        this.anim = { transform: [x0,x1, x2, x3] }
        this.elt = document.createElement('div')
        this.elt.style = " width: 0px; height: 0px; border-left: 30px solid transparent;border-right: 30px solid transparent;border-bottom: 30px solid orange;"
        this.time = 4000
    }
}