class Food{

    constructor(){
      this.foodStock = 20
       
        this.image = loadImage("images/Milk.png")
    }
  
    getfoodStock(){
       return  this.foodStock ;
    }

    updatefoodStock(foodStock){
       this.foodStock = foodStock
    }

    detuctfoodStock(){
      if(this.foodStock > 0){
      this.foodStock = this.foodStock - 1;

    }
  }
    
    display(){
    var x = 80,y = 180;
    
     imageMode(CENTER);
     
     if(foodStock!== 0){
       for(var i = 0;i < this.foodStock;i++){
            if(i%10 === 0){
              x=80;
              y = y+ 60
            }
            image(this.image,x,y,70,70);
            x = x+ 30
       }
     }


    }
  }