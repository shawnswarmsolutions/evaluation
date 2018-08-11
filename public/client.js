// client-side js

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  $.get('/content', function(content) {
    content.forEach(function(article) {
      $('<li></li>').text(article.title).appendTo('main ul')
    })
  })
})
