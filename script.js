document.addEventListener('DOMContentLoaded', function() {
    const text = "世界が終わるまで";
    const typingTextElement = document.getElementById('typing-text');

    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
        }
    }

    type();

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
