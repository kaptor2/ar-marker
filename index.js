document.querySelector('#lounch').addEventListener('click', () => {
    document.querySelector('#video').play();
    document.querySelector('[spatial-button]').click();
    document.querySelector('#louncher').remove();
    document.addEventListener('click', () => {

        if (AFRAME.modalVisible) {
            document.querySelector('[spatial-close-button]').click()
        }

    })
})
