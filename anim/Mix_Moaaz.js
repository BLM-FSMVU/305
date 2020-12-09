class Mix_Moaaz extends Animator {
    constructor() {
        super();
        this.author = 'Moaaz GABALLAH'
        this.desc = 'Mixed Animation'

        let main = document.getElementById("main");
        //main.setAttribute("style", "background-color: white;");

        let image = document.createElement("IMG");
        image.setAttribute("src", "https://moaazgab.github.io/AdvancedProgramming/HomeWork/HW3/Mickey_Mouse.png");

        this.elt = image;
        this.anim = { transform: ["rotate(0)", "rotate(90deg)", "rotate(180deg)", "rotate(270deg)", "rotate(360deg)"],
                    	width: ["250px", "350px", "250px","150px", "50px", "0", "50px", "150px", "250px"]};
        this.elt.style = "width: 35%; top: 27%; position: relative; left: 50%;"
        this.time = 10000;
    }
}
