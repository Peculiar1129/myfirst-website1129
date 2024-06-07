
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


function verifyAge(isOfAge) {
    if (isOfAge) {
        document.getElementById('age-verification').style.display = 'none';
    } else {
        alert("You must be 18 years or older to enter this site.");
        window.location.href = "https://www.google.com";
    }
}

window.onload = function() {
    document.getElementById('age-verification').style.display = 'flex';
};
