class dotTranslate_Kumru extends Animator  {
    constructor() {
        super();
        this.author = 'Ahmet C. Kumru'
        this.desc = 'Translating Dot'
        let colours = ["white", "red"]
        let animation1 = "translate(0,0)", 
        animation2 = "translate(350px,600px)",
        animation3 = "translate(0px,600px)",
        animation4 = "translate(350px,0px)",
        animation5 = "translate(0px,0px)",
        animation6 = "translate(0px,600px)",
        animation7 = "translate(340px,600px)",
        animation8 = "translate(340px,0px)",
        animation9 = "translate(0px,0px)"
        this.anim = { background: colours , transform: [animation1, animation2, animation3,animation4,animation5,animation6,animation7,animation8,animation9] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 30px; height: 30px; background-color: Black; border-radius : 90%;"
        this.time = 6000
    }
    update() { }  
}