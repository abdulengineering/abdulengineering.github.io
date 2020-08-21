 
        function openGalleryIronWindows(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/windows/1.jpg',
                    w: 1108,
                    h: 1637
                },
                {
                    src: 'assets/images/windows/2.jpg',
                    w: 185,
                    h: 250
                },
                 {
                    src: 'assets/images/windows/3.jpg',
                    w: 768,
                    h: 1280
                },
                 {
                    src: 'assets/images/windows/4.jpg',
                    w: 500,
                    h: 500
                },
                 {
                    src: 'assets/images/windows/6.jpg',
                    w: 348,
                    h: 268
                },
                 {
                    src: 'assets/images/windows/7.jpg',
                    w: 450,
                    h: 600
                },
                 {
                    src: 'assets/images/windows/8.jpg',
                    w: 500,
                    h: 500 
                },
                 {
                    src: 'assets/images/windows/9.jpg',
                    w: 500,
                    h: 500
                },
                 {
                    src: 'assets/images/windows/10.jpg',
                    w: 1024,
                    h: 992
                },
                 {
                    src: 'assets/images/windows/11.jpg',
                    w: 500,
                    h: 500
                },
                 {
                    src: 'assets/images/windows/12.jpg',
                    w: 500,
                    h: 500
                },
                 {
                    src: 'assets/images/windows/13.jpg',
                    w: 1500,
                    h: 938
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
    