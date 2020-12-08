class Bubbles extends Animator  {
    constructor() {
        super();
        this.author = 'Faruk Bera Zulaloglu'
        this.desc = 'Bubble animation'
        let x0 = "translate(40px,20px)", x1 = "translate(100px,50px)",x2="translate(200px,400px)"
        let b = ["blue", "yellow", "orange", "purple","magenta","blue"]
        this.anim = {transform: [x0, x1, x2,x1,x0],background: b }
            this.elt = document.createElement('div')
            this.elt.style = "width:100px;height:100px;border-radius: 50%;"
            this.time = 2000
    }
    update() {
    }
    
}

