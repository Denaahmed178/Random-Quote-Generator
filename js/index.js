var quotes=[ 
{
    quote :"“Be yourself; everyone else is already taken.”",
    author : "― Oscar Wilde"
}
,
{
    quote :"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author : "― Marilyn Monroe"
}
,
{
    quote :"“A room without books is like a body without a soul.”",
    author : "― Marcus Tullius Cicero"
}
,
{
    quote :"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author : "― Bernard M. Baruch"
}
,
{
    quote :"“So many books, so little time.”",
    author : "― Frank Zappa"
}
,
{
    quote :"“In three words I can sum up everything I've learned about life: it goes on.”",
    author : "― Robert Frost"
}
,
{
    quote :"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    author : "― Maya Angelou"
}
,
{
    quote :"“To live is the rarest thing in the world. Most people exist, that is all.”",
    author : "― Oscar Wilde"
}
,
{
    quote :"“Always forgive your enemies; nothing annoys them so much.”",
    author : "― Oscar Wilde"
}
,
{
    quote :"“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
    author : "― Albert Einstein"
}
];
var lastIndex = -1;
var index;
console.log(quotes.length);
function generateQuote(){
    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex);

    lastIndex=index;
    
    document.getElementById('quoteOutput').innerHTML = quotes[index].quote ;
    document.getElementById('authorOutput').innerHTML =  quotes[index].author;
}