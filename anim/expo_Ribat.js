class expo_Ribat extends Animator  {
    constructor() {
        super();
        this.author = 'Ahmet Ribat Turan'
        this.desc = 'exponential'
		let b = ["white", "yellow", "orange", "red"]
		let x0 = "translate(0px,800px)"
		let x1 = "translate(50px,798px)"
		let x2 = "translate(100px,794px)"
		let x3 = "translate(150px,786px)"
		let x4 = "translate(200px,770px)"
		let x5 = "translate(250px,738px)"
		let x6 = "translate(300px,674px)"
		let x7 = "translate(350px,546px)"
		let x8 = "translate(400px,290px)"
		let x9 = "translate(450px,0px)"
		
        this.anim = { background:b, transform: [x0,x1,x2,x3,x4,x5,x6,x7,x8,x9]}
        this.elt = document.createElement('div')
		this.elt.style = "width: 20px; height: 20px; background-color: black; border-radius: 50%;"
        this.time = 4000
    }
    update() { }  //no code is needed here
}