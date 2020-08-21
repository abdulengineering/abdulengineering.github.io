 
        function openGalleryIronDoors(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/doors/1.png',
                    w: 1108,
                    h: 1637
                },
                {
                    src: 'assets/images/doors/2.png',
                    w: 720,
                    h: 1282
                },
                 {
                    src: 'assets/images/doors/3.png',
                    w: 450,
                    h: 443
                },
                 {
                    src: 'assets/images/doors/4.png',
                    w: 768,
                    h: 960
                },
                 {
                    src: 'assets/images/doors/5.png',
                    w: 236,
                    h: 472
                },
                 {
                    src: 'assets/images/doors/6.png',
                    w: 684,
                    h: 1024
                },
                 {
                    src: 'assets/images/doors/7.png',
                    w: 1066,
                    h: 1600
                },
                 {
                    src: 'assets/images/doors/8.png',
                    w: 279,
                    h: 363
                },
                 {
                    src: 'assets/images/doors/9.png',
                    w: 1927,
                    h: 2559
                },
                 {
                    src: 'assets/images/doors/10.png',
                    w: 245,
                    h: 500
                },
                 {
                    src: 'assets/images/doors/11.png',
                    w: 501,
                    h: 768
                },
                 {
                    src: 'assets/images/doors/12.png',
                    w: 982,
                    h: 1500
                },
                 {
                    src: 'assets/images/doors/13.png',
                    w: 564,
                    h: 861
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
    