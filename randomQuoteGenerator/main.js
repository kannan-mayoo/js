var button = document.getElementById("mainPageButton");
var output = document.getElementById("mainPageOutput");


var button2 = document.getElementById("mainPageButton2");
var output2 = document.getElementById("mainPageOutput2");


var button3 = document.getElementById("mainPageButton3");
var output3 = document.getElementById("mainPageOutput3");

var button4 = document.getElementById("mainPageButton4");
var output4 = document.getElementById("mainPageOutput4");



var quotes = [
    '"In this world we born for certain purpose, if we go for it we will definitely reach the purpose." - Mayoo',
    '"We are all together can get rid of poverty"- Mayoo',
    '“Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring.”― Marilyn Monroe',
    '“Do what you can, with what you have, where you are.”-  Theodore Roosevelt',
    '“Success is not final, failure is not fatal: it is the courage to continue that counts.” ― Winston S. Churchill',
    '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”― Helen Keller',
    '“And, when you want something, all the universe conspires in helping you to achieve it.”― Paulo Coelho',
    '“It is never too late to be what you might have been.”― George Eliot',
    '“We are all in the gutter, but some of us are looking at the stars.” ― Oscar Wilde',
    '“Be the change that you wish to see in the world.”― Mahatma Gandhi',
    'The greatness of art is not to find what is common but what is unique." - Isaac Bashevis Singer'
];

quotesSuccess = [
    '“Try not to become a man of success. Rather become a man of value.” ― Albert Einstein',
    '“It is better to fail in originality than to succeed in imitation.” ― Herman Melville',
    '“If at first you dont succeed, try, try again. Then quit. No use being a damn fool about it.” ― W.C. Fields',
    '“I cant give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.” ― Herbert Bayard Swope',
    '“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.” - Steve Maraboli',
    '“Success is getting what you want, happiness is wanting what you get” ― W. P. Kinsella',
    '“Failure is the condiment that gives success its flavor.” ― Truman Capote',
    '“Success is stumbling from failure to failure with no loss of enthusiasm.” ― Winston S. Churchill',
    '“The worst part of success is trying to find someone who is happy for you.” ― Bette Midler',
    '“Dont spend time beating on a wall, hoping to transform it into a door. ” ― Coco Chanel',
    '“Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.” ― Steve Maraboli',
    '“If A is a success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut” ― Albert Einstein',
    '“The way to get started is to quit talking and begin doing. ” ― Walt Disney',
    '“Sometimes it takes a good fall to really know where you stand” ― Hayley Williams',
    '“Our greatest glory is not in never falling, but in rising every time we fall.” ― Oliver Goldsmith'
];


quotesHumor = [
    '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.” ― Albert Einstein',
    '“So many books, so little time.” ― Frank Zappa',
    '“You only live once, but if you do it right, once is enough.” ― Mae West',
    '“Never put off till tomorrow what may be done day after tomorrow just as well.” ― Mark Twain',
    '“I love deadlines. I love the whooshing noise they make as they go by.” ― Douglas Adams, The Salmon of Doubt',
    '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.” ― Groucho Marx',
    '“Some people never go crazy. What truly horrible lives they must lead.” ― Charles Bukowski',
    '“Reality continues to ruin my life.” ― Bill Watterson',
    '“The reason I talk to myself is because I’m the only one whose answers I accept.” ― George Carlin',
    '“It’s no use going back to yesterday, because I was a different person then.” - Lewis Carroll',
    '“Be nice to nerds. You may end up working for them. We all could.” ― Charles J. Sykes,',
    '“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.” -Jane Austen'
];



quotesPhilosophy = [
    '“A day without laughter is a day wasted.” ― Nicolas Chamfort',
    '“We have to dare to be ourselves, however frightening or strange that self may prove to be.” ― May Sarton',
    '“If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?” ― Laurence J. Peter',
    '“Trust yourself. You know more than you think you do.” ― Benjamin Spock',
    '“Without deviation from the norm, progress is not possible.” ― Frank Zappa',
    '“Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!” ― Dr. Seuss',
    '“Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.” ― Bertrand Russell',
    '“There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.” ― Elie Wiesel',
    '“You talk when you cease to be at peace with your thoughts.” ― Kahlil Gibran, The Prophet',
    '“Man is the only creature who refuses to be what he is.” ― Albert Camus',
    '“Go to heaven for the climate and hell for the company.” ― Benjamin Franklin Wade'
];




button.addEventListener("click", function() {

    var randomValue = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomValue;
})

button2.addEventListener("click", generateSuccessButton);

function generateSuccessButton() {
    var randomValue2 = quotesSuccess[Math.floor(Math.random() * quotes.length)]
    output2.innerHTML = randomValue2;
}


button3.addEventListener("click", generateHumorButton);

function generateHumorButton() {
    var randomValue3 = quotesHumor[Math.floor(Math.random() * quotes.length)]
    output3.innerHTML = randomValue3;
}


button4.addEventListener("click", generatePhilosophyButton);

function generatePhilosophyButton() {
    var randomValue4 = quotesPhilosophy[Math.floor(Math.random() * quotesPhilosophy.length)]
    output4.innerHTML = randomValue4;
}