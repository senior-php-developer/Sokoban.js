Crafty.c('Box', {
    init: function() {
        this.blocked = 0;
        this.direction = 0;
        this.speed = 0;
        
        this.requires("2D, Canvas, Collision");
        this.requires("box, movable");
        this.attr({x: 0, y: 0});
        
        this.bind("Moved", function(e){
            this.blocked = 0;
            this.speed = e.speed;
            switch(e.dir) {
                case 1:
                    this.y -= e.speed;
                    this.direction = 1;
                break;
                case 2:
                    this.x += e.speed;
                    this.direction = 2;
                break;
                case 3:
                    this.y += e.speed;
                    this.direction = 3;
                break;
                case 4:
                    this.x -= e.speed;
                    this.direction = 4;
                break;
           } 
        });
        
        /************
        * Collisions
        ************/
        this.collision();
        
        this.onHit("solid", this.hitSolid);
        this.onHit("box", this.hitSolid);
        
        this.onHit("target", function(e){
           var object = e[0].obj;
           if ((Math.abs(this.x - object.x) < Settings.polygon/10) && (Math.abs(this.y - object.y) < Settings.polygon/10)) {
               object.clear();
               this.clear();
               Crafty.e('2D, Canvas, done, solid').attr({x: object.x, y: object.y, z: 20});
               if ((Settings.boxes -= 1) === 0) {
                   Crafty.scene('win');
               }
           }
        });
    },
    
    hitSolid: function(e) {
        var object = e[0].obj;
        this.blocked = this.direction;
        switch(this.direction) {
            case 1: this.y += this.speed; break;
            case 2: this.x -= this.speed; break;
            case 3: this.y -= this.speed; break;
            case 4: this.x += this.speed; break;
        }
    },
    
    clear: function(){
      this.removeComponent('box');
      this._visible = false;  
      this.blocked = 0;
      this.x = 0;
      this.y = 0;  
    }
});