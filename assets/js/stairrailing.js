 
        function openGalleryStairRailings(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/stairrailing/1.jpg',
                    w: 720,
                    h: 720
                },
                {
                    src: 'assets/images/stairrailing/2.jpg',
                    w: 680,
                    h: 487
                },
                 {
                    src: 'assets/images/stairrailing/3.jpg',
                    w: 1024,
                    h: 768
                },
                 {
                    src: 'assets/images/stairrailing/4.jpg',
                    w: 1688,
                    h: 3000
                },
                 {
                    src: 'assets/images/stairrailing/5.jpg',
                    w: 1600,
                    h: 2321
                },
                 {
                    src: 'assets/images/stairrailing/6.jpg',
                    w: 650,
                    h: 905
                },
                ,
                 {
                    src: 'assets/images/stairrailing/7.jpg',
                    w: 512,
                    h: 384
                },
                ,
                 {
                    src: 'assets/images/stairrailing/8.jpg',
                    w: 512,
                    h: 344
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
    