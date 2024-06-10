document.querySelector('#lounch').addEventListener('click', () => {
    document.querySelector('#video').play();
    document.querySelector('[spatial-button]').click();
    document.querySelector('#louncher').style.display = "none"

})
