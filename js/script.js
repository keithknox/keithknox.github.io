$(document).ready(function(){

    // Main page effects

      $('#about').hide();
      $('#projects').hide();
      $('#contacts').hide();

      $('.aboutLink').on('click', function(){
          $('#projects').fadeOut(1000);
          $('#contacts').fadeOut(1000);
          $('#about').fadeIn(1000);
        })

      $('.projectLink').on('click', function(){
          $('#contacts').fadeOut(1000);
          $('#about').fadeOut(1000);
          $('#projects').fadeIn(1000);
      })

      $('.contactLink').on('click', function(){
        $('#about').fadeOut(1000);
        $('#projects').fadeOut(1000);
          $('#contacts').fadeIn(1000);
      })

      // Project slider
      var speed = 500;  //fade speed
    var autoswitch = true;  //auto slider options
    var autoswitch_speed = 4000; //Auto slider speed

    $('.slide').first().addClass('active');

    $('.slide').hide();

    $('.active').show();

    $('#next').on('click', nextSlide);

    $('#prev').on('click', prevSlide);



      function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
              if($('.oldActive').is(':last-child')){
                $('.slide').first().addClass('active');
              }
              else {
                $('.oldActive').next().addClass('active');
              }
              $('.oldActive').removeClass('oldActive');
              $('.slide').fadeOut(speed);
              $('.active').fadeIn(speed);
        }

        function prevSlide(){
          $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':first-child')){
              $('.slide').last().addClass('active');
            }
            else {
              $('.oldActive').prev().addClass('active');
            }
            $('.oldActive').removeClass('oldActive');
            $('.slide').fadeOut(speed);
            $('.active').fadeIn(speed);
        }


});
