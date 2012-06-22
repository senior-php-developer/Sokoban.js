Crafty.c('Target', {
  init: function() {
    this.requires("2D, Canvas");
    this.requires("target");
    this.attr({x: 0, y: 0});
  },
  
  clear: function(){
      this.removeComponent('target');
      this._visible = false;    
  }
});