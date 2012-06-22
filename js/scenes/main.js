Crafty.scene("main", function () {
    Crafty.background('#C2FFC9');
    generateWorld();
    console.log(Settings);
});

function generateWorld() {
    var imax = (Settings.width / Settings.polygon)-1;
    var jmax = (Settings.height / Settings.polygon)-1;
    var objects = ["Empty","Wall","Block","Box","Target","Player"];
    var zIndex =  [ 0,      100,   50,     20,   5,      10];
    Settings.boxes = act1['l'+Settings.level].boxes;
    for(var i=0; i<10; i++) {
        for(var j=0; j<10; j++) {
            var obj = act1['l'+Settings.level].map[j][i];
            if (obj == 0) continue;
            console.log(obj);
            Crafty.e(objects[obj]).attr({x: i*Settings.polygon, y: j*Settings.polygon, z: zIndex[obj]});
        }
    }
}