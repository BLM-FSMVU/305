class Goolkeeper_Abdurrahman extends Animator  {
    constructor() {
        super();
        this.author = 'Abdurrahman GoolKeeper'
        this.desc = 'GoolKeeper'
        let x0 = "translate(0)", x1 = "translateY(400px)", x3 = "translate(200px,300px)" ,r0 = "rotate(-90deg)", x2 = "translateX(400px)"
        this.anim = {transform: [x1, x2 , x3 , r0 ] }
        this.elt = document.createElement('img')
        this.elt.src = "https://user-images.githubusercontent.com/72756431/101625515-905e4000-3a2c-11eb-948a-2d74eb8daa35.png"        
        this.time = 3000
    }
    update() { }  //no code is needed here
}