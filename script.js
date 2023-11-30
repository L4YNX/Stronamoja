let btn = document.getElementById('submitBtn').onclick = function(){
    try {
        var login = document.getElementById('logintxt').value;
        var password = document.getElementById('passwordtxt').value;
        
        if (login == 'olaf' && password == 'adm') {
            window.location.href = 'main.html';
        }
    } catch (error) {
        console.error("Wystąpił błąd: ", error);
    }
};

// Funkcja obsługująca naciśnięcie klawisza Enter
function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        // Znajdź przycisk o określonym id i wywołaj jego metodę click()
        var button = document.getElementById('submitBtn');
        button.click(); // Symuluj kliknięcie przycisku
    }
}

// Nasłuchiwanie zdarzenia keypress na elemencie dokumentu
document.addEventListener('keypress', handleEnterKeyPress);

window.addEventListener('popstate', function(event) {
    history.pushState({}, '', 'index.html');
    window.location.href = 'index.html';
});