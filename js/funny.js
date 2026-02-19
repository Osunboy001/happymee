// ========== GIPHY API KEY ==========
// Get yours FREE at: https://developers.giphy.com/
 // Replace with your key

// ========== COUNTRY KEYWORDS ==========
// When user selects a country, we add these keywords to search

// ========== TEXT JOKES BY COUNTRY ==========
// These are manual jokes per country (since Giphy doesn't have text jokes)

 // Example of how to access a joke
const textJokes = {
nigeria: [
    { text: "When your Nigerian mom says 'We're leaving in 5 minutes' and you know that means 2 hours 😂", likes: 432 },
    { text: "Nigerian parents: 'Is it by force to be sleeping?' Me at 2am.", likes: 287 },
    { text: "When you greet a Nigerian elder and they start praying for you for 30 minutes 😅", likes: 651 },
    { text: "NEPA brought light! The whole street celebrating 🎉", likes: 892 },
    { text: "Nigerian mom packing food for you to take back to school like you're going to war.", likes: 543 },
    { text: "When the bus conductor says 'enter, space dey' but there's no space 😂", likes: 378 },
    { text: "Me: *sneezes once* Nigerian mom: You're dying, drink this bitter leaf water 😭", likes: 721 },
    { text: "When a Nigerian party says 5pm but you know food won't be ready until 10pm.", likes: 456 },
    { text: "Nigerian dad: 'You're not serious' — the ultimate insult 😤", likes: 634 },
    { text: "When your mom calls you by your full government name, you know you're in trouble.", likes: 567 },
    { text: "That one uncle at every party who asks 'when are you getting married?' 😩", likes: 489 },
    { text: "Nigerian mom: 'Come and eat' Me: 'I'm not hungry' Mom: serves food anyway 🍛", likes: 712 },
    { text: "When generator goes off and everybody shouts 'UP NEPA!' 😂", likes: 823 },
    { text: "Nigerian time: Add minimum 2 hours to whatever time they said.", likes: 445 },
    { text: "When your mom finds out you didn't greet someone properly: 'You no get home training?'", likes: 678 },
    { text: "Lagos traffic: Leave house at 6am, arrive work at 11am 😭", likes: 534 },
    { text: "Nigerian weddings: 500 people you don't know, 50 you actually know.", likes: 398 },
    { text: "When your Nigerian parent answers your question with another question 🤔", likes: 701 },
    { text: "Me: 'Mom, I'm sick' Nigerian mom: 'It's that phone!' 😂", likes: 856 },
    { text: "Danfo driver changing lanes without looking like he's playing GTA.", likes: 423 },
    { text: "When your Nigerian mom says 'bring my bag' but doesn't tell you which bag 🤷", likes: 567 },
    { text: "Nigerian dads: 'Who put on this AC?' turns it off immediately.", likes: 623 },
    { text: "When you ask for money and your parent starts telling you about their childhood 😴", likes: 498 },
    { text: "Nigerian parents meeting your friends: 'What do your parents do?'", likes: 712 },
    { text: "When NEPA takes light during your favorite show's climax 😭", likes: 834 },
    { text: "Nigerian mom: 'If you don't study, you'll be picking trash.'", likes: 456 },
    { text: "When you tell your parents you're hungry at 9pm: 'Didn't you eat dinner?'", likes: 589 },
    { text: "Nigerian parties: 6 hours of spraying money, 30 minutes of actual food 💵", likes: 701 },
    { text: "When your mom asks you to taste the soup and you know it's too salty but you lie 😅", likes: 445 },
    { text: "Nigerian uncles: 'You've grown so big!' Every single time.", likes: 623 },
    { text: "When you're sick and Nigerian parents bring out the holy water 🙏", likes: 534 },
    { text: "Me: 'Can I sleep over at a friend's?' Nigerian parents: 'Are we not your friends?' 😂", likes: 678 },
    { text: "When your Nigerian mom says 'come here' and you have to calculate your sins first 😰", likes: 789 },
    { text: "Nigerian parents: 'You're going out? In this economy?' 💸", likes: 512 },
    { text: "When the wifi stops working and your whole family gathers in one room.", likes: 645 },
    { text: "Nigerian mom shopping: 'This one is too expensive!' buys 3 anyway.", likes: 498 },
    { text: "When your parent tells you to get something and you ask 'where is it?' 'If it was a snake!'", likes: 723 },
    { text: "Nigerian weddings: Souvenirs worth more than the actual gift 🎁", likes: 456 },
    { text: "When your mom tells you to pray before exam but you didn't read 🙏", likes: 589 },
    { text: "Nigerian parents meeting your teacher: 'Please flog this child well o!'", likes: 612 },
    { text: "When Nigerian parents say 'I'm watching you' with those eyes 👀", likes: 701 },
    { text: "Me: 'I want to be an artist' Nigerian parents: 'Be a doctor!'", likes: 534 },
    { text: "When your mom says 'oya start going' but you've been ready for 2 hours.", likes: 623 },
    { text: "Nigerian parents: 'Why are you always on that phone?' Also them: on WhatsApp 24/7 📱", likes: 789 },
    { text: "When you buy something with your own money and your parents claim ownership.", likes: 445 },
    { text: "Nigerian mom's weapon of choice: The TV remote.", likes: 567 },
    { text: "When guests arrive and your mom gives you the look to go greet properly 👀", likes: 498 },
    { text: "Nigerian dads watching news like it's the most interesting thing ever.", likes: 623 },
    { text: "When you're home alone and hear a sound: 'Jesus!' 😭", likes: 567 },
    { text: "Nigerian mom packing leftover party food like you're feeding a village 🍱", likes: 701 },
    { text: "Nigerian parents' selective hearing: Can't hear you calling but hear you whispering 👂", likes: 756 },
    { text: "When NEPA brings light and everyone rushes to charge everything 🔌", likes: 789 },
    { text: "Nigerian mom: 'Don't let me come there o!' 😱", likes: 701 },
    { text: "When you ask for new shoes and your parent: 'The one you have, has it finished?' 👟", likes: 623 },
    { text: "When NEPA brings light after 12 hours: Hallelujah! 🎉", likes: 756 },
    { text: "When your mom says 'wait, let me tell you something' and it becomes a 2-hour lecture.", likes: 678 },
    { text: "When you tell Nigerian parents you're depressed: 'You have food!'", likes: 712 },
    { text: "Nigerian mom's superpower: Hearing you open a snack from 3 rooms away 🍫", likes: 734 },
    { text: "When you're on the phone and Nigerian parents: 'Who are you talking to?'", likes: 701 },
    { text: "Nigerian mom: 'You're going nowhere!'", likes: 534 },
    { text: "When you say 'I'm going out' and Nigerian parents: 'To where?!' 🔍", likes: 698 },
    { text: "Nigerian mom: 'You'll know when you have your own children!' 😂", likes: 534 }
]

    ,
    
   usa: [
    { text: "American portion sizes: 'Would you like a small?' hands you a bucket 🪣", likes: 521 },
    { text: "It's not a real meeting unless someone says 'We could've done this over email.' 💻", likes: 389 },
    { text: "Checking your bank account after the weekend like... 👀", likes: 743 },
    { text: "Hitting every red light when you're already late 🔴", likes: 298 },
    { text: "When you say 'I'll start eating healthy on Monday' every Sunday 🥗", likes: 612 },
    { text: "Making eye contact with a dog across the street and immediately becoming best friends 🐕", likes: 834 },
    { text: "The gym in January vs February.", likes: 445 },
    { text: "Coffee before 9am isn't a choice, it's survival ☕", likes: 567 },
    { text: "When the waiter asks 'How is everything?' while your mouth is full 😶", likes: 692 },
    { text: "Me: 'I'm fine' Also me: orders $40 of food at 2am 🌮", likes: 478 },
    { text: "Americans will use anything to measure except the metric system 📏", likes: 823 },
    { text: "That awkward moment when you hold the door for someone too far away 😬", likes: 534 },
    { text: "Saying 'you too' when the movie employee says 'enjoy your movie.' 🎬", likes: 701 },
    { text: "When someone asks 'How are you?' but doesn't actually want to know 😅", likes: 445 },
    { text: "Me buying groceries: I'll just get what I need. Cart full of snacks 🛒", likes: 612 },
    { text: "When you wave at someone but they were waving at the person behind you 👋", likes: 398 },
    { text: "Trying to act normal when self-checkout says 'please wait for assistance.' 🤖", likes: 756 },
    { text: "When you're home alone and hear a noise 👀", likes: 489 },
    { text: "Me: 'I'll sleep early tonight' Also me at 3am watching conspiracy theories 🌙", likes: 623 },
    { text: "When the Wi-Fi goes out and you have to talk to your family 😱", likes: 567 },
    { text: "When you say 'I'm just looking' but the salesperson follows you anyway 👀", likes: 689 },
    { text: "American restaurants: 'Refills are free!' ☕", likes: 723 },
    { text: "When you're ready to leave but your mom starts a new conversation at the door 🚪", likes: 598 },
    { text: "Me: Orders salad to be healthy. Also me: drenches it in ranch 🥗", likes: 645 },
    { text: "When your Amazon package says 'delivered' but it's nowhere to be found 📦", likes: 734 },
    { text: "American road trips: 'How far is it?' 'Only 8 hours!' 🚗", likes: 512 },
    { text: "When someone says 'make yourself at home' but you don't know how comfortable to get 🤔", likes: 678 },
    { text: "The struggle of opening plastic packaging without scissors 😤", likes: 589 },
    { text: "When you accidentally make eye contact on public transit 👀", likes: 701 },
    { text: "Me: 'I don't need a bag' Cashier already bagging everything 🛍️", likes: 456 },
    { text: "When your GPS says 'recalculating' for the 5th time 📱", likes: 623 },
    { text: "American small talk: 'How about this weather?' ☁️", likes: 534 },
    { text: "When you're trying to be productive but your phone disagrees 📱", likes: 698 },
    { text: "The panic when you can't find your phone and it's in your hand 😰", likes: 756 },
    { text: "When someone says 'we should hang out!' but nobody plans anything 📅", likes: 612 },
    { text: "Me at the store: 'Just buying milk' leaves with $100 of stuff 💸", likes: 689 },
    { text: "When you're walking the same pace as a stranger 😬", likes: 534 },
    { text: "Would you like to supersize that? It's already huge 🍟", likes: 723 },
    { text: "When you text 'k' instead of 'okay' and now you seem mad 😐", likes: 598 },
    { text: "The internal debate of whether to correct autocorrect 🤔", likes: 645 },
    { text: "When you're telling a story and forget the point halfway through 🗣️", likes: 701 },
    { text: "American driving: Turn signals are optional apparently 🚗", likes: 567 },
    { text: "When you open the fridge looking for ideas, not food 👀", likes: 734 },
    { text: "Me: 'I'll just watch one episode' binges entire season 📺", likes: 689 },
    { text: "American customer service: 'Your call is important to us.' ☎️", likes: 723 },
    { text: "American tipping culture: Math test at every meal 🧮", likes: 756 },
    { text: "When your charger only works at a certain angle 🔌", likes: 623 },
    { text: "When someone says 'no offense' right before offending you 😐", likes: 612 },
    { text: "American weather: All four seasons in one day 🌦️", likes: 701 },
    { text: "When someone says 'we need to talk' 😱", likes: 745 },
    { text: "American small towns: Everyone knows everyone's business 👀", likes: 567 },
    { text: "When your card declines on a $2 purchase 💳", likes: 598 },
    { text: "American gas prices hurt ⛽", likes: 712 },
    { text: "When you cancel plans and it feels amazing 😌", likes: 723 },
    { text: "Speed limit 55. Everyone driving 70 🚗", likes: 701 },
    { text: "The struggle of folding a fitted sheet 😤", likes: 598 },
    { text: "American Thanksgiving: Family drama with turkey 🦃", likes: 723 },
    { text: "When you accidentally like an old photo while stalking 😱", likes: 734 },
    { text: "American summers: AC bill higher than rent ❄️", likes: 701 },
    { text: "American Black Friday: Survival of the fittest 🛒", likes: 756 },
    { text: "When you trip in public and pretend nothing happened 😎", likes: 712 },
    { text: "American portions: Enough food for a family 🍔", likes: 723 },
    { text: "Me: 'I'll go to bed early tonight' 3am: still awake 🌙", likes: 689 }
],uk: [
    { text: "British weather forecast: Partly sunny with a chance of all four seasons 🌦️", likes: 634 },
    { text: "Sorry. Sorry. So sorry. Sorry about that. — British people ordering food 😅", likes: 489 },
    { text: "A British 'that's not bad' actually means it's absolutely brilliant 🎩", likes: 712 },
    { text: "Queue etiquette is the closest thing we have to a religion 🙏", likes: 823 },
    { text: "It's only 3pm and it looks like midnight outside in November 🌑", likes: 567 },
    { text: "Making a cup of tea to solve absolutely any life problem ☕", likes: 945 },
    { text: "British understatement: 'It's a bit nippy out' when it's -5°C 🥶", likes: 432 },
    { text: "The panic when a British person doesn't hold the door for you 😱", likes: 678 },
    { text: "When someone sits next to you on an empty bus: Why though? 🚌", likes: 534 },
    { text: "British people will say 'with all due respect' before destroying you 💀", likes: 701 },
    { text: "When the train is delayed by 2 minutes: 'This is unacceptable!' 🚂", likes: 456 },
    { text: "Saying 'cheers' for absolutely everything 💷", likes: 589 },
    { text: "The guilt when you walk into a shop and don't buy anything 😰", likes: 623 },
    { text: "British summer: One sunny day and everyone acts like we're in the Caribbean 🌞", likes: 734 },
    { text: "When someone cuts in the queue and you just tut 😤", likes: 498 },
    { text: "Saying 'you alright?' as a greeting but not waiting for the answer 😂", likes: 567 },
    { text: "Complain about rain for 300 days, complain about heat for 2 ☔", likes: 645 },
    { text: "The fear of someone sitting next to you on the train when there are empty seats 🚄", likes: 423 },
    { text: "Making eye contact on the tube and immediately looking away 👀", likes: 512 },
    { text: "Passive-aggressive notes are the British way of conflict resolution 📝", likes: 689 },
    { text: "British people apologizing when someone bumps into THEM 😅", likes: 756 },
    { text: "When it's 20°C and British people are in shorts ☀️", likes: 623 },
    { text: "The shared look of despair when someone talks on the quiet carriage 📱", likes: 701 },
    { text: "'After you' 'No, after you' and both stand there forever 🚪", likes: 689 },
    { text: "When someone asks for a brew and you know they mean tea ☕", likes: 578 },
    { text: "The scandal when someone doesn't put their cup in the dishwasher 😠", likes: 612 },
    { text: "British BBQ at 15°C and raining but we're doing it anyway 🍔", likes: 712 },
    { text: "When the tea is too weak: That's not tea, that's dishwater 😤", likes: 701 },
    { text: "The horror of running out of milk before morning tea 🥛", likes: 645 },
    { text: "British trains: 'We apologize for the delay.' Every day 🚂", likes: 734 },
    { text: "When you hold the door and they don't say thank you 😠", likes: 598 },
    { text: "When it snows 2cm and the entire country shuts down ❄️", likes: 789 },
    { text: "'I'm quite warm actually' Translation: I'm melting 🔥", likes: 623 },
    { text: "When someone doesn't offer you a cuppa when you visit 😤", likes: 689 },
    { text: "British weather app: 'It might rain.' It will rain ☔", likes: 701 },
    { text: "Taking the last biscuit without offering it around 🍪", likes: 645 },
    { text: "You MUST talk about the weather within 30 seconds of meeting 🌦️", likes: 734 },
    { text: "When someone doesn't wave thank you after you let them in 🚗", likes: 698 },
    { text: "'Alright?' 'Yeah, you?' 'Yeah.' End of conversation 💬", likes: 756 },
    { text: "The betrayal when your local corner shop changes ownership 😢", likes: 589 },
    { text: "British people queueing in perfect formation even without a line 🚌", likes: 701 },
    { text: "The horror of being asked to 'pop round' without notice 😰", likes: 645 },
    { text: "When someone says 'fancy a cuppa?' and you've already had 6 ☕", likes: 734 },
    { text: "Saying sorry to furniture when you bump into it 🪑", likes: 689 },
    { text: "Milk in first or tea in first? The national debate ☕", likes: 645 },
    { text: "British people abroad: Finding the nearest pub immediately 🍺", likes: 678 },
    { text: "When you accidentally press the bus stop button and panic 😰", likes: 756 },
    { text: "Running out of tea bags before the shops open 😱", likes: 645 },
    { text: "When someone doesn't say thank you to the bus driver 😠", likes: 598 },
    { text: "The British solution to everything: Stick the kettle on ☕", likes: 756 },
    { text: "Microwaving water for tea? Scandalous ☕", likes: 734 },
    { text: "British summers: Complain it's cold, then complain it's too hot 🌞", likes: 756 },
    { text: "Too polite to complain about cold food at a restaurant 😐", likes: 698 },
    { text: "The satisfaction of a perfect brew ☕", likes: 734 },
    { text: "'I'm not one to gossip but...' proceeds to gossip 😏", likes: 689 },
    { text: "'I'll catch you later' and you both know you won't 👋", likes: 623 }
],
    
   
    ghana: [
    { text: "When your Ghanaian auntie asks if you've eaten as a greeting 🍲", likes: 412 },
    { text: "Jollof wars: Ghana vs Nigeria — we already know who won 😤", likes: 876 },
    { text: "Ghanaian time: Add 2 hours to whatever time they said ⏰", likes: 534 },
    { text: "When your mom sends you to buy something and expects change to the pesewa 💰", likes: 289 },
    { text: "TZ or rice? The eternal Ghanaian dinner question 🤔", likes: 367 },
    { text: "Every Ghanaian has an auntie who's a nurse, doctor, and pharmacist 💊", likes: 623 },
    { text: "When you're at a funeral and the highlife hits different 🎵", likes: 445 },
    { text: "Ghanaian parents planning your career at age 5 👨‍⚕️", likes: 512 },
    { text: "When trotro conductor says 'last seat' but 5 more people enter 🚐", likes: 678 },
    { text: "Ghanaian weddings: 6 hours minimum, first 3 hours waiting for the bride 👰", likes: 534 },
    { text: "When you pronounce Ghana wrong: It's GAH-na 🇬🇭", likes: 701 },
    { text: "Pure water sellers balancing 50 bags like it's nothing 💪", likes: 456 },
    { text: "When ECG takes light and everyone starts singing in the dark ⚡", likes: 589 },
    { text: "Ghanaian mom: 'You're going out? In this economy?' 💸", likes: 423 },
    { text: "When someone greets you in Twi but you only know 'medaase' 🙏", likes: 498 },
    { text: "Kelewele vendors at night are the real MVPs 🍟", likes: 734 },
    { text: "When your Ghanaian dad turns every conversation into a proverb 📖", likes: 612 },
    { text: "That family member who speaks only Twi to you even though you don't understand 😅", likes: 445 },
    { text: "Ghanaian parties: Food served at 11pm after arriving at 6pm 🍛", likes: 567 },
    { text: "When someone says 'I'm coming' but they mean they're leaving 🚶", likes: 523 },
    { text: "Ghanaian moms: 'Have you greeted your elders?' Every visit 🙏", likes: 678 },
    { text: "When someone asks your tribe within 5 minutes of meeting 🤔", likes: 723 },
    { text: "Trotro mate shouting destinations like his life depends on it 🚐", likes: 645 },
    { text: "Ghanaian weddings: Souvenirs cost more than your gift 🎁", likes: 698 },
    { text: "When your auntie says 'you've grown!' but you saw her last month 😂", likes: 612 },
    { text: "Explaining Ghanaian names to non-Ghanaians is a full presentation 📝", likes: 756 },
    { text: "When ECG announces dumsor schedule and everyone plans life around it 📅", likes: 701 },
    { text: "Ghanaian parents: 'What will people say?' 🗣️", likes: 634 },
    { text: "When you're eating banku and someone asks 'what's that?' 🍲", likes: 689 },
    { text: "Trotro drivers and their creative traffic maneuvers 😱", likes: 623 },
    { text: "Ghanaian moms packing food like you're feeding a village 🥘", likes: 734 },
    { text: "When someone says 'small small' but it means very little 🤏", likes: 598 },
    { text: "The joy of finding your favorite chop bar still open 🍛", likes: 712 },
    { text: "Ghanaian funerals sometimes more elaborate than weddings ✨", likes: 645 },
    { text: "When your dad starts with 'When I was your age...' 👴", likes: 678 },
    { text: "Carrying pure water home without it bursting is a skill 💧", likes: 701 },
    { text: "Ghanaian moms: 'Are you going out dressed like that?' 👗", likes: 623 },
    { text: "When trotro mate gives you wrong change and you have to argue 💰", likes: 689 },
    { text: "The shared trauma of Ghanaian boarding school life 🏫", likes: 756 },
    { text: "When someone says 'by force?' after you refuse something 😂", likes: 634 },
    { text: "Ghanaian parties: DJ playing Azonto at maximum volume 🎵", likes: 712 },
    { text: "When your mom sends you to greet visitors and you have to kneel 🙇", likes: 698 },
    { text: "The excitement when light comes back after hours of dumsor 💡", likes: 745 },
    { text: "The art of haggling at Makola Market 🛍️", likes: 701 },
    { text: "Ghanaian moms: 'Close the door! Are you cooling the whole town?' 🚪", likes: 678 },
    { text: "When you're eating waakye and someone says 'give me some' 🍚", likes: 734 },
    { text: "Ghanaian drivers: Honking is a language 🚗", likes: 689 },
    { text: "When your auntie visits and takes over your room 🛏️", likes: 645 },
    { text: "The struggle of explaining fufu to foreigners 🍲", likes: 723 },
    { text: "When ECG promises light 'soon' and it's been 3 days ⏰", likes: 756 },
    { text: "When someone says 'chale, what's up?' automatic reply: 'I dey' 🤙", likes: 678 },
    { text: "Ghanaian parents: Doctor, lawyer, or engineer. Choose one 👨‍⚕️", likes: 734 },
    { text: "The panic when your phone is at 2% and there's no light 📱", likes: 645 },
    { text: "When your mom says 'bring my glasses' and they're on her head 👓", likes: 698 },
    { text: "When someone says they're in Accra traffic — see you tomorrow 🚗", likes: 756 },
    { text: "When ECG takes light during a football match ⚽", likes: 712 },
    { text: "Ghanaian moms: 'Who born you well?' when you talk back 😤", likes: 698 },
    { text: "When someone says 'small time' but it means hours ⏰", likes: 623 },
    { text: "The horror of running out of data and no light to charge 📱", likes: 756 },
    { text: "Ghanaian parties: Arriving 2 hours late is still early ⏰", likes: 689 },
    { text: "When your dad gives you that public look and you straighten up 😳", likes: 701 },
    { text: "Ghanaian moms: 'Off that TV! You think I'm rich?' 📺", likes: 734 },
    { text: "When trotro mate says LAST STOP and 10 more people board 🚐", likes: 756 },
    { text: "The horror of your mom telling embarrassing childhood stories 👶", likes: 689 },
    { text: "When someone says 'herh!' and you know drama is coming 😱", likes: 756 },
    { text: "The art of balancing things on your head while walking 🧺", likes: 689 }
],
    india: [
    { text: "Indian mom: 'Eat, eat!' Me: 'I'm full' Mom: 'Okay just one more plate' 🍛", likes: 892 },
    { text: "When relatives ask about marriage at every family function 💍", likes: 743 },
    { text: "Indian parents: Doctor. Engineer. Repeat. 🏥", likes: 634 },
    { text: "'5 minute mein aata hoon' — The Indian unit of time ⏰", likes: 521 },
    { text: "The AC remote is guarded like a national treasure ❄️", likes: 456 },
    { text: "When dadi prescribes haldi for heartbreak 🌿", likes: 678 },
    { text: "Indian wedding: 4 days, 47 events, 1000 photos 📸", likes: 834 },
    { text: "Curd and sugar before big moments — mandatory 🍯", likes: 389 },
    { text: "When mom uses your full name — RUN 🏃‍♂️", likes: 723 },
    { text: "Guests come over and you get 'the look' to make tea ☕", likes: 645 },
    { text: "'Sharma ji ka beta became CEO' Meanwhile me: 😐", likes: 798 },
    { text: "Plastic bags stored inside another plastic bag 🛍️", likes: 534 },
    { text: "Dad asking for discount in a fixed-price store 💰", likes: 612 },
    { text: "Trying to leave an Indian gathering takes 2 hours 👋", likes: 689 },
    { text: "The horror of running out of chai 🫖", likes: 645 },
    { text: "Indian parents asleep in front of TV — change channel and you're dead 📺", likes: 698 },
    { text: "Mom cleans your room and now nothing exists 🧹", likes: 623 },
    { text: "'Light band karo!' even in daylight 💡", likes: 689 },
    { text: "Calling elders by name? Absolutely not 😅", likes: 701 },
    { text: "When guests arrive unannounced and chaos begins 🏠", likes: 734 },
    { text: "'Padhle beta' — the ultimate warning 📚", likes: 645 },
    { text: "Relatives asking your salary within 5 minutes 💸", likes: 756 },
    { text: "'What will society say?' — final boss dialogue 🗣️", likes: 689 },
    { text: "Mom blaming your sickness on your phone 📱", likes: 701 },
    { text: "Sharing your childhood photos without consent 📸", likes: 734 },
    { text: "Dad calculating AC bill before turning it on 💸", likes: 712 },
    { text: "The struggle of teaching mom WhatsApp 📱", likes: 698 },
    { text: "Arranged marriage explanation to foreigners: full presentation 💑", likes: 678 },
    { text: "The art of jugaad — fixing everything somehow 🔧", likes: 689 },
    { text: "Parents meeting your partner = background verification 🔍", likes: 723 },
    { text: "The terror of board exams (according to parents) 😱", likes: 678 },
    { text: "Touching elders' feet in public — character development arc 🦶", likes: 698 },
    { text: "Finding matching tupperware lids is a myth 🥡", likes: 689 },
    { text: "Pandit ji reading mantras at rap speed 🎤", likes: 723 },
    { text: "Guests arriving while you're in home clothes 😱", likes: 678 },
    { text: "'Subah jaldi uthna hai!' every single night 🌅", likes: 734 },
    { text: "Explaining the Indian head wobble to foreigners 🤔", likes: 698 },
    { text: "Baraat arriving 3 hours late like it's tradition 🎊", likes: 723 },
    { text: "Phone confiscated during exams season 📱", likes: 712 },
    { text: "The satisfaction of a perfectly round roti 🫓", likes: 698 },
    { text: "Dad turning off everything before leaving the house 🔐", likes: 645 },
    { text: "Mom comparing you to someone she read about once 📊", likes: 756 },
    { text: "The horror of running out of milk for morning chai 🥛", likes: 678 },
    { text: "Relatives discussing your future like you're not there 🗣️", likes: 756 },
    { text: "Wedding photographer working harder than the couple 📸", likes: 723 }
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
        { text: "Every braai needs at least 5 different types of meat or it doesn't count 🥓🍖", likes: 567 },




         { text: "South Africans: 'It's lekker!' Foreigners: 'What's lekker?' 😂🇿🇦", likes: 701 },
        { text: "When you plan your life around load shedding schedule ⚡📅", likes: 745 },
        { text: "The art of making a plan when there's no plan 🤔💡", likes: 678 },
        { text: "South African summers: 35°C and then sudden thunderstorm ⛈️🌞", likes: 712 },
        { text: "When someone says 'now now' and you have no idea when that is ⏰😅", likes: 689 },
        { text: "Taxi hand signals: A whole language on its own 🚐✋", likes: 734 },
        { text: "The panic when you haven't charged devices before load shedding 🔌😱", likes: 756 },
        { text: "South Africans abroad: 'Do you have boerewors there?' 🌍🥩", likes: 623 },
        { text: "When Eskom announces stage 6: National mourning 😭⚡", likes: 798 },
        { text: "The satisfaction of a perfect potjie on a Saturday 🍲🔥", likes: 645 },
        { text: "South African weather: Four seasons in one day, guaranteed 🌦️☀️❄️", likes: 701 },
        { text: "When you say 'ag shame man' with actual sympathy 🥺😂", likes: 678 },
        { text: "Taxi drivers: Rules of the road are merely suggestions 🚐💨", likes: 712 },
        { text: "The struggle of explaining 'koeksister' to foreigners 🍩❓", likes: 689 },
        { text: "South Africans: 'It's not that far, only 3 hours away!' 🚗⏰", likes: 734 },
        { text: "When you greet someone with 'Heita!' and they get it 👋😎", likes: 698 },
        { text: "Load shedding during online meetings: Classic South Africa 💻⚡", likes: 756 },
        { text: "The joy of finding biltong in your pantry you forgot about 🥩✨", likes: 623 },
        { text: "South African rugby: More important than breathing 🏉😤", likes: 745 },
        { text: "When someone says 'yebo yes' and everyone understands 👍😂", likes: 701 },
        { text: "The art of perfecting your boerewors roll technique 🌭🎯", likes: 678 },
        { text: "Johannesburg traffic: Everywhere is 'just 30 minutes away' 🚗⏰", likes: 712 },
        { text: "When foreigners try to pronounce 'Gqeberha' 🗣️😅", likes: 689 },
        { text: "South Africans: 'Is it? Is it?' in every conversation 🤔💬", likes: 734 },
        { text: "The panic when you run out of airtime at the worst time 📱😰", likes: 698 },
        { text: "Braai rules: The person who starts the fire is the braai master 🔥👨‍🍳", likes: 756 },
        { text: "When you say 'sharp sharp' and leave immediately 🚶💨", likes: 623 },
        { text: "South African moms: 'Voetsek!' The ultimate command 😤🗣️", likes: 745 },
        { text: "The struggle of keeping your phone charged during load shedding 🔋⚡", likes: 701 },
        { text: "When someone says 'yoh!' and you know it's serious 😲🗣️", likes: 678 },
        { text: "Taxi drivers hooting for absolutely no reason 🚐📯", likes: 712 },
        { text: "The satisfaction of a cold Castle Lager after a long day 🍺😌", likes: 689 },
        { text: "South African weddings: Bigger than royal weddings 👰💒", likes: 734 },
        { text: "When you use 'my china' and foreigners look confused 🤝❓", likes: 698 },
        { text: "Load shedding ruining your dinner plans AGAIN ⚡🍽️", likes: 756 },
        { text: "The art of making a perfect malva pudding 🍮✨", likes: 623 },
        { text: "South Africans: 'Awe!' as a greeting, goodbye, and everything in between 👋😂", likes: 745 },
        { text: "When Eskom promises 'improvements' and everyone laughs ⚡😏", likes: 701 },
        { text: "The struggle of explaining 'pap and vleis' to foreigners 🍛❓", likes: 678 },
        { text: "Taxi fare negotiations: An art form 🚐💰", likes: 712 },
        { text: "When someone says 'shame fine' and you're not sure if it's good or bad 🤔😅", likes: 689 },
        { text: "South African roadtrips: 'Petrol station stop!' every hour ⛽🚗", likes: 734 },
        { text: "The panic when WhatsApp goes down in SA 📱😱", likes: 698 },
        { text: "Braai etiquette: Never touch another man's braai 🔥🙅", likes: 756 },
        { text: "When you say 'just now' but mean in 2 hours ⏰😂", likes: 623 },
        { text: "South African moms: 'Haai! Haai! Haai!' The triple threat 😤👩", likes: 745 },
        { text: "Load shedding memes: Our coping mechanism ⚡😂", likes: 701 },
        { text: "The joy of a perfectly made vetkoek 🍩😋", likes: 678 },
        { text: "When someone says 'sho' and you know the conversation is ending 👋😎", likes: 712 },
        { text: "Taxi drivers' acrobatic parking skills 🚐🎪", likes: 689 },
        { text: "South Africans: 'It's hot!' at 25°C ☀️😅", likes: 734 },
        { text: "The struggle of finding good wifi during load shedding 📶⚡", likes: 698 },
        { text: "When you use 'kiff' and foreigners think you said 'cliff' 😂🗣️", likes: 756 },
        { text: "Braai conversations: Solving world problems over fire 🔥🌍", likes: 623 },
        { text: "South African slang: 'Yoh, eish, aikona!' in one sentence 🗣️😂", likes: 745 },
        { text: "The panic when petrol price increases AGAIN ⛽💸", likes: 701 },
        { text: "When someone says 'skattie' and you can't tell if it's sweet or sarcastic 😏💕", likes: 678 },
        { text: "Taxi drivers: The real MVPs of South African transport 🚐👑", likes: 712 },
        { text: "South African sports fans: We bleed our team colors 🏉💚💛", likes: 689 },
        { text: "The art of preparing for load shedding like it's a military operation ⚡🎖️", likes: 734 },
        { text: "When you say 'howzit going?' and get a full life story 🤷📖", likes: 698 },
        { text: "Braai smoke: The South African perfume 🔥👃", likes: 756 },
        { text: "South Africans: 'Aikona! Angazi!' When we don't want to deal 🙅😂", likes: 623 },
        { text: "Load shedding candles: Our new interior design 🕯️⚡", likes: 745 },
        { text: "The satisfaction of a perfectly spiced boerewors 🌭✨", likes: 701 },
        { text: "When foreigners try South African slang and butcher it 🗣️😅", likes: 678 },
        { text: "Taxi music: Always on maximum volume 🚐🔊", likes: 712 },
        { text: "South African winters: 'Cold' means 15°C ❄️😂", likes: 689 },
        { text: "The panic when your generator runs out of fuel ⚡🛢️", likes: 734 },
        { text: "When you say 'lekker man' and feel proudly South African 😎🇿🇦", likes: 698 },
        { text: "Braai philosophy: Low and slow is the only way 🔥⏰", likes: 756 },
        { text: "South Africans: 'I'll see you now now' Translation: Eventually ⏰😂", likes: 623 },
        { text: "The struggle of load shedding during exam time 📚⚡", likes: 745 },
        { text: "When someone says 'tsek!' and you know to back off 😤🏃", likes: 701 },
        { text: "Taxi drivers' impressive shortcuts through traffic 🚐🛣️", likes: 678 },
        { text: "South African heritage: 11 languages, 1 nation 🇿🇦🗣️", likes: 712 },
        { text: "The joy of finding Mrs Balls chutney abroad 🍯✈️", likes: 689 },
        { text: "When Eskom announces 'planned maintenance' aka load shedding ⚡😏", likes: 734 },
        { text: "Braai smoke signals: The original WhatsApp 🔥📱", likes: 698 },
        { text: "South Africans: 'Ag no man!' when something goes wrong 😤😂", likes: 756 },
        { text: "The panic of no power AND no airtime 📱⚡", likes: 623 },
        { text: "When you perfect the art of saying 'shame' with different meanings 🥺😂", likes: 745 },
        { text: "Taxi drivers: Speed limits are just suggestions 🚐💨", likes: 701 },
        { text: "South African summers: Sunscreen is not optional ☀️🧴", likes: 678 },
        { text: "Load shedding survival kits: Candles, batteries, and sense of humor 🕯️🔋😂", likes: 712 },
        { text: "When you say 'ja nee' and it makes perfect sense 👍😅", likes: 689 },
        { text: "Braai masters: Self-appointed, never questioned 🔥👨‍🍳", likes: 734 },
        { text: "South Africans abroad: 'I miss home' = I miss the braais 🌍🥩", likes: 698 },
        { text: "The satisfaction when Eskom announces NO load shedding ⚡🎉", likes: 756 }
    ]
};

console.log(textJokes)
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

//  SAVE COUNTRY 
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
        textGrid.innerHTML = ``;
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
                        <p> Could not load memes</p>
                        <p>Try again later</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            imageGrid.innerHTML = `
                <div class="error-state">
                    <p> Could not load memes</p>
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


