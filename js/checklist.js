// ===== CHECKLIST PRE-PARTENZA =====

const CHECKLIST_DATA = [
    {
        id: 'casa', icon: '🏠', label: 'Casa',
        items: [
            { id: 'alexa',      text: 'Modificare impostazioni Alexa' },
            { id: 'tv',         text: 'Sistemare cablaggi TV / proiettore' },
            { id: 'istruzioni', text: 'Istruzioni per chi resta a casa' },
        ]
    },
    {
        id: 'auto', icon: '🚙', label: 'Auto',
        items: [
            { id: 'adblue',     text: 'Verifica AdBlue' },
            { id: 'gomme',      text: 'Pressione gomme' },
            { id: 'olio',       text: 'Livello olio motore' },
        ]
    },
    {
        id: 'documenti', icon: '📄', label: 'Documenti',
        items: [
            { id: 'passaporto_bibiche', text: 'Passaporto Bibi' },
            { id: 'soldi',             text: 'Ritirare contanti' },
            { id: 'documenti_auto',    text: 'Documenti auto (libretto, assicurazione)' },
        ]
    },
    {
        id: 'cibo', icon: '🥗', label: 'Cibo',
        items: [
            { id: 'cibo_48h',   text: 'Cibo per le prime 48 ore' },
        ]
    },
    {
        id: 'bibiche', icon: '🐾', label: 'Bibi',
        items: [
            { id: 'cibo_cane',      text: 'Cibo per il cane' },
            { id: 'guinzaglio',     text: 'Guinzagli e collari' },
            { id: 'tappetino',      text: 'Tappetino' },
            { id: 'ciotole',        text: 'Ciotole' },
            { id: 'roba_spiaggia',  text: 'Roba per spiaggia e piscina' },
        ]
    },
    {
        id: 'spiaggia', icon: '🏊', label: 'Spiaggia e Piscina',
        items: [
            { id: 'costumi',        text: 'Costumi da bagno' },
            { id: 'asciugamani',    text: 'Asciugamani' },
            { id: 'ciambelloni',    text: 'Ciambelloni per la piscina' },
            { id: 'tennis',         text: 'Giochino del tennis' },
        ]
    },
    {
        id: 'vestiti', icon: '👕', label: 'Vestiti',
        items: [
            { id: 'magliette',      text: 'Magliette' },
            { id: 'pantaloni',      text: 'Pantaloni / shorts' },
            { id: 'scarpe',         text: 'Scarpe / ciabatte' },
        ]
    },
    {
        id: 'svago', icon: '📚', label: 'Libri e Svago',
        items: [
            { id: 'libri',          text: 'Libri' },
            { id: 'carte',          text: 'Carte da gioco' },
            { id: 'giochi',         text: 'Giochi da tavolo' },
        ]
    },
    {
        id: 'tech', icon: '🔌', label: 'Tecnologia',
        items: [
            { id: 'cavi_usb',       text: 'Cavi USB e cavetteria' },
            { id: 'caricatori',     text: 'Caricatori telefono / iPad' },
        ]
    },
    {
        id: 'dj', icon: '🎵', label: 'DJ',
        items: [
            { id: 'console',        text: 'Console DJ' },
            { id: 'cassa',          text: 'Cassa' },
            { id: 'cavetteria_dj',  text: 'Tutta la cavetteria DJ' },
            { id: 'cuffie',         text: 'Cuffie' },
        ]
    },
    {
        id: 'foto', icon: '📷', label: 'Fotografia',
        items: [
            { id: 'obiettivi',      text: 'Obiettivi' },
            { id: 'treppiede',      text: 'Treppiede' },
            { id: 'binocolo',       text: 'Binocolo' },
            { id: 'batterie_foto',  text: 'Batterie e caricatore fotocamera' },
        ]
    },
    {
        id: 'medicine', icon: '💊', label: 'Medicine',
        items: [
            { id: 'farmaci_abituali', text: 'Farmaci abituali' },
            { id: 'antidolorifico',   text: 'Antidolorifico' },
            { id: 'antistaminico',    text: 'Antistaminico' },
            { id: 'protezione_solare',text: 'Protezione solare' },
        ]
    },
    {
        id: 'beauty', icon: '🧴', label: 'Beauty',
        items: [
            { id: 'beauty_vari',    text: 'Prodotti beauty / creme' },
            { id: 'rasoio',         text: 'Rasoio' },
            { id: 'profumo',        text: 'Profumo' },
        ]
    },
];

