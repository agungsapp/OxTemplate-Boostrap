$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(document).ready(function () {
    // Menangkap elemen tombol "prev" dan "next"
    var prevButton = $("#prev");
    var nextButton = $("#next");

    // Menangkap elemen "Next" dan "Previous" pada owl carousel
    var owlPrevButton = $(".owl-prev");
    var owlNextButton = $(".owl-next");

    // Menambahkan event listener pada tombol "prev" untuk mengklik owl carousel "Previous"
    prevButton.click(function () {
      owlPrevButton.click();
    });

    // Menambahkan event listener pada tombol "next" untuk mengklik owl carousel "Next"
    nextButton.click(function () {
      owlNextButton.click();
    });
  });
});
