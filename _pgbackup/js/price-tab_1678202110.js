$(function() {
    $(".price-content").not(":first").hide()
    $(".price_tab-box .price_tab-btn").on("click", function() {
        $(".price_tab-box .price_tab-btn").removeClass("active").eq($(this).index()).addClass("active")
        $(".price-content").hide().eq($(this).index()).fadeIn()
    })

})