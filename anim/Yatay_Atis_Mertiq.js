class Yatay_Atis_Mertiq extends Animator  {
    constructor() {
        super();
        this.author = 'Mertiq'
        this.desc = 'Yatay Atış'
        let x0 = "translate(0px,0px)"
        let x1 = "translate(30px,5px)"
        let x2 = "translate(80px,20px)"
        let x3 = "translate(120px,45px)"
        let x4 = "translate(160px,90px)"
        let x5 = "translate(200px,125px)"
        let x6 = "translate(240px,180px)"
        let x7 = "translate(280px,245px)"
        let x8 = "translate(320px,320px)"
        let x9 = "translate(360px,420px)"
        let x10 = "translate(400px,500px)"
        this.anim = { transform: [x0,x1, x2, x3, x4, x5, x6, x7, x8, x9, x10 ] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 50px; height: 50px; background-color: Black; border-radius : 50%;"
        this.time = 5000
    }
}
