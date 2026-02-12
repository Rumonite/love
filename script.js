document.addEventListener('DOMContentLoaded', () => {
    
    /* --- CONFIGURATION START --- */
    
    const message = `
Happy Valentines Day Lablab ko Abi!

They say purple tulips symbolize elegance and admiration, and that is how I see you in my eyes.

Gusto kita sulatan lablab ng letter that lasts, one that doesn't fade, get wet, or get damaged. I want it to be as resilient as how long we have been together.

You've brought so much light, warmth, and happiness into my life. Every moment with you is a memory I cherish and wish to relive whenever I sleep.

No matter how far apart we might be, or how busy life gets, remember na ikaw lang ang natatanging lablab ko.

I love you lablab, today and as always.
    `;

    const signature = "Forever Yours,\nMitz";

    // 1. ADD YOUR IMAGE FILENAMES HERE
    // Make sure these match exactly what is in your 'images' folder
    const lablabImages = [
        'pic1.jpg', 
        'pic2.jpg',
        'pic3.jpg', 
        'pic4.jpg',
        // Add as many as you want, but 4-6 looks best
    ];

    /* --- CONFIGURATION END --- */


    // 2. Inject the text
    const textElement = document.getElementById('dynamic-text');
    const sigElement = document.getElementById('dynamic-signature');
    textElement.textContent = message.trim();
    sigElement.textContent = signature;


    // 3. GENERATE SIDE PHOTOS
    const body = document.body;
    
    lablabImages.forEach((imgName, index) => {
        const img = document.createElement('img');
        img.src = `images/${imgName}`; // Looks in the images folder
        img.classList.add('side-photo');

        // Math to scatter them left and right
        // If index is even (0, 2, 4), put on Left. If odd (1, 3, 5), put on Right.
        const isLeft = index % 2 === 0;
        
        // Random Position Calculation
        const minTop = 10; // 10% from top
        const maxTop = 80; // 80% from top
        const randomTop = Math.floor(Math.random() * (maxTop - minTop) + minTop);
        
        // Random Horizontal Offset
        const randomSide = Math.floor(Math.random() * 20 + 5); // 5% to 25% from edge
        
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