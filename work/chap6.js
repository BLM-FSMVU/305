class Rabbit {
  constructor(type) {
    this.type = type
    this.teeth = "small"
  }
  speak(line) {
    console.log(this+" says "+line)
  }
  toString() {
    return this.type+" rabbit"
  }
}

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    for (let y = 0; y < height; y++)
      for (let x = 0; x < width; x++)
        this.content[y * width + x] = element(x, y);
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
  toString() {
    return "[object Matrix] "+this.width+"x"+this.height
  }
}

class Element {
  constructor(x, y, v) {
    this.x = x; this.y = y; this.value = v
  }
  toString() {
    return "("+this.x+","+this.y+") "+this.value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return {done: true};

    let v = this.matrix.get(this.x, this.y);
    let value = new Element(this.x, this.y, v);
    
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

class Temperature {
  constructor(celsius=0) {
    this.celsius = Math.round(celsius);
  }
  get fahrenheit() {
    return Math.round(this.celsius * 1.8 + 32);
  }
  set fahrenheit(value=32) {
    this.celsius = Math.round((value - 32) / 1.8);
  }
  toString() {
    return this.celsius+"°C"
  }
  static fromFahrenheit(value) {
    let t = new Temperature();
    t.fahrenheit = value;
    return t;
  }
}

class Chap6 extends Menu {
  constructor() {
    super();
    this.rabbits 
      = [new Rabbit("white"), new Rabbit("hungry"),
         new Rabbit("killer"), new Rabbit("black")];
    this.rabbits.toString = () => this.rabbits.length+" rabbits";
    this.rabbits[2].teeth = "long & sharp";
    this.matrix = new Matrix(3, 4, (x,y) => ""+x+y);
    this.symMat = new SymmetricMatrix(3, (x,y) => 10*x+y);
    this.temp = new Temperature(25);
  }
  journalArray() {
    let a = [];
    for (let x of JOURNAL)
      for (let y of x.events)
        if (!a.includes(y)) a.push(y);
    return a;
  }
  journalSet() {
    let s = new Set();
    for (let x of JOURNAL)
      for (let y of x.events)
        s.add(y);
    return s;
  }
  journalMap() {
    let m = new Map();
    for (let x of JOURNAL)
      for (let y of x.events) {
        let n = m.get(y);
        if (!n) n = 0;
        m.set(y, n+1);
      }
    return m;
  }
  objectToMap(x) {
    let m = new Map();
    for (let k in x) m.set(k, x[k]);
    return m;
  }
}
