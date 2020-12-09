class ColorfulStick_Halil extends Animator  {
    constructor() {
        super();
        this.author = 'M A Eyler'
        this.desc = 'Smooth color change'
        let b = ["lightcyan", "magenta", "yellow", "lightcyan"]
        let x0 = "translate(0px,0px)"
        let x1 = "translate(0px,50px)"
        let x2 = "translate(0px,100px)"
        let x3 = "translate(0px,150px)"
        let x4 = "translate(0px,200px)"
        let x5 = "translate(0px,250px)"
        let x6 = "translate(0px,300px)"
        let x7 = "translate(0px,350px)"
        let x8 = "translate(0px,400px)"
        let x9 = "translate(0px,450px)"
        let a = '0%'
        let a1 = '90%'
        this.elt = document.createElement('div')
        this.elt.style = "width: 10px; height: 10px; background: black;margin: auto"

        this.anim = { transform: [x0, x1, x2,x3,x4,x5,x6,x7,x8,x9], width : [a,a1],background : b }
        this.time = 3000
        
    }
    update() { }
}