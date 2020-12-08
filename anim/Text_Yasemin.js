class Text_Yasemin extends Animator  {
    constructor() {
        super();
        this.author = 'Yasemin AKSOY'
        this.desc = 'Text yasemin moves square by rotatin 360'
        let b=["yellow","pink","lightgreen","orange"];
        
        var y0="translate(-20px,50px) rotate(45deg)",
        y1="translate(-20px,500px) rotate(90deg)",
        y2 ="translate(400px,500px) rotate(180deg)",
        y3="translate(400px,50px) rotate(270deg)",
        y4="translate(-20px,50px) rotate(90deg)";
       
        
        var texty = document.createTextNode("yasemin");
        this.anim = {background: b , transform: [y0,y1,y2,y3,y4]}
        this.elt = document.createElement("SPAN")
        this.elt.style.fontSize="50px";
        this.elt.style.userSelect="none";
        this.elt.style.position="absolute";
        this.elt.style.color= "brown";
        this.elt.top="-10px";
        this.elt.appendChild(texty);
        this.time = 5000
        
    }
    
    
}