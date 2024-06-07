setTimeout(() => {
    document.querySelector('#video').play();
}, 100)

AFRAME.registerComponent("listener", {
    init: function () {
        this.target = document.querySelector('#video');
        this.prevPosition = null;
        this.prevRotation = null;
    },

    tick: function () {
        this.target.setAttribute('visible', 'true')

        if (!this.prevPosition && !this.prevRotation) {
            this.target.setAttribute('position', this.el.getAttribute('position'))
            this.target.setAttribute('rotation', this.el.getAttribute('rotation'))
        } else {
            this.target.object3D.position.lerp(this.prevPosition, 0.1)
            let rot = this.target.object3D.rotation.toVector3().lerp(this.prevRotation, 0.1)
            this.target.object3D.rotation.setFromVector3(rot)
        }

        this.prevPosition = this.el.object3D.position
        this.prevRotation = this.el.object3D.rotation

    }
})