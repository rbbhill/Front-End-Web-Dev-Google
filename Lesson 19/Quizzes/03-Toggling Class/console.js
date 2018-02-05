/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!

article2 = $('.article-item');

article2.toggleClass('article-item featured');

article3 = $('.article-item');

$("li.article-item featured").next(article3).html('.article-item featured');
