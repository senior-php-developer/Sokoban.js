Crafty.scene("loading", function () {
    Crafty.load(["images/sprite.png"], function () {
        setTimeout(function(){
            Crafty.scene("main");    
        },600);
        
    });
   
    Crafty.background("#333");
    Crafty.e("2D, DOM, Text").attr({ w: 160, h: 160, x: 0, y: 50 })
        .text("Loading Level "+Settings.level)
        .css({"text-align": "center" });
});