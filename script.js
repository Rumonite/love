document.addEventListener('DOMContentLoaded', () => {
    
    /* --- CONFIGURATION START --- */
    /* Edit your message here. Keep the backticks `` */
    
    const message = `
I created this digital space just for you.

They say purple tulips symbolize royalty and admiration, and that is exactly how I see you. You are the queen of my world.

I wanted to write you a letter that doesn't fade with time. A place where the flowers are always blooming and the message is always waiting for you.

You bring so much light, warmth, and happiness into my life. Every moment with you is a memory I cherish.

No matter how far apart we might be, or how busy life gets, remember that you are my favorite person.

I love you, today and always.
    `;

    const signature = "Forever Yours,\n[Your Name]";

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