class WriteName_Emre extends Animator {
    constructor() {
        super();
        this.author = 'Emre USTA'
        this.desc = 'Writing the First Letters of My Name and Last Name'
        let bg = ["pink", "darkred", "blue", "yellow", "gray", "black", "cyan"]
        let x0 = "translate(0,0)",
            x1 = "translate(500px,0px)",
            x2 = "translate(0px,0px)",
            x3 = "translate(0px,500px)",
            x4 = "translate(500px,500px)",
            x5 = "translate(0px,500px)",
            x6 = "translate(0px,250px)",
            x7 = "translate(500px,250px)",
            x8 = "translate(0px,250px)",
            x9 = "translate(0px,0px)",
            x10 = "translate(0px,500px)",
            x11 = "translate(500px,500px)",
            x12 = "translate(500px,0px)"
        this.anim = { background: bg, transform: [x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 50px; height: 50px; background-color: Black; border-radius : 40%;"
        this.time = 10000

    }
    update() {

    }
}