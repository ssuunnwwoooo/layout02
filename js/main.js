$(function () {
    $('.main_slide').slick({
        arrows: false,
        // vertical 밑에서 위로 올라가는거 
        // fade 깜박거리면서 사라지는거
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        //내가 클릭한 요소의 번호를 알려줌
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });


    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});
