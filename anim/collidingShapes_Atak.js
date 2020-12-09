class collidingShapes_Atak extends Animator{
        constructor(){
        super();
        this.author = "Furkan Atak"
        this.desc = "Colliding Shapes"
        this.elt = document.createElement('img');
		//this.elt.style = "height: 50px;width: 50px;background-color:dodgerblue;border-radius: 50%; position: fixed;top: 50%;left: 50%;"  
       // this.elt.style = "border-style: solid;border-color: transparent transparent red transparent;border-width: 0 25px 25px 25px; height: 0;width: 50px;box-sizing: content-box;position: relative;margin: 20px 0 50px 0;"
        this.elt.src = "https://github.com/furkan-atakk/FastFingers/blob/master/fastfingers/smallCar.png?raw=true" 
        this.elt.style = "position: fixed;top: 25%;left:20%;"
        let x0 = ["rotate(0deg)","translate(0,0)","rotate(-30deg)","translate(180px,-150px)","rotate(180deg)","translate(-120px,-180px)","rotate(-180deg)"];
        let bg=["red","orange","yellow","green","blue"];
        let fonts = ["100%", "140%", "100%", "80%", "100%"]
		this.anim = { transform: x0}
		this.time = 3000
       
        

    }
    update() { }  //no code is needed here

}