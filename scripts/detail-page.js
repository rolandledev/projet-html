const page = document.querySelector('main');
const ellipse = document.querySelector('.ellipse');
const img = document.getElementById("page-image");
const reach = 50;

const boxShadow = (e) => {
    const width = page.offsetWidth;
    const height = page.offsetHeight;

    let x = e.offsetX;
    let y = e.offsetY;

    if (page !== e.target) {
        x = x + e.target.offsetLeft;
        y = y  + e.target.offsetTop;
    }

    const xReach = Math.round((x / width * reach) - (reach / 2));
    const yReach = Math.round((y / height * reach) - (reach / 2));

    img.style.boxShadow = `${xReach}px ${yReach}px 23px -5px grey`;
    ellipse.style.boxShadow = `${xReach}px ${yReach}px 23px -5px grey`;
}

page.addEventListener('mousemove', boxShadow);