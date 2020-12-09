class Baklava_EnesD extends Animator {
    constructor() {
        super();
        this.author = 'EnesDurmus'
        this.desc = 'Drawing Diamond'
        
        let b = ["yellow", "red", "orange", "purple"]
        let x0 = "translate(250px,0px)";
        let x1 = "translate(400px,200px)";
        let x2 = "translate(250px,400px)";
        let x3 = "translate(100px,200px)";

        this.anim = { background: b, transform: [x0, x1, x2, x3, x0] }
        this.elt = document.createElement('p')
        this.elt.style = "width: 10%; height: 10%;"
        this.time = 6000
    }
}