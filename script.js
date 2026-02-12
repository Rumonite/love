document.addEventListener('DOMContentLoaded', () => {
    
    const message = `
Happy Valentines Day Lablab ko Abi!

They say purple tulips symbolize elegance and admiration, and that is how I see you in my eyes.

Gusto kita sulatan lablab ng letter that lasts, one that doesn't fade, get wet, or get damaged. I want it to be as resilient as how long we have been together.

You've brought so much light, warmth, and happiness into my life. Every moment with you is a memory I cherish and wish to relive whenever I sleep.

No matter how far apart we might be, or how busy life gets, remember na ikaw lang ang natatanging lablab ko.

I love you lablab, today and as always.
    `;

    const signature = "Forever Yours,\nMitz";

    const lablabImages = [
        'pic1.jpg', 
        'pic2.jpg',
        'pic3.jpg', 
        'pic4.jpg',
        'pic5.jpg',
        'pic6.jpg'
    ];

    const textElement = document.getElementById('dynamic-text');
    const sigElement = document.getElementById('dynamic-signature');
    textElement.textContent = message.trim();
    sigElement.textContent = signature;

    const body = document.body;
    
    lablabImages.forEach((imgName, index) => {
        const img = document.createElement('img');
        img.src = `images/${imgName}`; 
        img.classList.add('side-photo');

        const isLeft = index % 2 === 0;
        
        const minTop = 10; 
        const maxTop = 80; 
        const randomTop = Math.floor(Math.random() * (maxTop - minTop) + minTop);
        
        // Random Horizontal Offset
        const randomSide = Math.floor(Math.random() * 20 + 5);
        
        // Random Rotation (-15deg to 15deg)
        const randomRot = Math.floor(Math.random() * 30 - 15);

        // Apply Styles
        img.style.top = randomTop + '%';
        if (isLeft) {
            img.style.left = randomSide + '%';
        } else {
            img.style.right = randomSide + '%';
        }
        
        // Store rotation in variable for CSS animation
        img.style.setProperty('--rotation', randomRot + 'deg');

        // Add to body
        body.appendChild(img);
    });


    // 4. Handle Opening/Closing
    const coverTrigger = document.getElementById('cover-trigger');

    coverTrigger.addEventListener('click', () => {
        body.classList.toggle('open');
    });


    // 5. Falling Petals Effect
    const bgContainer = document.getElementById('background-effects');
    const symbols = ['🌷', '💜', '✨', '🟣'];
    const particleCount = 40;

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('floating-petal');
        petal.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 10 + 5 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.fontSize = Math.random() * 20 + 10 + 'px';
        bgContainer.appendChild(petal);
    }

    for (let i = 0; i < particleCount; i++) {
        createPetal();
    }
});