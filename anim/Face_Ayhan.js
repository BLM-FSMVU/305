class Face_Ayhan extends Animator  {
    constructor() {
        super();
        this.author = 'Ayhan Arslan MADEN'
        this.desc = 'Smooth Face Change'
        main.setAttribute("style", "background-color: #f6eae0;");
        let x0 = "translateX(0)", x1 = "translateY(680px)", x2 = "translateX(540px)"
        let b = ["url('https://raw.githubusercontent.com/ayhanarslanmaden/image/main/1.png", "url('https://raw.githubusercontent.com/ayhanarslanmaden/image/main/2.png')", "url('https://raw.githubusercontent.com/ayhanarslanmaden/image/main/3.png')", "url('https://raw.githubusercontent.com/ayhanarslanmaden/image/main/4.png')", "url('https://raw.githubusercontent.com/ayhanarslanmaden/image/main/5.png')"]
        this.anim = { background: b, transform: [x0, x1, x2, (x1+x2), x0]  }
        this.elt = document.createElement('div')
        this.elt.style = "width: 9.7%; height: 8.1%; position: relative;"
        this.time = 12000
    }
    update() { }  //no code is needed here
}
