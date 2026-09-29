// ===== STATO =====
const state = {
    section: 'home',
    departure: new Date('2026-10-02T08:00:00')
};

// ===== AVVIO =====
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    updateCountdown();
    setInterval(updateCountdown, 60000);

    fetchWeather();
    fetchFuelPrices();
    initChecklist();
    initZona();
    renderInfo();
    initContatti();
    initNotes();
    initSpese();
    initListaSpesa();
    initSpiagge();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' });
    }
});

// ===== NAVIGAZIONE =====
function initNav() {}

function goTo(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('section-' + id).classList.add('active');
    state.section = id;
}

// ===== CONTATTI EDITABILI =====
function initContatti() {
    document.querySelectorAll('.contatto-edit').forEach(el => {
        const key = el.dataset.key;
        const saved = localStorage.getItem('wk-' + key);
        if (saved) el.textContent = saved;
        el.addEventListener('blur', () => {
            localStorage.setItem('wk-' + key, el.textContent.trim());
        });
    });
}

// ===== COUNTDOWN =====
function updateCountdown() {
    const el = document.getElementById('countdown-value');
    const sub = document.getElementById('countdown-sub');
    if (!el) return;

    const diff = state.departure - new Date();
    if (diff <= 0) {
        el.textContent = '🌊';
        if (sub) sub.textContent = 'Buone vacanze!';
        return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);

    if (days === 0) {
        el.textContent = hours + 'h';
        if (sub) sub.textContent = 'si parte oggi!';
    } else {
        el.textContent = days;
        if (sub) sub.textContent = days === 1 ? 'giorno alla partenza' : 'giorni alla partenza';
    }
}
