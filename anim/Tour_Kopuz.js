class Tour_Kopuz extends Animator {
    constructor() {
        super();
        this.author = 'BurakKopuz'
        this.desc = 'Tour and Dissappear'
        let b = ["red", "magenta", "yellow", "lightcyan"]
        let
            x0 = "translate(250px,250px)",
            x1 = "translateX(0px)",
            x2 = "translateX(500px)",
            x3 = "translate(500px,500px)",
            x4 = "translate(0px,500px)"
        this.anim = {background: b , transform: [x0, x1, x2, x3, x4, x1, x0] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 100px; height: 100px; background-color: Black;"
        this.time = 3000
    }
    update() { }  //no code is needed here
}
