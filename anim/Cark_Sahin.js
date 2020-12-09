class Cark_Sahin extends Animator  {
    constructor() {
        super();
        this.author = 'Aycan Sahin'
        this.desc = 'Merkez Etrafında Dönen Çubuk'
        let r0 = "rotate(0deg)"
        let r1 = "rotate(30deg)"
        let r2 = "rotate(60deg)"
        let r3 = "rotate(90deg)"
        let r4 = "rotate(120deg)"
        let r5 = "rotate(150deg)"
        let r6 = "rotate(180deg)"
        let r7 = "rotate(210deg)"
        let r8 = "rotate(240deg)"
        let r9 = "rotate(270deg)"
        let r10 = "rotate(300deg)"
        let r11 = "rotate(330deg)"
        let r12 = "rotate(360deg)"
        this.anim = { transform: [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12] }
        this.elt = document.createElement('img')
        this.elt.src = "https://aycansahin.github.io/ClassHW/cark.jpg"
        this.elt.style = "text-align: center"
        this.time = 2000
   
    }
    update() {
    }
}