class ucak_ahmetfatih extends Animator  {
    constructor() {
        super();
        this.author = 'afceyhan'
        this.desc = 'ucak hareketi'
        let x0 = "rotate(0)", x1 = "rotate(90deg)"
        let y0 = "translateY(0)", y1 = "translateY(500px)"
        let k0 = "translateX(0)", k1 = "translateX(500px)"
        this.anim = { transform: [x0,y0, x1,y1,x0,y0,x1,k0, x0,k1,x1,y1,x0,k0,x1]}
        this.elt = document.createElement('img')
        this.elt.src="https://afceyhan.github.io/Advanced-Programming-Techniques/uckogo.png"
        this.elt.style = "font: 35px serif;"
        this.time = 10000
    }
    update() { }  //no code is needed here
}