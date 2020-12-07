class DVD_KACI extends Animator  {
    constructor() {
        super();
        this.author = 'Abdussamet KACI'
        this.desc = 'Simple drwing star'
        let positions = ["translate(200px, 0px)","translate(0px, 200px)", "translate(200px, 400px)", "translate(400px, 200px)", "translate(200px, 0px)"]
        let colors = ["darkblue", "magenta", "yellow", "red", "darkblue"]
        this.anim = { transform: positions , color: colors}
        this.elt = document.createElement('div')
        this.elt.style = "font: 35px serif;"
        this.time = 5000
    }
    update() {
        this.elt.innerText = '@DVD'
    }
}