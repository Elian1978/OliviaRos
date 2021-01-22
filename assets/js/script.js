$(function(){

  $("a").click(function(event){
    // console.log(this, this.hash);
    if (this.hash !== "") {
      event.preventDefault();

      var this = this.hash;

      $("html, body").animate({
        scrollTop: $(this).offset().top
      }, 800, function(){
        window.location.hash = this;
      });
    }
  });

  // $('[data-toggle="popover"]').popover();

});
