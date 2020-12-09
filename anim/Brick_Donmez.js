class Brick_Donmez extends Animator {
  constructor() {
    super();
    this.author = "Yusuf Dönmez";
    this.desc = "Rotating and travveling brick";
    let backgroundArray = ["red"]
    let animationArray = [
      "translate(0px, 0px) rotate(0.5turn)",
      "translate(0px, 200px)",
      "translate(200px, 200px)",
      "translate(200px, 0px) rotate(-0.5turn)",
      "translate(0px, 0px) rotate(-0.5turn)",
    ];
    this.anim = { background:backgroundArray, transform: animationArray };
    this.elt = document.createElement("hr");
    this.elt.style = "width:100px;border: none;height: 20px;margin-top:50px;";
    this.time = 7000;
  }
  update() {
    //CSS Tricks
    this.anim.background = ["#"+Math.floor(Math.random()*16777215).toString(16)]
  }
}
