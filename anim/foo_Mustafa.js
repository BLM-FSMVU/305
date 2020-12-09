class foo_Mustafa extends Animator  {
    constructor() {
        super();
        this.author = 'Mustafa Ayaz'
        this.desc = 'yuvarlak falan'
        let colors = ["black", "blue", "pink"]
        let a = "translate(0,50px)"
        let b = "translate(50px,50px)"
        let c = "translate(50px,100px)"
        let d = "translate(100px,150px)"
        let e = "translate(150px,150px)"
        let f = "translate(150px,200px)"
        let g = "translate(200px,200px)"
        this.anim = { transform: [a, b, c, d, e, f, g] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 40px; height: 40px; background-color: Black; border-radius : 90%;"
        this.time = 6000
    }
}