// ===== STATO =====
function loadChecked() {
    try { return JSON.parse(localStorage.getItem('wk-checklist') || '{}'); } catch { return {}; }
}
function saveChecked(checked) {
    localStorage.setItem('wk-checklist', JSON.stringify(checked));
}

function loadCustomItems() {
    try { return JSON.parse(localStorage.getItem('wk-checklist_custom') || '[]'); } catch { return []; }
}
function saveCustomItems(items) {
    localStorage.setItem('wk-checklist_custom', JSON.stringify(items));
}

// Voci predefinite tolte dall'utente (weekend: lista più corta)
function loadHidden() {
    try { return JSON.parse(localStorage.getItem('wk-checklist_hidden') || '[]'); } catch { return []; }
}
function saveHidden(ids) {
    localStorage.setItem('wk-checklist_hidden', JSON.stringify(ids));
}
function visibleData() {
    const hidden = loadHidden();
    return CHECKLIST_DATA
        .map(c => ({ ...c, items: c.items.filter(i => !hidden.includes(i.id)) }))
        .filter(c => c.items.length > 0);
}
function hideDefaultItem(id) {
    if (!confirm('Togliere questa voce dalla lista?')) return;
    const hidden = loadHidden();
    if (!hidden.includes(id)) hidden.push(id);
    saveHidden(hidden);
    const checked = loadChecked();
    delete checked[id];
    saveChecked(checked);
    renderChecklist();
    updateChecklistWidget();
}
function restoreHidden() {
    if (!confirm('Rimettere tutte le voci tolte?')) return;
    saveHidden([]);
    renderChecklist();
    updateChecklistWidget();
}

// ===== INIT =====
function initChecklist() {
    renderChecklist();
    updateChecklistWidget();
}

