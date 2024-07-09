function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
// const circle1 = new Function('radius');
Circle.call({},1)
Circle.apply({},[1,2,3])
const another = new Circle();
