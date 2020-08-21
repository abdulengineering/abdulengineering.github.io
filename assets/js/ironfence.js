 
        function openGalleryIronFence(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/ironfence/1.jpg',
                    w:  1100,
                    h:  1772
                },
                {
                    src: 'assets/images/ironfence/2.jpg',
                    w:  1280,
                    h:  720
                },
                 {
                    src: 'assets/images/ironfence/3.jpg',
                    w:  1224,
                    h:  1632
                },
                 {
                    src: 'assets/images/ironfence/4.jpg',
                    w:  1466,
                    h:  930
                },
                 {
                    src: 'assets/images/ironfence/5.jpg',
                    w:  1000,
                    h:  1000
                },
                 {
                    src: 'assets/images/ironfence/6.jpg',
                    w:  750,
                    h:  750
                },
                 {
                    src: 'assets/images/ironfence/7.jpg',
                    w:  225,
                    h:  225
                },
                 {
                    src: 'assets/images/ironfence/8.jpg',
                    w: 1280,
                    h: 720
                },
                 {
                    src: 'assets/images/ironfence/9.jpg',
                    w:  800,
                    h:  600
                },
                 {
                    src: 'assets/images/ironfence/10.jpg',
                    w: 1000,
                    h: 1000
                },
                 {
                    src: 'assets/images/ironfence/11.jpg',
                    w: 1466,
                    h: 1040
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
    