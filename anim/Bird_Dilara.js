class Bird_Dilara extends Animator { 
    constructor() {
    super();
    this.author = 'Dilara Demirhan'
    this.desc = 'Flying Bird'
    let x0 = "translate(0, 0)", x1 = "translate(500px, 600px)"
    let b = ["url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird1.png?token=ARLUOBJHUGVYSSODMMNHIHC73IEN4')", 
    "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird2.png?token=ARLUOBJ2J6GZEL2PKDZA6KC73IE5I')",
     "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird3.png?token=ARLUOBIBXEBURF5K7FL7G2273IE7E')",
    "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird1.png?token=ARLUOBJHUGVYSSODMMNHIHC73IEN4')",
     "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird2.png?token=ARLUOBJ2J6GZEL2PKDZA6KC73IE5I')",
      "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird3.png?token=ARLUOBIBXEBURF5K7FL7G2273IE7E')",
    "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird1.png?token=ARLUOBJHUGVYSSODMMNHIHC73IEN4')",
     "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird2.png?token=ARLUOBJ2J6GZEL2PKDZA6KC73IE5I')", 
    "url('https://raw.githubusercontent.com/dilarademirhan/BLM19305E/main/images/bird3.png?token=ARLUOBIBXEBURF5K7FL7G2273IE7E')"]
    this.elt = document.createElement('div')
    this.elt.style = "width: 127px; height: 128px;"
    this.anim = { background: b, transform: [x0, x1]}
    
    this.time = 1500
}
    update() { }  //no code is needed here
}
