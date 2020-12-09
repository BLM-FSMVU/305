class SizeAsSecs_Mertcan extends Animator {
    constructor() {
        super();
        this.author = 'Mertcan Atay'
        this.desc = 'Size changing square based on seconds'
        let b = ["red", "blue", "yellow", "green"]
        let x0 = "translate(200px,0)",
            x1 = "translate(400px,50px)",
            x2 = "translate(200px,100px)",
            x3 = "translate(400px,150px)",
            x4 = "translate(200px,200px)";
        this.anim = { background: b , transform: [x0,x1,x2,x3,x4] }
        this.elt = document.createElement('div')
        this.elt.style = 'width: 50px; height: 50px;'
        this.time = 2000
    }
    update() { 
        let seconds = new Date().toTimeString().split(' ')[0].split(':')[2];
        let size = 50 + 2 * parseInt(seconds);
        this.elt.style = 'width: ' + size + 'px; height: ' + size + 'px;'
    }
}