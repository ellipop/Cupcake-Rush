class Play{
    constructor (){
        
    }
    start(){

        imageSequence = createSprite(400, 300);
        imageSequence.addAnimation("sequence", sAnimation);
       

        setTimeout(() => {
            imageSequence.changeImage("second");
        }, 3000);

        console.log("animation")
      
    }
}