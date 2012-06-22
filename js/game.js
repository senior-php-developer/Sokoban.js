var Settings = {
 width: 320, 
 height: 320,
 polygon: 32, 
 level: 1, 
 boxes: 0
};

window.onload = function() {
 Crafty.init(Settings.width, Settings.height); 

 Crafty.sprite(Settings.polygon, "images/sprite32.png", {
   floor: [0,0],
   target: [0,0],
   done: [1,0],
   block: [0,1],
   wall: [1,1],
   box: [0,2],
   player: [2,3],
 });

 Crafty.scene("loading");
};
