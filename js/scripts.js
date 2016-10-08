(function($) {
    "use strict"

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    })

    $('#topNav').affix({
        offset: {
            top: 400
        }
    })
    
    new WOW().init()
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this)
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo')
        event.preventDefault()
    })
    
    $('.navbar-collapse ul li a').click(function() {
        /* used to close nav after clicking */
        $('.navbar-toggle:visible').click()
    })

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"))
    })

})(jQuery)

SocialDig({
    selector: '.github',
    service: 'github',
    user: 'iamericanartist'
}, function(data) {
    if (data.length > 0) {
        var list = document.createElement('ul')
        list.className = 'list-plain repos'

        // Loop through the repos
        data.forEach(function(el, idx, arr) {
            if (idx < 4) {
                var item = document.createElement('li')
                var updateDate = el.updated_at

                item.className = 'repo'
                item.innerHTML = '<a href="' + el.html_url + '">' + el.description + '</a>' + ' - updated on ' + updateDate.slice(5,10) + '-' + updateDate.slice(0,4)
                console.log("time stamp", updateDate)
                console.log("time stamp", updateDate.slice(0,10))
console.log("el", el)
                // Add the new item to the list
                list.appendChild(item)
            }
        })

        // Add the list to the page
        document.querySelector('.github').appendChild(list)
    }
})
