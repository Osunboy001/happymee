// ========== GIPHY API KEY ==========
// Get yours FREE at: https://developers.giphy.com/
 // Replace with your key

// ========== COUNTRY KEYWORDS ==========
// When user selects a country, we add these keywords to search

// ========== TEXT JOKES BY COUNTRY ==========
// These are manual jokes per country (since Giphy doesn't have text jokes)



const textJokes = {
    nigeria: [
        { text: "When your Nigerian mom says 'We're leaving in 5 minutes' and you know that means 2 hours 😂", likes: 432 },
        { text: "Nigerian parents: 'Is it by force to be sleeping?' Me at 2am: 😴💀", likes: 287 },
        { text: "When you greet a Nigerian elder and they start praying for you for 30 minutes 🙏😅", likes: 651 },
        { text: "NEPA brought light! The whole street: 🎉🕺💃", likes: 892 },
        { text: "Nigerian mom packing food for you to take back to school like you're going to war 🍲🥘", likes: 543 },
        { text: "When the bus conductor says 'enter, space dey' but there's no space 😂🚌", likes: 378 },
        { text: "Me: *sneezes once* Nigerian mom: You're dying, drink this bitter leaf water 🌿😭", likes: 721 },
        { text: "When a Nigerian party says 5pm but you know food won't be ready until 10pm 🍽️⏰", likes: 456 },
        { text: "Nigerian dad: 'You're not serious' - the ultimate insult 😤", likes: 634 },
        { text: "When your mom calls you by your full government name, you know you're in trouble 📢💀", likes: 567 },
        { text: "That one uncle at every party who asks 'when are you getting married?' 💍😩", likes: 489 },
        { text: "Nigerian mom: 'Come and eat' Me: 'I'm not hungry' Mom: *serves food anyway* 🍛", likes: 712 },
        { text: "When generator goes off and everybody shouts 'UP NEPA!' ⚡😂", likes: 823 },
        { text: "Nigerian time: Add minimum 2 hours to whatever time they said ⏰", likes: 445 },
        { text: "When your mom finds out you didn't greet someone properly: 'You no get home training?' 😓", likes: 678 },
        { text: "Lagos traffic: Leave house at 6am, arrive work at 11am 🚗😭", likes: 534 },
        { text: "Nigerian weddings: 500 people you don't know, 50 you actually know 👰🤵", likes: 398 },
        { text: "When your Nigerian parent answers your question with another question 🤔❓", likes: 701 },
        { text: "Me: 'Mom, I'm sick' Nigerian mom: 'It's that phone!' 📱😂", likes: 856 },
        { text: "Danfo driver changing lanes without looking like he's playing GTA 🎮🚐", likes: 423 }
    ],
    
    usa: [
        { text: "American portion sizes: 'Would you like a small?' *hands you a bucket* 🪣😂", likes: 521 },
        { text: "It's not a real meeting unless someone says 'We could've done this over email' 💻😅", likes: 389 },
        { text: "Checking your bank account after the weekend like... 👀💸", likes: 743 },
        { text: "Hitting every red light when you're already late 🚗🔴", likes: 298 },
        { text: "When you say 'I'll start eating healthy on Monday' every Sunday 🥗➡️🍔", likes: 612 },
        { text: "Making eye contact with a dog across the street and immediately becoming best friends 🐕❤️", likes: 834 },
        { text: "The gym in January vs February: 🏋️‍♀️🏋️‍♀️🏋️‍♀️ vs 🏋️‍♀️", likes: 445 },
        { text: "Coffee before 9am isn't a choice, it's a survival strategy ☕😤", likes: 567 },
        { text: "When the waiter asks 'How is everything?' while your mouth is completely full 😶🍴", likes: 692 },
        { text: "Me: 'I'm fine' Also me: orders $40 of food at 2am 🌮🍕", likes: 478 },
        { text: "Americans will use anything to measure except the metric system 📏🦅", likes: 823 },
        { text: "That awkward moment when you hold the door for someone too far away 🚪😬", likes: 534 },
        { text: "Saying 'you too' when the movie theater employee says 'enjoy your movie' 🎬💀", likes: 701 },
        { text: "When someone asks 'How are you?' but you know they don't actually want to know 😅", likes: 445 },
        { text: "Me buying groceries: I'll just get what I need Also me: *cart full of snacks* 🛒", likes: 612 },
        { text: "When you wave at someone but they were waving at the person behind you 👋😳", likes: 398 },
        { text: "Trying to act normal when the self-checkout says 'please wait for assistance' 🤖😰", likes: 756 },
        { text: "When you're home alone and hear a noise: 'I'm not afraid to die!' 🔊💀", likes: 489 },
        { text: "Me: 'I'll sleep early tonight' Also me at 3am: watching conspiracy theories 👽🌙", likes: 623 },
        { text: "When the Wi-Fi goes out and you have to actually talk to your family 📶😱", likes: 567 }
    ],
    
    uk: [
        { text: "British weather forecast: Partly sunny with a chance of all four seasons 🌦️☀️❄️", likes: 634 },
        { text: "Sorry. Sorry. So sorry. Sorry about that. - British people ordering food 😅", likes: 489 },
        { text: "A British 'that's not bad' actually means it's absolutely brilliant 🎩", likes: 712 },
        { text: "Queue etiquette is the closest thing we have to a religion 🙏", likes: 823 },
        { text: "It's only 3pm and it looks like midnight outside in November 🌑😭", likes: 567 },
        { text: "Making a cup of tea to solve absolutely any life problem ☕🫖", likes: 945 },
        { text: "British understatement: 'It's a bit nippy out' when it's literally -5°C 🥶", likes: 432 },
        { text: "The absolute panic when a British person doesn't hold the door for you 🚪😱", likes: 678 },
        { text: "When someone sits next to you on an empty bus: 'Why though?' 🚌😐", likes: 534 },
        { text: "British people will say 'with all due respect' before absolutely destroying you 💀", likes: 701 },
        { text: "When the train is delayed by 2 minutes: 'This is unacceptable!' 🚂😤", likes: 456 },
        { text: "Saying 'cheers' for absolutely everything including accepting change at the shop 💷", likes: 589 },
        { text: "The overwhelming guilt when you walk into a shop and don't buy anything 🛍️😰", likes: 623 },
        { text: "British summer: One sunny day and everyone acts like we're in the Caribbean 🌞🏖️", likes: 734 },
        { text: "When someone cuts in the queue and you just tut instead of confronting them 😤", likes: 498 },
        { text: "Saying 'you alright?' as a greeting but never actually waiting for the answer 😂", likes: 567 },
        { text: "British people: Complain about rain for 300 days, complain about heat for 2 days ☔☀️", likes: 645 },
        { text: "The fear of someone sitting next to you on the train when there are empty seats 🚄", likes: 423 },
        { text: "When you make eye contact with someone on the tube and both immediately look away 👀", likes: 512 },
        { text: "Passive aggressive notes are the British way of conflict resolution 📝", likes: 689 }
    ],
    
    ghana: [
        { text: "When your Ghanaian auntie asks if you've eaten as a greeting 🍲😂", likes: 412 },
        { text: "Jollof wars: Ghana vs Nigeria - we already know who won 😤🍚", likes: 876 },
        { text: "Ghanaian time: Add 2 hours to whatever time they said ⏰😅", likes: 534 },
        { text: "When your mom sends you to buy something and expects change to the pesewa 💰", likes: 289 },
        { text: "TZ or rice? The eternal Ghanaian dinner question 🤔", likes: 367 },
        { text: "Every Ghanaian has an auntie who's a 'nurse, doctor, and pharmacist' 💊😂", likes: 623 },
        { text: "When you're at a funeral and the highlife hits different 🎵💃", likes: 445 },
        { text: "Ghanaian parents explaining your future career at age 5 👨‍⚕️👩‍⚖️", likes: 512 },
        { text: "When trotro conductor says 'last seat' but 5 more people enter 🚐", likes: 678 },
        { text: "Ghanaian weddings: 6 hours minimum, first 3 hours waiting for bride 👰⏰", likes: 534 },
        { text: "When you pronounce Ghana wrong: 'It's GAH-na not GAY-na!' 🇬🇭", likes: 701 },
        { text: "Pure water sellers balancing 50 bags on their head like it's nothing 💪💧", likes: 456 },
        { text: "When ECG takes light and everyone starts singing in the dark ⚡🎤", likes: 589 },
        { text: "Ghanaian mom: 'You're going out? In this economy?' 💸😅", likes: 423 },
        { text: "When someone asks 'how are you?' in Twi but you only know 'medaase' 🙏😂", likes: 498 },
        { text: "Kelewele vendors at night are the real MVPs 🍟🌙", likes: 734 },
        { text: "When your Ghanaian dad turns every conversation into a proverb 🦉📖", likes: 612 },
        { text: "That one family member who speaks only Twi to you despite knowing you don't understand 😅", likes: 445 },
        { text: "Ghanaian parties: Food served at 11pm after arriving at 6pm 🍛😭", likes: 567 },
        { text: "When someone says 'I'm coming' but they mean they're leaving 🚶‍♂️🤔", likes: 523 }
    ],
    
    india: [
        { text: "Indian mom: 'Eat, eat!' Me: 'I'm full' Mom: 'Okay just one more plate' 🍛😂", likes: 892 },
        { text: "When relatives ask about marriage at every family function 💍😭", likes: 743 },
        { text: "Indian parents: Be a doctor. Or engineer. Or doctor. 🏥💻", likes: 634 },
        { text: "'5 minute mein aata hoon' - The Indian version of time ⏰😅", likes: 521 },
        { text: "The AC remote is guarded more than national treasure in Indian homes 📺❄️", likes: 456 },
        { text: "When your dadi starts giving home remedies for everything including heartbreak 🌿", likes: 678 },
        { text: "Indian wedding: 4 days, 47 events, 500 relatives, 1000 photos 📸🎊", likes: 834 },
        { text: "Putting curd and sugar before any important work - non negotiable! 🍯", likes: 389 },
        { text: "When your Indian mom uses your full name, middle name, last name - RUN! 🏃‍♂️💀", likes: 723 },
        { text: "Indian families buying 5kg of vegetables that will last 2 days 🥬🛒", likes: 567 },
        { text: "When guests come over and mom gives you 'the look' to make tea ☕👀", likes: 645 },
        { text: "Indian parents: 'Sharma ji ka beta became CEO' Meanwhile me: 😐", likes: 798 },
        { text: "Plastic bags stored inside another plastic bag - peak Indian household 🛍️", likes: 534 },
        { text: "When your Indian dad asks 'what's the price?' at a fixed-price store 💰😂", likes: 612 },
        { text: "Me: 'Can I go to a friend's house?' Indian parents: 'Who are their parents?' 👨‍👩‍👧", likes: 489 },
        { text: "Indian weddings: 200 samosas but still somehow not enough 🥟", likes: 701 },
        { text: "When relatives gift you money in an envelope and mom takes it 'for safekeeping' 💸", likes: 456 },
        { text: "Indian moms turning every minor injury into a Bollywood drama scene 🎬", likes: 578 },
        { text: "'Beta, tu doctor ban ja' - Every Indian parent ever 🩺", likes: 623 },
        { text: "When you try to leave Indian gathering: 15 goodbye rounds, 2 hours later 👋⏰", likes: 689 }
    ],
    
    "south-africa": [
        { text: "Load shedding schedule: your new best friend and worst enemy ⚡😭", likes: 756 },
        { text: "South African braai: It's not just food, it's a lifestyle 🔥🥩", likes: 892 },
        { text: "Eish! - the word that explains everything in South Africa 😂", likes: 634 },
        { text: "When someone says 'just now' you know it could be hours 🕐", likes: 512 },
        { text: "A South African dinner with no chakalaka is just... no 🍲", likes: 445 },
        { text: "Howzit! The universal South African greeting 🤙", likes: 389 },
        { text: "South African rain in summer: like clockwork at 3pm ⛈️🌤️", likes: 567 },
        { text: "Taxi drivers in SA: creating their own traffic laws since forever 🚗😅", likes: 723 },
        { text: "When you understand 4 languages but speak none of them properly 🗣️", likes: 678 },
        { text: "Mzansi Magic: where all SA dramas happen 📺🎭", likes: 534 },
        { text: "South African road rage is its own language 🚙😤", likes: 612 },
        { text: "When load shedding hits during your favorite show: 'Haibo!' 😱", likes: 798 },
        { text: "Every South African has that one uncle who makes biltong 🥩", likes: 456 },
        { text: "Robots = traffic lights. Only in South Africa 🚦🤖", likes: 689 },
        { text: "When you say 'shame' but it has 47 different meanings 😅", likes: 545 },
        { text: "South African slang changes every 3 months, good luck keeping up 🔄", likes: 478 },
        { text: "When Eskom says 'no load shedding today' and you don't believe them ⚡🤔", likes: 734 },
        { text: "Bunny chow: looks weird, tastes amazing 🍞🍛", likes: 423 },
        { text: "When you tell foreigners about load shedding and they think you're joking 💡😂", likes: 601 },
        { text: "Every braai needs at least 5 different types of meat or it doesn't count 🥓🍖", likes: 567 }
    ]
};

