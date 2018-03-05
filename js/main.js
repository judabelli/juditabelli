$(document).ready(function() {
	
    $('a[href*=\\#]').each(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname
            && this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;

                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({scrollTop: targetOffset}, 1000);
                    return false;
                });
            }
        }
    });


    window.onscroll = function() {myFunction()};


    console.log("Im there");
    var header = document.getElementsByClassName("header__main")[0];
    var sticky = header.offsetTop;
    console.log(header);
    console.log(sticky);

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    $( "#searchForm" ).submit(function( event ) {    	 
    	// Stop form from submitting normally
    	event.preventDefault();    	 
    	// Get some values from elements on the page:
    	var $form = $( this ),
    	    mail = $form.find( "input[name='mail']" ).val(),
    	    firstname = $form.find( "input[name='firstname']" ).val(),
    	    lastname = $form.find( "input[name='lastname']" ).val(),
    	    subject = $form.find( "textarea[name='subject']" ).val(),
    	    url = "process.php";    	 
    	// Send the data using post
    	var posting = $.post( url, { firstname: firstname, 
    		  						 lastname: lastname, 
    		  						 mail: mail, 
    		  						 subject: subject 
    	});    	 
    	// Put the results in a div
    	posting.done(function( data ) {
    	    $( "#contact" ).empty().append("");
    	});    	
	});
});