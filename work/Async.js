"use strict";
var ASYNC; //Async instance
const RDR2 = new FileReader();
RDR2.onload = function() { display(RDR2) };
function fileSelect(t) { 
//target t is the file selection HTMLInputElement
    let a = t.files; //display(t);
    if (a.length == 0) return;
    display(RDR2);
    if (a.length == 1) {
        let f = a[0]; display(f);
        ASYNC.displayFile(f)
    } else {
        display(a);
        let s = "";
        for (let f of a) 
            s += f.name+" "+f.size+" bytes "+NL;
        ASYNC.displayText(s)
    }
}

class Async extends Menu {
  constructor() {
    super(); ASYNC = this;
    this.navigator = navigator;
    this.clipboard = navigator.clipboard;
    this.geolocation = navigator.geolocation;
    this.reader = RDR2  //defined above
  }
  isTextFile(f) {
    console.assert(f instanceof File);
    return f.type.startsWith("text") || f.name.endsWith(".md")
         || f.name.endsWith(".js") || f.name.endsWith(".java");
  }
  displayFile(f) {
    console.assert(f instanceof File); let M = this;
    console.log(f.name+" "+f.size+" bytes "+f.type);
    if (f.type.startsWith("image")) {
        RDR2.onload = function(evt) {
            M.displayImage(RDR2.result)
        };
        RDR2.readAsDataURL(f);
    } else if (this.isTextFile(f)) {
        RDR2.onload = function(evt) {
            M.displayText(RDR2.result)
        };
        RDR2.readAsText(f);
    } else {
        this.displayText("Unknown")
    }
  }
  displayText(txt) {
    disp1.innerText = txt; disp2.src = ""; 
    return disp1
  }
  displayImage(url) {
    disp1.innerText = ""; disp2.src = url; 
    return disp2
  }
}
