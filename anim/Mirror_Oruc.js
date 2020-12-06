class Mirror_Oruc extends Animator  {
    constructor() {
        super();
        this.author = 'Yusa Oruc'
        this.desc = 'Smooth color change'
        let b = ["lightcyan", "magenta", "yellow", "lightcyan"]
        let x0 = "translate(0px,200px)", 
            x1 = "translate(100px,0px)",
            x2 = "translate(200px,200px)",
            x3 = "translate(300px,0px)",
            x4 = "translate(400px,200px)",
            x5 = "translate(300px,400px)",
            x6 = "translate(200px,200px)",
            x7 = "translate(100px,400px)",
            x8 = "translate(0px,100px)"
        this.anim = { background: b , transform: [x0, x1, x2,x3,x4,x5,x6,x7,x8] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 60px; height: 60px; background-color: Black; border-radius : 90%;"
        this.time = 6000
    }
    update() { }  //no code is needed here
}