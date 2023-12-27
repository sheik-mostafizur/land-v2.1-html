       $(function () {
                    var cnt = 0;
                    $(".nav-toggle").click(function () {
                        cnt++;
                        if (cnt % 2 == 1) {
                            $(".mzr-responsive").slideDown("slow", function () {
                                // Animation complete.
                            });
                        } else {
                            $(".mzr-responsive").slideUp("slow", function () {
                                // Animation complete.
                            });
                        }
                    });

                    var cnt_inner = 0;
                    $(".mzr-drop a").click(function () {
                        cnt_inner++;

                        if (cnt_inner % 2 == 1) {
                            if ($(this).next().length) {
                                $(this).next().slideDown("slow", function () {
                                    // Animation complete.
                                });
                            }
                        } else {
                            if ($(this).next().length) {
                                $(this).next().slideUp("slow", function () {
                                    // Animation complete.
                                });
                            }
                        }

                        //console.log($(this));

                    });
});

$(function(){
    $('.close-video').click(function(){      
        $('iframe').attr('src', $('iframe').attr('src'));
    });
});

