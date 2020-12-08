class drawingaletter_akif extends Animator  {
    constructor() {
        super();
        this.author = 'Âkif Kılıç'
        this.desc = 'Drawing A Letter'
      
        let  a0 = "translate(0px,0px)", 
             a1 = "translate(0px,400px)", 
             a2 = "translate(0px,0px)", 
             a3 = "translate(200px,0px)", 
             a4 = "translate(200px,400px)", 
             a5 = "translate(200px,200px)",
             a6 = "translate(0px,200px)", 
             a7 = "translate(200px,200px)";

        this.elt = document.createElement('div');
        let background=["red","yellow","green","blue", "red"];
        this.elt.style = "width:50px; height:50px; border-radius:50%; background-color:red; border: 30px solid black; ";
        this.anim = {background: background, transform: [a0, a1, a2, a3, a4, a5, a6, a7] }
        this.time = 3000
    }
    update() { }  

}