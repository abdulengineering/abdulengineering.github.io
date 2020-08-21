 
        function openGallerySpiralStairs(){
            var pswpElement = document.querySelectorAll('.pswp')[0];

             
            var items = [
                {
                    src: 'assets/images/spiralStairs/1.jpg',
                    w: 728,
                    h: 1125
                },
                {
                    src: 'assets/images/spiralStairs/2.jpg',
                    w: 850,
                    h: 1133
                },
                 {
                    src: 'assets/images/spiralStairs/3.jpg',
                    w: 1000,
                    h: 1000
                },
                 {
                    src: 'assets/images/spiralStairs/4.jpg',
                    w: 375,
                    h: 500
                },
                 {
                    src: 'assets/images/spiralStairs/5.jpg',
                    w: 412,
                    h: 550
                },
                 {
                    src: 'assets/images/spiralStairs/6.jpg',
                    w: 480,
                    h: 853
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
    