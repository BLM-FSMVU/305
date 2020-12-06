class bumpingArrow_Gurer extends Animator {
    constructor() {
        super();
        this.author = "Beyza Gürer";
        this.desc = "Arrow bumping into walls";
        this.elt = document.createElement("p");
        this.elt.innerText = "↔"
        this.elt.style = "font-size: 130px; bold; color: white; ";
        this.anim =  [
            { transform: 'rotate(90deg) translate3D(32%, 0%, 0)', color: 'white' },
            { transform: 'rotate(45deg) translate3D(100%,  18%, 0)', color: 'blue'},
            { transform: 'rotate(-45deg) translate3D(-28%, 300%, 0)', color: 'darkblue'},
            { transform: 'rotate(-135deg) translate3D(42%, -230%, 0)', color: 'purple' },
            { transform: 'rotate(-270deg) translate3D(40%, 75%, 0)', color: 'black' }
            ]

        this.time = 3500
    }

    update() { }
}