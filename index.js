


document.querySelector('#lounch').addEventListener('touchstart', () => {
    document.querySelector('look-controls').removeEventListener('touchmove');
    document.querySelector('#video').play();
    document.querySelector('[spatial-button]').dispatchEvent(new TouchEvent('touchstart', {
        bubbles: true,
        cancelable: true,
    }));
    document.querySelector('#louncher').remove();
    document.addEventListener('touchstart', () => {

        if (AFRAME.modalVisible) {
            document.querySelector('[spatial-close-button]').dispatchEvent(new TouchEvent('touchstart', {
                bubbles: true,
                cancelable: true,
            }));
        }

    })
})
