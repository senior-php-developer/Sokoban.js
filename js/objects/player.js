Crafty.c('Player', {
    init: function() {
        this.requires("2D, Canvas");
        this.requires("SpriteAnimation, Collision, Fourway");
        this.requires("player");
        
        this.attr({x: 0, y: 0});
        
        /************
        * Movement
        ************/
        this.animate("walk_right", 6, 3, 8);
        this.animate("walk_left", 9, 3, 11);
        this.animate("walk_up", 3, 3, 5);
        this.animate("walk_down", 0, 3, 2);
        
        this.fourway(1);
        
        this.bind("Moved", function(e) {
            if(this.x < e.x) {
              if(!this.isPlaying("walk_left"))
              this.stop().animate("walk_left", 10);
            }
            if(this.x > e.x) {
              if(!this.isPlaying("walk_right"))
              this.stop().animate("walk_right", 10);
            }
            if(this.y < e.y) {
              if(!this.isPlaying("walk_up"))
              this.stop().animate("walk_up", 10);
            }
            if(this.y > e.y) {
              if(!this.isPlaying("walk_down"))
              this.stop().animate("walk_down", 10);
            }
        });
    
    
        /************
        * Collisions
        ************/
        this.collision();
        
        this.onHit("solid", this.hitSolid);
        this.onHit("done", this.hitSolid);
        
        this.onHit("movable", function(e) {
            var object = e[0].obj;
            var dir = null;
            var speed = this._speed;
            
            if (Math.abs(this.y - object.y) < Settings.polygon*0.8) { // player stands to the right or left
                if (object.x > this.x && (this.x + Settings.polygon) > object.x)    dir = 2;    // moves right
                if (object.x < this.x && this.x < (object.x + Settings.polygon))    dir = 4;    // moves left
            } else if (Math.abs(this.x - object.x) < Settings.polygon*0.8) {  // player stands on top or bottom
                if (object.y < this.y && (this.y + Settings.polygon) > object.y)    dir = 1;    // moves down
                if (object.y > this.y && this.y < (object.y + Settings.polygon))    dir = 3;    // moves up
            }
            if (object.blocked == dir) {
                this.hitSolid(e);
            } else {
                object.trigger("Moved", {dir: dir, speed: speed});    
            }
        });
    },
  
    hitSolid: function(e) {
        var object = e[0].obj;
        if (Math.abs(this.y - object.y) < Settings.polygon*0.8) {
            if (object.x > this.x && (this.x + Settings.polygon) > object.x) {  // left
                this.x -= this._speed;
                this.stop();
            } else if (object.x < this.x && this.x < (object.x + Settings.polygon)) {  // right
                this.x += this._speed;
                this.stop();
            }
        } else if (Math.abs(this.x - object.x) < Settings.polygon*0.8) {
            if (object.y < this.y && (this.y + Settings.polygon) > object.y) {  // top
                this.y += this._speed;
                this.stop();
            } else if (object.y > this.y && this.y < (object.y + Settings.polygon)) {  // bottom
                this.y -= this._speed;
                this.stop();
            }
        }
    }
});
