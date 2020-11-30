class Clock_Small extends Animator  {
    constructor() {
        super();
        this.author = 'Small Simple'
        this.desc = 'Simple digital clock'
        let x0 = "translate(0)", x1 = "translate(300px)"
        this.anim = { transform: [x0, x1, x0] }
        this.elt = document.createElement('p')
        this.elt.style = "font: 35px serif;"
        this.time = 3000
    }
    update() {
        let [d] = new Date().toTimeString().split(' ')
        this.elt.innerText = '\n\n'+d
    }
}