(() => {
    /*var duplicate = $(".mainContent").clone();
	var contentBlurred = $("<div></div>");
	$(contentBlurred).append(duplicate);
	$(contentBlurred).addClass('content-blurred');
	$("#header").append(contentBlurred);
	var translation;
	$(window).bind("scroll", function(){
	    var top = $(this).scrollTop(); // 当前窗口的滚动距离
	    translation = 'translate3d(0,' + (-top + 'px') + ',0)';
	    $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation});
	});*/

    var duplicate = document.getElementsByTagName("main")[0].cloneNode(true);
    // var duplicate = document.querySelector(".home").cloneNode(true);
    var contentBlurred = document.createElement("div");
    console.log(contentBlurred);
	contentBlurred.appendChild(duplicate);
	contentBlurred.className = 'content-blurred';
    console.log(contentBlurred);
	document.querySelector(".header").appendChild(contentBlurred);
    console.log(document.querySelector(".header"));
	var translation;
	document.addEventListener("scroll", function(){
	    var top = document.documentElement.scrollTop || document.body.scrollTop; // 当前窗口的滚动距离
	    translation = 'translateY(' + (-top + 'px') + ')';
	    duplicate.style.WebkitTransform = translation;
	    duplicate.style.msTransform = translation;
	    duplicate.style.transform = translation;
	});
  
})();