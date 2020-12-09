class Arrow_Cagri4 extends Animator  {
    constructor() {
        super();
        this.author = 'Çağrı Ege'
        this.desc = 'Throw Arrow'
		//main.setAttribute("style", "background-color: #FFFFFF;");
		let x0 = "translate(0)", x1 = "translate(400px)"
		this.url="https://raw.githubusercontent.com/cagriege/ileriProgramlama/main/ok.png"
        this.anim = { transform: [x0, x1] }
        this.elt = document.createElement('img')
        this.elt.src =this.url
	    this.elt.style="width:100px;height:100px;"
        this.time = 1000
    }
   
	 update() { } 
}