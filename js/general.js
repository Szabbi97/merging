$(document).ready(function() {
    //initial
    $('#content').load('content/roles/index.html');
    //hanle menu clicks
    $('ul#nav li a').click(function() {
      var page = $(this).attr('href');
      $('#content').load('content/addUser/' + page + '.html');
      $('ul#nav li.active').removeClass("active");
      $('ul#nav li a[href="'+page+'"]').parent().addClass("active");
      return false;
    });
});
$(function(){
  $(".dropdown-menu li a").click(function(){
    $(".btn:first-child").text($(this).text());
     $(".btn:first-child").val($(this).text());
  });
});
$(".dropdown-menu li").click(function(){
  $(this).parents(".btn-group").find('.btn').html(
  $(this).text()+" <span class=\"caret\"></span>"
  );
});
