class Ball_Hande extends Animator  {
    constructor() {
        super();
        this.author = 'Hande Neoldum'
        this.desc = 'Bouncing Ball'
        let y0= "translateY(0)", y1= "translateY(100px)" ,y2= "translateY(200px)" ,y3= "translateY(300px)" ,y4= "translateY(400px)" ;
        let x0 = "translate(0)", x1 = "translate(300px)", x2="translate(100px)"
        let z0="translate(100px)"+"translateY(200px)"
        let z1="translate(150px)"+y3
        let z2="translate(200px)"+y4
        let z3="translate(250px)"+y3
        let z4="translate(300px)"+y4
        let z5="translate(350px)"+"translateY(350px)"
        let z6="translate(375px)"+"translateY(375px)"
        let z7="translate(385px)"+"translateY(385px)"
        let z8="translate(390px)"+"translateY(390px)"
        let b = ["lightcyan","blue","green", "magenta", "yellow", "black","purple"]
        this.anim = {  background: b , transform: [y0,y4,z0,z1,z2,z3,z4,z5,z6,z7,z8] }  
        this.elt = document.createElement('div')
        this.elt.style = "width: 80px; height: 80px; border-radius:50%;"
        this.time = 2500
    
    }
    update() { }  //no code is needed here
}