Crafty.scene("win", function () {
    Settings.level++;
    Crafty.background("#333");
    Crafty.e("2D, DOM, Text").attr({ w: 160, h: 160, x: 0, y: 50 })
        .text("Loading Level "+Settings.level)
        .css({"text-align": "center" });
    setTimeout(function(){
        Crafty.scene('main');
    },1000);
});