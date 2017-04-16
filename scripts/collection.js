 // #1
 var buildCollectionItemTemplate = function () {
     var template =
         '<div class="collection-album-container column fourth">' +
         '  <img src="assets/images/album_covers/01.png"/>' +
         '  <div class="collection-album-info caption">' +
         '    <p>' +
         '      <a class="album-name" href="album.html"> The Colors </a>' +
         '      <br/>' +
         '      <a href="album.html"> Pablo Picasso </a>' +
         '      <br/>' +
         '      X songs' +
         '      <br/>' +
         '    </p>' +
         '  </div>' +
         '</div>'

     // #2
     return $(template);
 };

 $(window).load(function () {
     // #3
     var $collectionContainer = $('.album-covers');

     // #4
     $collectionContainer.empty();

     // We then create a for loop, at #3, that inserts 12 albums using the += operator, 
     //which appends content to strings. Each loop adds the contents of  
     //collectionItemTemplate (the template) to the innerHTML of  collectionContainer, 
     //thereby generating the albums that display on the collection page.
     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         // #5
         $collectionContainer.append($newThumbnail);
     }
 });