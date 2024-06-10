/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener('touchstart', this.onClick);
  },
  pause: function () {
    window.removeEventListener('touchstart', this.onClick);
  },
  onClick: function (evt) {
    var videoEl = this.el.getAttribute('material').src;
    if (!videoEl) { return; }
    this.el.object3D.visible = true;
    videoEl.play();
  }
});
