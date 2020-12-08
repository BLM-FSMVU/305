class Boomerang_MuhammedAli extends Animator  {
    constructor() {
        super();
        this.author = 'Muhammed Ali'
        this.desc = 'Boomerang'
        let t0 = "translate(0,0) rotateY(0deg) rotateX(0deg)", t1 = "translate(200px,50px) rotateY(300deg) rotateX(30deg)",
            t2 = "translate(400px,100px) rotateY(600deg) rotateX(60deg)", t3 = "translate(500px,200px) rotateY(750deg) rotateX(90deg)",
            t4 = "translate(400px,250px) rotateY(850deg) rotateX(60deg)", t5 = "translate(200px,150px) rotateY(600deg) rotateX(30deg)",
            t6 = "translate(75px, 75px) rotateY(350deg) rotateX(15deg)"
        this.anim = { transform: [t0, t1, t2, t3, t4, t5, t6, t0] }
        this.elt = document.createElement('img')
        this.elt.src = "https://muhammedalibursali.github.io/AdvancedProgramming/boomerang.png"
        this.time = 3000
    }
    update() {}
}