// ========== DOM ELEMENTS ==========
const countrySelect = document.getElementById('countrySelect');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modeSelect = document.getElementById('modeSelect');
const languageSelect = document.getElementById('languageSelect');
const textGrid = document.getElementById('textGrid');
const imageGrid = document.getElementById('imageGrid');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navCenter = document.querySelector('.nav-center');

// MOBILE MENU 
mobileMenuToggle.addEventListener('click', function() {
    navCenter.classList.toggle('active');
});

// LOAD SAVED COUNTRY
window.addEventListener('DOMContentLoaded', function() {
    const savedCountry = localStorage.getItem('selectedCountry');
    if (savedCountry) {
        countrySelect.value = savedCountry;
    }

    loadContent();
});

// ========== SAVE COUNTRY ==========
countrySelect.addEventListener('change', function() {
    localStorage.setItem('selectedCountry', this.value);
    loadContent();
});

// ========== SEARCH BUTTON ==========
searchBtn.addEventListener('click', function() {
    loadContent();
});

// ========== ENTER KEY SEARCH ==========
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loadContent();
    }
});

// ========== MODE CHANGE ==========
modeSelect.addEventListener('change', function() {
    const mode = this.value;

    // Show/hide sides based on mode
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const divider = document.querySelector('.divider');

    if (mode === 'text') {
        leftSide.style.display = 'block';
        rightSide.style.display = 'none';
        divider.style.display = 'none';

    } else if (mode === 'image') {
        leftSide.style.display = 'none';
        rightSide.style.display = 'block';
        divider.style.display = 'none';
    } else {
        leftSide.style.display = 'block';
        rightSide.style.display = 'block';
        divider.style.display = 'block';
    }
});

