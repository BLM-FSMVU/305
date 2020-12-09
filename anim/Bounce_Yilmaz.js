class Bounce_Yilmaz extends Animator  {
    constructor() {
        super();
        this.author = 'Mesut Yılmaz'
        this.desc = 'Bouncing Ball'
        this.elt = document.createElement('div');
    let y0 = "translateY(0px)", y1 = "translateY(500px)", y2 = "translateY(250px)", y3 = "translateY(500px)", 
      y4 = "translateY(375px)", y5 = "translateY(500px)", y6 = "translateY(440px)", y7 = "translateY(500px)";
		this.elt.style = "width:70px; height:70px; border-radius:50%; background-color:#0040ff; margin-left:280px;";
		let bg=["red","orange","yellow","green","blue"];
		this.anim = { transform: [y0, y1, y2, y3, y4, y5, y6, y7],
					  background: bg
					}
		this.time = 2000
    }
    update() { }  //no code is needed here
	
}
