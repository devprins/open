// static/script.js
function roastMariya() {
    var friendNameElement = document.getElementById('friendName');
    var roastTextElement = document.getElementById('roastText');

    var friendName = friendNameElement.innerText;
    var roasts = [
        `Hey Mariya, remember that time you... Just kidding, I try to forget too.`,
        `Mariya, if you were a spice, you'd be flour. Just there, not adding much.`,
        `I asked Mariya for her opinion. Now I have a 10-page essay on why I'm wrong.`,
        `Mariya, if laughter is the best medicine, your sense of humor must be a cure for world peace.`,
        `Is it true, Mariya? Did it hurt when you fell from cloud nine? Or did you just float down gracefully on your charm?`,
        `Mariya, you're like a human emoji. Expressive, but sometimes I have no idea what you mean.`,
        `If Mariya were a superhero, her superpower would be turning coffee into code.`,
        `Mariya, you're so intelligent that I'm convinced you invented a new color and forgot to tell anyone.`,
        `If we were all Mariyas, the world would be a much punnier place.`,
        `Mariya, if you were a cat, you'd be the type that knocks things off the table just to watch them fall.`,
        `They say Mariya has a sweet tooth, but I suspect her whole mouth is made of sugar.`,
        `Mariya, if puns were currency, you'd be a billionaire.`,
        `Is it just me, or does Mariya's positivity level break the scale? Someone call a scientist.`,
        `Mariya, if there were an award for the most cheerful person, you'd win it—along with a lifetime supply of confetti.`,
        `Mariya, your energy is like a renewable resource. I hope you're not planning to patent it.`,
        `They say Mariya can find humor in everything. I once saw her laugh at a math problem.`,
        `Mariya, if you were a dessert, you'd be a sunshine-infused cupcake with extra sprinkles.`,
        `Mariya, your charm is so magnetic that even Siri would ask you for directions.`,
        `Mariya, you're so sweet, you give sugar a run for its money.`,
        `If Mariya had a superpower, it would be turning everything into glitter.`,
        `Mariya, are you a magician? Because whenever I look at you, everyone else disappears—probably to get away from your puns.`,
        `They say laughter is the best medicine. Mariya, you owe me a lot of medicine.`,
        `Mariya, you're like a fine wine. The older you get, the more likely you are to give people a headache.`,
        `If Mariya were a cat, she'd be a purr-fectly delightful troublemaker.`,
        `Mariya, you're so organized. I bet your spice rack is alphabetized.`,
        `If there were a Mariya-themed amusement park, the main attraction would be the "Hall of Puns."`,
        `Mariya, you're like a human alarm clock—annoying but necessary to start the day.`,
        `I asked Mariya for her best joke. She said, 'My life.'`,
        `Mariya, if laughter is contagious, you might want to get that checked out.`,
    ];

    var randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

    roastTextElement.innerText = randomRoast;
}

