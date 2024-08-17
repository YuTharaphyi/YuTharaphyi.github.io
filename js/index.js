document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee-inner");
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;

    // Duplicates the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    const startScrolling = () => {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
            scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(startScrolling);
    };

    startScrolling();
});


