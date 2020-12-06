class ColorDance_Atik extends Animator  {
    constructor() {
        super();
        this.author = 'Yunus E. Atik'
        this.desc = 'Smooth color change'
        let b = ["blue", "red", "green", "grey"]
        let x0 = "translate(0,0)", 
            x1 = "translate(320px,50px)",
            x2 = "translate(0px,100px)",
            x3 = "translate(320px,150px)",
            x4 = "translate(0px,200px)",
            x5 = "translate(320px,250px)",
            x6 = "translate(0px,300px)",
            x7 = "translate(320px,350px)",
            x8 = "translate(0px,400px)",
            x9 = "translate(320px,450px)",
            x10 = "translate(0px,500px)"
        this.anim = { background: b , transform: [x0, x1, x2,x3,x4,x5,x6,x7,x8,x9,x10] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 50px; height: 50px;"
        this.time = 6000
    }
    update() { }  //no code is needed here
}