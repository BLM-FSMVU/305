class Square_Kzlcn extends Animator  {
    constructor() {
        super();
        this.author = 'Nazif Enes Kızılcin'
        this.desc = 'A Colorful Square Draws Square'
        let x0 = "translate(0,0)", x1 = "translate(400px,0)",x2="translate(400px,400px)",x3="translate(0,400px)"
        let c = ["red", "black", "white", "blue","green"]
        this.anim = { 
                      transform:[x0,x1,x2,x3,x0],
                      background:c
                    }
        this.elt = document.createElement('div')
        this.elt.style = "width:100px;height:100px;"
        this.time = 1000
    }
    update() { } 

}