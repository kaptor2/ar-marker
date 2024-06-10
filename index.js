


document.querySelector('#lounch').addEventListener('click', () => {
    document.querySelector('look-controls').removeEventListener('touchmove');
    document.querySelector('#video').play();
    document.querySelector('[spatial-button]').dispatchEvent(new TouchEvent('click', {
        bubbles: true,
        cancelable: true,
    }));
    document.querySelector('#louncher').remove();
    document.addEventListener('click', () => {

        if (AFRAME.modalVisible) {
            document.querySelector('[spatial-close-button]').dispatchEvent(new TouchEvent('click', {
                bubbles: true,
                cancelable: true,
            }));
        }

    })
})
