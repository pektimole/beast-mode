let timer;
let elapsedSeconds = 0;
const timeIntervals = [60, 90, 120, 150, 180]; // Sekundenmarken für Benachrichtigungen

// Funktion zum Starten des Beast Modes
function startBeastMode() {
    document.getElementById('beast-mode-display').classList.remove('hidden');
    startStopwatch();
}

// Timer-Start und Anzeige der verstrichenen Zeit
function startStopwatch() {
    timer = setInterval(() => {
        elapsedSeconds++;
        if (timeIntervals.includes(elapsedSeconds)) {
            alert(`Zeit abgelaufen: ${elapsedSeconds} Sekunden!`);
        }
        document.getElementById('time-display').textContent = elapsedSeconds;
    }, 1000); // Timer zählt jede Sekunde
}

// Timer stoppen und Liegestütze eingeben
function stopStopwatch() {
    clearInterval(timer);
    const pushupsDone = prompt("Wie viele Liegestütze hast du geschafft?");
    updatePushupCount(pushupsDone);
    elapsedSeconds = 0; // Timer zurücksetzen
    document.getElementById('time-display').textContent = elapsedSeconds;

    // Beast Mode ausschalten
    document.getElementById('beast-mode-display').classList.add('hidden');
}

// Fortschrittsbalken aktualisieren
function updateProgressBar() {
    const totalPushups = parseInt(localStorage.getItem('totalPushups')) || 0;
    const percentage = (totalPushups / 100000) * 100;
    document.getElementById('progress-bar').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = `${percentage.toFixed(2)}% der 100.000 Liegestütze geschafft`;
}

// Gesamtanzahl der Liegestütze speichern und aktualisieren
function updatePushupCount(pushups) {
    let totalPushups = parseInt(localStorage.getItem('totalPushups')) || 0;
    totalPushups += parseInt(pushups);
    localStorage.setItem('totalPushups', totalPushups);
    document.getElementById('total-pushups').textContent = totalPushups;

    // Fortschrittsbalken aktualisieren
    updateProgressBar();
}

// Beim Laden der Seite die bisherige Gesamtzahl laden und Fortschritt anzeigen
document.addEventListener('DOMContentLoaded', () => {
    let totalPushups = parseInt(localStorage.getItem('totalPushups')) || 0;
    document.getElementById('total-pushups').textContent = totalPushups;

    // Fortschrittsbalken beim Laden aktualisieren
    updateProgressBar();
});
