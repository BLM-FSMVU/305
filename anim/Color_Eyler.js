class Color_Eyler extends Animator  {
    constructor() {
        super();
        this.author = 'M A Eyler'
        this.desc = 'Smooth color change'
        let b = ["lightcyan", "magenta", "yellow", "lightcyan"]
        this.anim = { background: b }
        this.elt = document.createElement('div')
        this.elt.style = "width: 100%; height: 100%;"
        this.time = 6000
    }
    update() { }  //no code is needed here
}