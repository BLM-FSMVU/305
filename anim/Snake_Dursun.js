class Snake_Dursun extends Animator  {
    constructor() {
        super();
        this.author = 'Omer Faruk Dursun'
        this.desc = 'Smooth color change'
        let b = ["blue", "red", "green", "grey"]
        let x0 = "translate(0,0)", 
            x1 = "translate(340px,0px)",
            x2 = "translate(340px,40px)",
            x3 = "translate(0px,40px)",
            x4 = "translate(0px,80px)",
            x5 = "translate(340px,80px)",
            x6 = "translate(340px,120px)",
            x7 = "translate(0px,120px)",
            x8 = "translate(0px,160px)",
            x9 = "translate(340px,160px)",
            x10 = "translate(340px,200px)",
            x11 = "translate(0px,200px)",
            x12 = "translate(0px,240px)",
            x13 = "translate(340px,240px)",
            x14 = "translate(340px,280px)",
            x15 = "translate(0px,280px)",
            x16 = "translate(0px,320px)",
            x17 = "translate(340px,320px)",
            x18 = "translate(340px,360px)",
            x19 = "translate(0px,360px)",
            x20 = "translate(0px,400px)",
            x21 = "translate(340px,400px)",
            x22 = "translate(340px,440px)"

        this.anim = { background: b , transform: [x0, x1, x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 50px; height: 50px;"
        this.time = 6000
    }
    update() { }  //no code is needed here
}