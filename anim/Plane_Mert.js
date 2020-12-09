class Plane_Mert extends Animator {
    constructor() {
        super();
        this.author = 'Mert Agcakoyun'
        this.desc = 'Plane Landing Animation'
        let backgrounds = ["white", "red", "blue", "cyan"]
        let x0 = "translate(0,0)",
            x1 = "translate(250px,250px) rotate(40deg)",
            x2 = "translate(400px,400px) rotate(-20deg)",
            x3 = "translate(500px,400px)";



        this.elt = document.createElement('img')
        this.elt.src = "https://cdn.iconscout.com/icon/free/png-256/plane-2359613-1987480.png";
        this.anim = { transform: [x0, x1, x2, x3] }
        this.elt.style = "width:100px; height:50px; "
        this.time = 2500
    }
    update() {
    }
}