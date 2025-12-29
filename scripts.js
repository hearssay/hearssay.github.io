// analytics
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-DDSX5278LJ";
    document.head.appendChild(gaScript);

    gaScript.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DDSX5278LJ');
    };
})();


// zulu
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var x = new Date()
    var x1 = x.toISOString().slice(11, 19) + ' z'
    document.getElementById('ct').innerHTML = x1;
    tt = display_c();
}

// Initialize on page load
window.onload = display_c;

// hamburger

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('header-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
