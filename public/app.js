var app = function () {
    addCat(catArray);
}

const Cat = function (name, favouriteFood, imageURL) {
    this.name = name;
    this.favouriteFood = favouriteFood;
    this.imageURL = imageURL;
}

var cat1 = new Cat("Raisin", "Pizza", "https://i.pinimg.com/originals/75/18/fb/7518fb91e572e57b40efc6cfb8b29383.jpg");
var cat2 = new Cat("Boba", "Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
var cat3 = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
var cat4 = new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

var catArray = [cat1, cat2, cat3, cat4];

var createUL = function (location) {
    let ul =  document.createElement("ul");
    ul.className = "cat";
    location.appendChild(ul);
    return ul;
}

var createList = function (ul, cat) {
    let list1 = document.createElement("li");
    list1.innerText = "Name: " + cat.name;
    ul.appendChild(list1);
    let list2 = document.createElement("li");
    list2.innerText = "Favourite Food: " + cat.favouriteFood;
    ul.appendChild(list2);
    let list3 = document.createElement("li");
    ul.appendChild(list3);
    return list3;
}

var createImg = function (list, cat) {
    var img = document.createElement("img");
    img.width="500";
    img.src=cat.imageURL;
    list.appendChild(img);
}

var addCat = function (catArray) {
    var location = document.getElementById("cats");
    for(let cat of catArray){
        var ul = createUL(location);
        var list = createList(ul, cat);
        createImg(list, cat);
    }
}

document.addEventListener("DOMContentLoaded", app);

// var addQuote = function (quotesArray) {
//     var section = document.getElementById("quotes");
//     for(let quote of quotesArray){
//         let article = createArticle(section);
//         let blockQuote = createBlockQuote(article, quote.quote);
//         createCite(blockQuote, quote.author);
//     }
//
// }
//
// var createArticle = function (section) {
//     let article = document.createElement("article");
//     article.className = "quote";
//     section.appendChild(article);
//     return article;
// }
//
// var createBlockQuote = function (article, text) {
//     let blockQuote = document.createElement("blockquote");
//     let textQuote = document.createTextNode(text);
//     blockQuote.appendChild(textQuote);
//     article.appendChild(blockQuote);
//     return blockQuote;
// }
//
// var createCite = function (blockQuote, text) {
//     let cite = document.createElement("cite");
//     let textAuthor = document.createTextNode(text);
//     cite.appendChild(textAuthor);
//     blockQuote.appendChild(cite);
// }
