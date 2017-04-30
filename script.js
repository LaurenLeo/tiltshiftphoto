$(document).ready(function(){

/*  $('button').on('click', function() {

    var search = $('#search').val();
    searchReddit(search);

  });*/

 $.get('https://www.reddit.com/r/tiltshift.json').done(function(response) {

      //console.log(response.data.children);

      var obj = [];

      response.data.children.forEach(function(x){
            console.log(x);
              if (x.data.thumbnail !== "self" && x.data.url.endsWith('.jpg') && x.data.title !== "Scargo Tower"){
                var url = x.data.url;
                var title = x.data.title;
                var author = x.data.author;

               $('#gallery').append('<div class="thumbnail"><a href=' + url + ' data-lightbox="tiltshift" data-title="' + title + ' by: ' + author+ '"><img src=' + url + '><div class="overlay"><div class="title">' + '"' + title + '" by: ' + author + '</div></div></a></div>');
             }



             //var thumbnail = x.data.thumbnail;


            //$('body').append('<div><img src=' + thumbnail + '></div>');

      });
/*
      for(var i = 0; i < response.data.children.length; i++) {

        var title = response.data.children[i].data.title;
        var thumbnail = response.data.children[i].data.thumbnail;
        var author = response.data.children[i].data.author;
        var score = response.data.children[i].data.score;
        var date = response.data.children[i].data.created;

        $('body').append('<div><p>' + author + '</p><p>' + title + '<p>' + date + '</p></p><img src=' + thumbnail + '><p>' + score + '</p></div>');

      }*/

    });




});
