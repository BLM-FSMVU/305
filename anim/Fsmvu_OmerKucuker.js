class Fsmvu_OmerKucuker extends Animator  {
	constructor() {
        super();
        this.author = 'Omer F Kucuker'
        this.desc = 'FSMVU typing'
		let x1 = "translateY(-25px)", x2="translateY(500px)",x3="translateX(200px)"
        this.anim = { transform: [x2, x1,x2] }
		this.elt = document.createElement('p')
        this.elt.style = " font-size: 100px; color: red;"
		this.elt.innerText="F"
		this.time = 2000
	
		var delay=0
		setTimeout(() => { this.elt.innerText+="S"; }, delay+=1500);
		setTimeout(() => { this.elt.innerText+="M"; }, delay+=1000);
		setTimeout(() => { this.elt.innerText+="V"; }, delay+=1000);
		setTimeout(() => { this.elt.innerText+="U"; }, delay+=1000);
		setTimeout(() => {  this.anim = { transform: [x2, x3,x2] }; }, delay+=1);
    }
    update() { }

}