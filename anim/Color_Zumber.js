class Color_Zumber extends Animator  {
    constructor() {
        super();
        this.author = 'Ahmet ZUMBER'
        this.desc = 'Game ball moves like a snake'
        let b = ["grey", "purple", "orange", "brown"]
        let x0 = "translate(0,0)", 
            x1 = "translate(0px,320px)",
            x2 = "translate(60px,320px)",
            x3 = "translate(60px,0px)",
            x4 = "translate(100px,0px)",
            x5 = "translate(100px,320px)",
            x6 = "translate(140px,320px)",
            x7 = "translate(140px,0px)",
            x8 = "translate(180px,0px)",
            x9 = "translate(180px,320px)",
            x10 = "translate(220px,320px)",
            x11 = "translate(220px,0px)",
            x12 = "translate(260px,0px)",
            x13 = "translate(260px,320px)",
            x14 = "translate(300px,320px)",
            x15 = "translate(300px,0px)",
            x16 = "translate(340px,0px)",
            x17 = "translate(340px,320px)"   
        this.anim = { background: b , transform: [x0, x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 30px; height: 30px; background-color: Black; border-radius : 90%;"
        this.time = 6000
    }
    update() { }  
}

