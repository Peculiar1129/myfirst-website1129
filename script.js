document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // 當滾動超過200像素時顯示按鈕
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }

        var footer = document.querySelector('footer');
        var footerRect = footer.getBoundingClientRect();
        var buttonRect = backToTopButton.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight) { // 當 footer 可見時調整按鈕位置
            backToTopButton.style.bottom = (windowHeight - footerRect.top + 20) + 'px';
        } else {
            backToTopButton.style.bottom = '20px';
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.blur-load');
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

