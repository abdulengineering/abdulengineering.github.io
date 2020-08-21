 
        function openGallerySpiralStairs(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/spiralStairs/1.jpg',
                    w: 1108,
                    h: 1637
                },
                {
                    src: 'assets/images/spiralStairs/2.jpg',
                    w: 720,
                    h: 1282
                },
                 {
                    src: 'assets/images/spiralStairs/3.jpg',
                    w: 450,
                    h: 443
                },
                 {
                    src: 'assets/images/spiralStairs/4.jpg',
                    w: 768,
                    h: 960
                },
                 {
                    src: 'assets/images/spiralStairs/5.jpg',
                    w: 236,
                    h: 472
                },
                 {
                    src: 'assets/images/spiralStairs/6.jpg',
                    w: 684,
                    h: 1024
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
    