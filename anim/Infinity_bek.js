class Infinity_bek extends Animator  {
    constructor() {
        super();
        this.author = 'enesbek'
        this.desc = 'Infinity Square'
        let colours = ["red", "green", "blue", ]
        let animation1 = "translate(0,0)",
        animation2 = "translate(320px,320px)",
        animation3 = "translate(320px,0px)",
        animation4 = "translate(0px,320px)",
        animation5 = "translate(0px,0px)",
        animation6 = "rotate(90deg)"
        this.anim = { background: colours , transform: [animation1, animation2, animation3,animation4,animation5,animation6] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 80px; height: 80px; background-color: Black; border-radius : 0%;"
        this.time = 5000
    }
    update() { }
}