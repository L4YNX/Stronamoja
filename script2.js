var btnHome = document.getElementById('Home').onclick = function(){
    window.location.href = 'main.html';
};

var btnLogOut = document.getElementById('LogOut').onclick = function(){
    history.pushState({}, '', 'index.html');
    window.location.href = 'index.html';
};

window.addEventListener('popstate', function(event) {
    history.pushState({}, '', 'index.html');
    window.location.href = 'index.html';
});