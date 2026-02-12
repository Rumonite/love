document.addEventListener('DOMContentLoaded', () => {
    
    /* --- CONFIGURATION START --- */
    /* Edit your message here. Keep the backticks `` */
    
    const message = `
Happy Valentines Day Lablab ko Abi!

They say purple tulips symbolize elegance and admiration, and that is how I see you in my eyes.

Gusto kita sulatan lablab ng letter that lasts, one that doesn't fade, get wet, or get damaged. I want it to be as resilient as how long we have been together.

You've brought so much light, warmth, and happiness into my life. Every moment with you is a memory I cherish and wish to relive whenever I sleep.

No matter how far apart we might be, or how busy life gets, remember na ikaw lang ang natatanging lablab ko.

I love you lablab, today and as always.
    `;

    const signature = "Forever Yours,\nMitz Ignacio";

    /* --- CONFIGURATION END --- */


    // 1. Inject the text into the HTML
    const textElement = document.getElementById('dynamic-text');
    const sigElement = document.getElementById('dynamic-signature');
    
    // We trim the message to remove accidental whitespace at start/end
    textElement.textContent = message.trim();
    sigElement.textContent = signature;


    // 2. Handle Opening/Closing
    const coverTrigger = document.getElementById('cover-trigger');
    const body = document.body;

    coverTrigger.addEventListener('click', () => {
        body.classList.toggle('open');
    });


    // 3. Create Falling Petals (Background Animation)
    const bgContainer = document.getElementById('background-effects');
    const symbols = ['🌷', '💜', '✨', '🟣'];
    const particleCount = 40;

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('floating-petal');
        
        // Random Symbol
        petal.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Random Position (0% to 100% width)
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Random Animation Speed (5s to 15s)
        petal.style.animationDuration = Math.random() * 10 + 5 + 's';
        
        // Random Delay
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        // Random Size
        petal.style.fontSize = Math.random() * 20 + 10 + 'px';

        bgContainer.appendChild(petal);
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        createPetal();
    }
});