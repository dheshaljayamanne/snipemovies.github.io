var $searchBox = $('#search-weeazer');
var $userDivs = $('.chat-users div');

$searchBox.on('input', function() {
  var scope = this;
  if (!scope.value || scope.value == '') {
    $userDivs.show();
    return;
  }

  $userDivs.each(function(i, div) {
    var $div = $(div);
    $div.toggle($div.text().toLowerCase().indexOf(scope.value.toLowerCase()) > -1);
  })
});