// ========== MAIN LOAD CONTENT FUNCTION ==========
function loadContent() {
    const country = countrySelect.value;
    const searchTerm = searchInput.value.trim();
    const mode = modeSelect.value;

    // Load text jokes (left side)
    if (mode === 'all' || mode === 'text') {
        loadTextJokes(country, searchTerm);
    }

    // Load image memes (right side)
    if (mode === 'all' || mode === 'image') {
        loadImageMemes(country, searchTerm);
    }
}

// ========== LOAD TEXT JOKES ==========
function loadTextJokes(country, searchTerm) {
    // Show loading
    textGrid.innerHTML = '<div class="loading-state"><p>😂 Loading jokes...</p></div>';

    // Get jokes for selected country
    let jokes = textJokes[country] || textJokes['USA'];

    // Filter by search term if provided
    if (searchTerm) {
        jokes = jokes.filter(joke =>
            joke.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Small delay to feel natural
    setTimeout(() => {
        if (jokes.length === 0) {
            textGrid.innerHTML = `
                <div class="empty-state">
                    <p>😕 No jokes found for "${searchTerm}"</p>
                    <p>Try a different search!</p>
                </div>
            `;
            return;
        }

        // Display jokes
        textGrid.innerHTML = '';
        jokes.forEach(joke => {
            const card = document.createElement('div');
            card.className = 'text-card';
            card.innerHTML = `
                <p>${joke.text}</p>
                <div class="text-card-footer">
                    <span class= "dude">👍 ${joke.likes}</span>
                    <span class= "dude">😂 Funny!</span>
                </div>
            `;
            textGrid.appendChild(card);
        });
    }, 500);
}

// ========== LOAD IMAGE MEMES (GIPHY API) ==========
// ========== LOAD IMAGE MEMES (IMGFLIP API) ==========
function loadImageMemes(country, searchTerm) {
    // Show loading
    imageGrid.innerHTML = '<div class="loading-state"><p>🖼️ Loading memes...</p></div>';

    // Imgflip API - Get popular meme templates
    // NO API KEY NEEDED! It's completely free!
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let memes = data.data.memes;

                // Filter by search term if provided
                if (searchTerm) {
                    memes = memes.filter(meme =>
                        meme.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }

                // Show first 12 memes
          const totalcount  =  50;
const maxstart = memes.length - totalcount
const startindex = Math.floor(Math.random() * maxstart)

const memeToshow = memes.slice(startindex,startindex + totalcount)

displayMemes(memeToshow)

if (memeToshow.length === 0) {
    imageGrid.innerHTML = `
        <div class="empty-state">
            <p>😕 No memes found for "${searchTerm}"</p>
            <p>Try a different search!</p>
        </div>
    `;
    return;
}

displayMemes(memeToshow);

                displayMemes(memeToshow);
            } else {
                imageGrid.innerHTML = `
                    <div class="error-state">
                        <p>⚠️ Could not load memes</p>
                        <p>Try again later</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            imageGrid.innerHTML = `
                <div class="error-state">
                    <p>⚠️ Could not load memes</p>
                    <p>Check your internet connection</p>
                </div>
            `;
        });
}

// ========== DISPLAY MEMES FROM IMGFLIP ==========
function displayMemes(memes) {
    imageGrid.innerHTML = '';

    memes.forEach(meme => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.innerHTML = `
            <img 
                src="${meme.url}" 
                alt="${meme.name}"
                loading="lazy"
            >
            <p class="image-card-caption">${meme.name}</p>
          
        `;
        imageGrid.appendChild(card);
    });
}


