class Leaf_Kara extends Animator  {
    constructor() {
        super();
        this.author = 'Melike Kara'
        this.desc = 'Falling Leaf'
        this.elt = document.createElement('img')
        this.elt.src="https://e7.pngegg.com/pngimages/536/504/png-clipart-mooresville-mercantile-autumn-leaf-color-autumn-leaf-color-drawing-autumn-maple-leaf.png"
        this.elt.style = "width: 30%; height: 30%:"
        this.time = 3000
        let x = "translate(300px,550px)"
        let r1 = "skewX(50deg)"
        this.anim = { transform: [r1, x] }

    }
    update() {
      
    }
}
