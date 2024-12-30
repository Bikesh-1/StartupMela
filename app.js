const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const scroll1 = new LocomotiveScroll({
    el: document.querySelector('#page1'),
    getDirection: true, // Tracks scroll direction
    getSpeed: true,     // Tracks scroll speed
});

// VANTA.CLOUDS({
//     el: "#page1",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00
//   })
VANTA.RINGS({
    el: "#page1", // Target element for the effect
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
});