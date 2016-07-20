(function($, im){
    $(document).on('click', '.intergeo_nag .notice-dismiss', function(e){
        $.ajax({
            url: ajaxurl,
            data: {
                'action'    : im.ajax["action"],
                'security'  : im.ajax["nonce"]
            }
        });
    });

    $(document).on('click', '.themeisle_triggered_feedback_nag .notice-dismiss', function(e){
        themeisle_dismiss_feedback_nag();
    });

    $('.themeisle-feedback-click').on('click', function(e){
        themeisle_dismiss_feedback_nag();
        $('.themeisle_triggered_feedback_nag').remove();
    });

    function themeisle_dismiss_feedback_nag(){
        $.ajax({
            url: ajaxurl,
            data: {
                'action'    : im.ajax["themeisle_feedback_action"],
                'slug'      : im.ajax["themeisle_feedback_slug"],
                'security'  : im.ajax["nonce"]
            }
        });
    }

})(jQuery, intergeo_misc)