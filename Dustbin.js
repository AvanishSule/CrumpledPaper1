class Dustbin{
    constructor(x,y,width,height,options){
        this.width = width;
        this.height = height;
         
        this.dustbin1 = Bodies.rectangle(x,y,width,height,{isStatic:true});
        Matter.Body.setAngle(this.dustbin1, this.angle);
        World.add(world,this.dustbin1);

        console.log(x);
   
        this.dustbin2 = Bodies.rectangle(x,y,width,height,{isStatic:true});
        Matter.Body.setAngle(this.dustbin2, this.angle);
        World.add(world,this.dustbin2);
   
       this.dustbin3 = Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.dustbin3);

        }
        display(){
          //  var angle = this.angle;
            push();
            translate(this.dustbin1.position.x, this.dustbin1.position.y);
            rotate(this.angle);
            rect(0,0,this.width,this.height);
            pop();


            push();
            translate(this.dustbin2.position.x, this.dustbin2.position.y);
            rotate(this.angle);
            rect(0,0,this.width,this.height);
            pop();

            push();
            translate(this.dustbin3.position.x, this.dustbin3.position.y);
            rotate(this.angle);
            rect(0,0,this.width,this.height);
            pop();
          }
   
       
}