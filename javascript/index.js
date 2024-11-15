const obj = {
    x: "MyObject",
    sayHello: function () {
        console.log("Hello, " + this.x);
    }
};
setTimeout(obj.sayHello.bind(obj), 1000);
console.log(obj.sayHello.bind(obj));


