class FlyingBallons_ZKAYA extends Animator  {
    constructor() {
        super();
        this.author = 'Zeliha Kaya'
        this.desc = 'Flying Ballons'
       
           let x0 = "translate(300px,500px)",
           x1 = "translate(200px,400px)",
           x2 = "translate(300px,300px)",
           x3= "translate(400px,250px)",

           x5 = "translate(300px,200px)",
           x7 = "translate(200px,150px)",

           x9 = "translate(100px,100px)",
           s0="scale(1.5,1.5)"

         this.anim = { transform: [x0, x1, x2,x3,x5,x7,x9,s0] }
        let img= document.createElement("img"); 
        this.elt = img;
        img.src = "https://zelihakaya96.github.io/html-Js-Works/balonlar.png"
        
        img.height =200;
        img.width =150;
        this.time = 4000
    }
}