// ===== RENDER =====
function renderChecklist() {
    const container = document.getElementById('checklist-container');
    if (!container) return;

    const checked     = loadChecked();
    const customItems = loadCustomItems();
    const data  = visibleData();
    const total = data.reduce((n, c) => n + c.items.length, 0) + customItems.length;
    const done  = Object.values(checked).filter(Boolean).length;
    const pct   = total > 0 ? Math.round(done / total * 100) : 0;
    const nHidden = loadHidden().length;

    let html = `
        <div class="cl-header">
            <div class="cl-progress-bar">
                <div class="cl-progress-fill" style="width:${pct}%"></div>
            </div>
            <div class="cl-progress-label">${done} di ${total} · ${pct}%</div>
        </div>
        <div class="cl-reset-row">
            <button class="cl-reset-btn" onclick="resetChecklist()">🔄 Nuovo weekend — reset spunte</button>
            ${nHidden ? `<button class="cl-reset-btn" onclick="restoreHidden()">↩️ Rimetti ${nHidden} voci tolte</button>` : ''}
        </div>
    `;

    data.forEach(cat => {
        const catDone  = cat.items.filter(i => checked[i.id]).length;
        const catTotal = cat.items.length;
        const allDone  = catDone === catTotal;

        html += `
            <div class="cl-category ${allDone ? 'all-done' : ''}">
                <div class="cl-cat-header" onclick="toggleCategory('${cat.id}')">
                    <span class="cl-cat-icon">${cat.icon}</span>
                    <span class="cl-cat-label">${cat.label}</span>
                    <span class="cl-cat-count">${catDone}/${catTotal}</span>
                    <span class="cl-cat-arrow" id="arrow-${cat.id}">▾</span>
                </div>
                <div class="cl-items" id="items-${cat.id}">
        `;

        cat.items.forEach(item => {
            const isChecked = !!checked[item.id];
            html += `
                <div class="cl-custom-row">
                    <label class="cl-item ${isChecked ? 'checked' : ''}" onclick="toggleItem('${item.id}')">
                        <span class="cl-checkbox">${isChecked ? '✅' : '⬜'}</span>
                        <span class="cl-item-text">${item.text}</span>
                    </label>
                    <button class="cl-delete-btn" onclick="hideDefaultItem('${item.id}')">×</button>
                </div>
            `;
        });

        html += `</div></div>`;
    });

    // --- SEZIONE AGGIUNTE ---
    const customDone   = customItems.filter(i => !!checked[i.id]).length;
    const allCustomDone = customItems.length > 0 && customDone === customItems.length;

    html += `
        <div class="cl-category ${allCustomDone ? 'all-done' : ''}">
            <div class="cl-cat-header" onclick="toggleCategory('custom')">
                <span class="cl-cat-icon">➕</span>
                <span class="cl-cat-label">Aggiunte</span>
                <span class="cl-cat-count">${customDone}/${customItems.length}</span>
                <span class="cl-cat-arrow" id="arrow-custom">▾</span>
            </div>
            <div class="cl-items" id="items-custom">
    `;

    customItems.forEach(item => {
        const isChecked = !!checked[item.id];
        html += `
            <div class="cl-custom-row">
                <label class="cl-item ${isChecked ? 'checked' : ''}" onclick="toggleItem('${item.id}')">
                    <span class="cl-checkbox">${isChecked ? '✅' : '⬜'}</span>
                    <span class="cl-item-text">${item.text}</span>
                </label>
                <button class="cl-edit-btn" onclick="editCustomItem('${item.id}')">✏️</button>
                <button class="cl-delete-btn" onclick="deleteCustomItem('${item.id}')">×</button>
            </div>
        `;
    });

    html += `
                <div class="cl-add-row">
                    <input type="text" id="cl-new-item" placeholder="Aggiungi voce…"
                           onkeydown="if(event.key==='Enter'){addCustomItem();event.preventDefault()}" />
                    <button class="cl-add-btn" onclick="addCustomItem()">+</button>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// ===== TOGGLE ITEM =====
function toggleItem(id) {
    const checked = loadChecked();
    checked[id] = !checked[id];
    saveChecked(checked);
    renderChecklist();
    updateChecklistWidget();
}

// ===== TOGGLE CATEGORIA =====
function toggleCategory(id) {
    const el    = document.getElementById('items-' + id);
    const arrow = document.getElementById('arrow-' + id);
    if (!el) return;
    const hidden = el.style.display === 'none';
    el.style.display  = hidden ? 'block' : 'none';
    arrow.textContent = hidden ? '▾' : '▸';
}

// ===== CUSTOM ITEMS =====
function addCustomItem() {
    const input = document.getElementById('cl-new-item');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    const items = loadCustomItems();
    items.push({ id: 'custom_' + Date.now(), text });
    saveCustomItems(items);
    renderChecklist();
    updateChecklistWidget();
    // riapre la sezione aggiunte e rimette focus sull'input
    const newInput = document.getElementById('cl-new-item');
    if (newInput) newInput.focus();
}

function editCustomItem(id) {
    const items = loadCustomItems();
    const item  = items.find(i => i.id === id);
    if (!item) return;
    const newText = prompt('Modifica voce:', item.text);
    if (newText === null) return;
    const trimmed = newText.trim();
    if (!trimmed) return;
    item.text = trimmed;
    saveCustomItems(items);
    renderChecklist();
}

function deleteCustomItem(id) {
    const items = loadCustomItems().filter(i => i.id !== id);
    saveCustomItems(items);
    const checked = loadChecked();
    delete checked[id];
    saveChecked(checked);
    renderChecklist();
    updateChecklistWidget();
}

// ===== RESET =====
function resetChecklist() {
    if (!confirm('Sei sicuro di voler resettare tutta la checklist?')) return;
    saveChecked({});
    renderChecklist();
    updateChecklistWidget();
}

// ===== WIDGET DASHBOARD =====
function updateChecklistWidget() {
    const el = document.getElementById('checklist-pct');
    if (!el) return;
    const checked     = loadChecked();
    const customItems = loadCustomItems();
    const total = visibleData().reduce((n, c) => n + c.items.length, 0) + customItems.length;
    const done  = Object.values(checked).filter(Boolean).length;
    const pct   = total > 0 ? Math.round(done / total * 100) : 0;
    el.textContent = pct + '%';
    el.style.color = pct === 100 ? '#22C55E' : pct > 50 ? '#EAB308' : 'inherit';
}
