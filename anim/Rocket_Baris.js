class Rocket_Baris extends Animator {
    constructor() {
        super();
        this.author = 'Baris Kislak'
        this.desc = 'Rocket Flying'
        let step0 = "translate(200px,500px)",
            step1 = "translate(25px,400px) rotate(15deg)",
            step2 = "translate(275px,300px) rotate(-20deg)",
            step3 = "translate(25px,200px) rotate(10deg)",
            step4 = "translate(275px,100px) rotate(0deg)",
            step5 = "translate(200px,-700px)";



        this.elt = document.createElement('img')
        this.elt.src = "https://cdn.iconscout.com/icon/free/png-256/rocket-2675771-2222188.png";
        this.anim = { transform: [step0, step1, step2, step3, step4, step5] }
        this.elt.style = "width:128px; height:128px; "
        this.time = 3000
    }
    update() { }  //no code is needed here
}