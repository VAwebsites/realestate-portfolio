$(function(){

    $('.NRI-kb a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    })

    $(window).scroll(function(e){
        var scrolled_top = $("body").scrollTop() || $("html").scrollTop(),
        menubar = $(".menu-bar"),
        menubarTopSaved = menubar.data("topValue"),
        menubarTop = menubarTopSaved || menubar.position().top;

        if(scrolled_top > menubarTop){
            menubar.data("topValue", menubarTop).addClass("sticked");
            $(".topStrip").addClass("sticked");
            $(".hero-bg").css("margin-top", "-80px");
            
        }else{
            menubar.removeClass("sticked");
            $(".topStrip").removeClass("sticked");
            $(".hero-bg").css("margin-top", "0px");
        }
    });

    
    var responsive = [{
        breakPoint: 768,
        onPort: function () {
            $(this.context).unbind("scroll");
            
            $(".sticked").removeClass("sticked");
            
                var mbtn = $(".mobile-menu-trigger");
                console.log(mbtn);
                if (mbtn.length > 0) {
                    mbtn.click(function () {
                        if (!mbtn.data("open")) {
                            $(".menu-items").show(0);
                            mbtn.data("open", true);
                        } else {
                            $(".menu-items").hide(0);
                            mbtn.data("open", false);
                        }
                    }).data("open", false);
                    $(".hasmenu").click(function(){
                        var _this= $(this);
                        $(".open-menu").removeClass("open-menu");

                        if(_this.data("open")){
                            _this.data("open",false);
                            _this.removeClass("open-menu");
                        }else{
                            _this.data("open",true);
                            _this.addClass("open-menu");
                        }
                    }).data("open", false);
                    return false;
                } else {
                    return true;
                }
                

        },
        offPort: function () {
            $(window).scroll(windowScroll)();
        },
        context: window
    }];
    function portRespective() {
        var width = this.outerWidth;
        console.log(width);
        for (var i = 0; i < responsive.length; i++) {
            if (width <= responsive[i].breakPoint) {
                responsive[i].onPort();
                break;
            }
        }
    }

    portRespective();
    setSliderbg();
    

    

    $('.home-slider').bind( 'resize', function(e) {
          setSliderbg();
    });

    $('.projects-slider').carousel();
    

});


function setSliderbg(){
    var elem_height= $(".home-slider").outerHeight()+80; 
    $(".hero-bg").css('height', elem_height+'px');
}

function initMap(lat, lng) {
    var uluru = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }