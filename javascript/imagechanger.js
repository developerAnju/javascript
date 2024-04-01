const image_change =document.querySelector('img');

image_change.onclick = () => {
    const mySrc = image_change.getAttribute('src');
    if (mySrc === "images/aster-flower.png") {
        image_change.setAttribute("src","images/lotus-flower.png");
    } else {
        image_change.setAttribute("src","images/aster-flower.png");
    }
}