
//This should make a request to your animals api, and append each item
//to the HTML id list
(function(){
$.getJSON( "YOUR URL GOES HERE", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {

    items.push( "<li>" + val.SOMETHING + val.SOMETHING +"</li>" );
  });
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#list" );
});
})();
