
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const slideImages = document.querySelectorAll('.slide-in');

    function checkSlide(e) {
        slideImages.forEach(img => {
            const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
            // 图片底部
            const imgBottom = img.offsetTop + img.height;
            
            // 已滑过了图片的一半
            const isHalfShow = slideInAt > img.offsetTop;
            // 未完全滑过图片
            const isNotScrollPast = window.scrollY < imgBottom;
            
            if (isHalfShow && isNotScrollPast) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
     });
    }

    window.addEventListener('scroll', debounce(checkSlide));

  