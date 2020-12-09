class button_adem extends Animator  { 
    constructor() { 
        super(); 
        this.author = 'AdemCELIK' 
        this.desc = 'Buton Yakala' 
        this.anim = { transform: ["translate(0)","translateX(100px)","translate(100px,100px)","translate(500px,500px)", 
        "translateY(300px)","translate(300px,300px)","translate(0)"], background : ["red","blue","black","green"]} 
        this.elt = document.createElement('button') 
        this.elt.style = "width:55px; height: 55px;"   
        this.elt.style.background="yellow" 
        this.elt.style.color="white" 
        this.elt.innerHTML="yakala beni" 
        this.time =2000 
    } 
    update() { }  //no code is needed here 
}