//tabs
(function ($) {
    $(function () {

        $('.experts-1').find('ul.experts-list').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.experts-1').find('div.experts-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

//scroll


$("a.scroll").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({
        scrollTop: destination
    }, 800);
});
