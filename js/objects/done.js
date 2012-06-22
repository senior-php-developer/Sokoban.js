Crafty.c('Done', {
  init: function() {
    this.requires("2D, Canvas");
    this.requires("done");
    this.attr({x: 0, y: 0});
  },
  
  clear: function(){
      this.removeComponent('done');
      this._visible = false;    
  }
});