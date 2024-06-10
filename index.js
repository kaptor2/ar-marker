document.querySelector('#lounch').addEventListener('click', () => {
    document.querySelector('#video').play();
    document.querySelector('[spatial-button]').click();
    document.querySelector('#louncher').style.display = "none"
    document.addEventListener('click', () => {
        console.log(AFRAME.modalVisible)
        if (AFRAME.modalVisible) {
            document.querySelector('[spatial-close-button]').click();
        }

    })
})
