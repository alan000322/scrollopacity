$(function() {
    var scrollable = $("#outer").height();
    console.log('scrollable: ', scrollable);
    $(window).scroll(function() {
        var scrolled = $(document).scrollTop();
        console.log('scrollable: ', scrollable);
        console.log('scrolled: ', scrolled)
        $(".opa").each(function(index) {
            if ((3 * scrolled) / scrollable < 2.2) {
                console.log('data-pos', $(this).data("pos"))
                console.log('data-pos-cal', (3 * scrolled) / scrollable)
                $(this).css("opacity", $(this).data("pos") + (3 * scrolled) / scrollable);

                console.log(
                    "[" + scrolled / scrollable + "]" + index + ": " + $(this).css("opacity")
                );
            } else {
                $(this).css("opacity", 0);
                console.log(
                    index + ": " + $(this).css("opacity")
                );

            }

        });




        $(".maploc").each(function() {
            var this_pos = $(this).offset().top;
            var this_h = $(this).height();
            if (scrolled >= this_pos && scrolled < this_pos + this_h) {
                $("#bg-img").css("background-position", $(this).data("bgpos"));
            }
        });
    });
});