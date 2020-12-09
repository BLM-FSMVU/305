class Goal_Gundogan extends Animator  {
    constructor() {
        super();
        this.author = 'Furkan Gundogan'
        this.desc = 'Animations of a soccer ball'
        this.elt = document.createElement('img')
        this.elt.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png"
        this.elt.style = "width: 15%; border-radius:60%; padding:2px;"              
        let b = ["purple", "red", "blue", "yellow","black"]
        let x2 = "translate(380px)"     
        let r1="rotate(-175deg)"       
        this.anim = {transform: [x2,r1,x2],background:b}
        this.time = 1250
    }
    update() { }  //no code is needed here
}