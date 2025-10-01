globalThis.alert = console.log;
// Replaced alert with console.log

// these objects do the same

let user = {
  sayHi: function() {
    alert("Hello");
  }
};
// method shorthand looks better, right? No it does not you dumb fuck language.
// It does NOT work outside an object though!!!
user = {
  sayHi() { // same as "sayHi: function(){...}"
    console.log("Hello");
  }
};
// user.sayHi();

user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

// user.sayHi(); // John

user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

/*
The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above
*/

// let baba = [
//     "Ricky",
//     () => alert("Hello")
// ]

// console.log(baba[1]());

//SECTION Exercises

let calculator = {
    // a: 0,
    // b: 0,
    read(a,b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

calculator.read(2,3);
alert(calculator.sum());
alert(calculator.mul()); 

//!SECTION

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

