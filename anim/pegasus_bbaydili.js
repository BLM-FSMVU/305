class pegasus_bbaydili extends Animator  {
    constructor() {
        super();
        this.author = 'bbaydili'
        this.desc = 'pegasus_rising'
        let x0 = "translate(150px)", x1 = "translate(450px)", y0="translateY(450px)", y1="translateY(150px)",
        r1="rotate(0)", r2="rotate(90deg)", r3="rotate(180deg)", r4="rotate(270deg)"
        this.anim = { transform: [x0, r1, r2, r3, r4, x1, y0, r1, r2, r3, r4, y1, x1, x0 ] }
        this.elt = document.createElement('img')
        this.elt.src = "https://bbaydili.github.io/ileriprogramlama/pegasus.jpg"
        this.elt.style = "font: 35px serif;"
        this.time = 5500
    }
    update() {
        let [d] = new Date().toTimeString().split(' ')
        this.elt.innerText = '\n\n'+d
    }
}