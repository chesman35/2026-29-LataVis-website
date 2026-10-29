const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const title = document.querySelector('.page-title');

function checkTitle() {
    // Temporarily put title in its normal centred position
    header.classList.remove('title-wrapped');

    const logoRect = logo.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();

    const gap = 20;

    const logoRight = logoRect.right + gap;
    const titleLeft = titleRect.left;
    const titleRight = titleRect.right;

    // Title has collided with logo
    if (titleLeft < logoRight) {
        // Is there still enough room to keep the title on one line?
        if (titleRect.width <= window.innerWidth - logoRight - gap) {
            // Shift title so its left edge sits after logo
            title.style.left = `${logoRight + titleRect.width / 2}px`;
        } else {
            // Not enough room -> put it underneath logo
            header.classList.add('title-wrapped');
            title.style.left = '';
        }
    } else {
        title.style.left = '';
    }
}

window.addEventListener('resize', checkTitle);
window.addEventListener('load', checkTitle);