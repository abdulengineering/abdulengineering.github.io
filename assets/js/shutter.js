 
        function openGalleryShutters(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/shutter/1.jpg',
                    w: 1108,
                    h: 1637
                },
                {
                    src: 'assets/images/shutter/2.jpg',
                    w: 720,
                    h: 1282
                },
                 {
                    src: 'assets/images/shutter/3.jpg',
                    w: 450,
                    h: 443
                },
                 {
                    src: 'assets/images/shutter/4.jpg',
                    w: 768,
                    h: 960
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
    