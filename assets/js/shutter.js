 
        function openGalleryShutters(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/shutter/1.jpg',
                    w: 1266,
                    h: 901
                },
                {
                    src: 'assets/images/shutter/2.jpg',
                    w: 626,
                    h: 417
                },
                 {
                    src: 'assets/images/shutter/3.jpg',
                    w: 500,
                    h: 500
                },
                 {
                    src: 'assets/images/shutter/4.jpg',
                    w: 626,
                    h: 954
                } 
            ];

            // define options (if needed)
            var options = {
                history: false,
      	        focus: false, 
                showAnimationDuration: 0,
                hideAnimationDuration: 0
            };

            // Initializes and opens PhotoSwipe
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
                    } 
    