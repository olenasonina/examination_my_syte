$('.our__work-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
          // centerMode: true,
          // centerPadding: '40px',
          // slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false
        //   centerMode: true,
        //   centerPadding: '40px',
        //   slidesToShow: 1
        }
      }
    ]
  });
