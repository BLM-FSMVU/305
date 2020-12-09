class BallControl_Kotan extends Animator  {
    constructor() {
        super();
        this.author = 'Seyma Kotan'
        this.desc = 'bounce and rotate ball, change size of ball'
        let y0 = "translate(100px,50px)", 
            y1 = "translate(100px,300px)",
            r0 = "rotate(0)",
            r1 = "rotate(180deg)"
            this.anim = { transform: [y0, y1, y0, y1, y0, y1,y0,y1,r0,r1,r0,r1,r0], height: ["100px", "150px", "200px", "150px"]}  
        var imp_1 = document.createElement("img"); 
        this.elt = imp_1;
        imp_1.src = "https://i0.wp.com/www.buraksecer.com/wp-content/uploads/2015/11/cropped-basketbol-topu.png?fit=512%2C512";
        imp_1.height =100;
        
        this.time = 5000
    }
}