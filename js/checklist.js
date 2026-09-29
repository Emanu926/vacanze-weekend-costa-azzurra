// ===== CHECKLIST PRE-PARTENZA =====
// Lista completa presa dall'app Corsica (29/09/2026): voci base + tutte le aggiunte fatte dal telefono.

const CHECKLIST_DATA = [
    {
        id: 'casa', icon: '🏠', label: 'Casa (prima di uscire)',
        items: [
            { id: 'alexa',      text: 'Modificare impostazioni Alexa' },
            { id: 'pacchi_alexa', text: 'Pacchi Alexa da dire a Emma' },
            { id: 'tv',         text: 'Sistemare cablaggi TV / proiettore' },
            { id: 'istruzioni', text: 'Istruzioni per chi resta a casa' },
            { id: 'rubinetto',  text: 'Chiudere rubinetto acqua' },
            { id: 'spegni_frigo', text: 'Spegnere frigo' },
            { id: 'verifica_frigo', text: 'Verificare frigorifero contenuto' },
            { id: 'deumidificatore', text: 'Gestione deumidificatore' },
            { id: 'lavastoviglie', text: 'Fare lavastoviglie stasera' },
            { id: 'immondizia', text: 'Sistemare immondizia, azzerare e svuotare, mettere nei bidoni' },
            { id: 'canna_acqua', text: "Sistemare canna dell'acqua e sistemare idropulitrice" },
            { id: 'prese_giardino', text: 'Togliere le prese dalle luci del giardino' },
            { id: 'libri_fuori', text: 'Libri porta fuori' },
            { id: 'telecomandi_antifurto', text: 'Batteria telecomandi antifurto' },
            { id: 'meteo_domus', text: 'Sistemare programma Meteo domus' },
            { id: 'audio_firestick', text: 'Ripristinare audio dolby plus fire stick' },
        ]
    },
    {
        id: 'gatti', icon: '🐈', label: 'Gatti',
        items: [
            { id: 'cibo_gatti',    text: 'Sistemare cibo, acqua e sabbia gatti' },
            { id: 'unghie_gatti',  text: 'Tagliare le unghie ai gatti' },
            { id: 'sacco_gatti',   text: 'Sacco dei gatti' },
            { id: 'sacchetti_gatti', text: 'Sacchetti cacca gatti' },
            { id: 'sacco_randagi', text: 'Sacco per gatti randagi' },
        ]
    },
    {
        id: 'auto', icon: '🚙', label: 'Auto e viaggio',
        items: [
            { id: 'adblue',     text: 'Verifica AdBlue' },
            { id: 'gomme',      text: 'Pressione gomme' },
            { id: 'olio',       text: 'Livello olio motore' },
            { id: 'acqua_viaggio', text: 'Acqua per viaggio' },
            { id: 'borsa_viaggio', text: 'Borsa per viaggio' },
            { id: 'cambio_traghetto', text: 'Cambio per traghetto' },
            { id: 'powerbank',  text: 'Tenere fuori Power bank e un cavo' },
            { id: 'sigarette',  text: 'Sigarette' },
        ]
    },
    {
        id: 'documenti', icon: '📄', label: 'Documenti e soldi',
        items: [
            { id: 'passaporto_bibiche', text: 'Passaporto Bibi' },
            { id: 'soldi',             text: 'Ritirare contanti' },
            { id: 'documenti_auto',    text: 'Documenti auto (libretto, assicurazione)' },
            { id: 'ricette',           text: 'Ritirare ricette Emanuele' },
            { id: 'acconto_emma',      text: '150 € per Emma di acconto' },
            { id: 'regalo',            text: 'Regalo per François/Sylvienne' },
        ]
    },
    {
        id: 'cibo', icon: '🥗', label: 'Cibo',
        items: [
            { id: 'cibo_48h',   text: 'Cibo per le prime 48 ore' },
            { id: 'ghiaccini',  text: 'Ghiaccini' },
            { id: 'scottex',    text: 'Scottex e carta igienica' },
        ]
    },
    {
        id: 'bibiche', icon: '🐾', label: 'Bibi',
        items: [
            { id: 'cibo_cane',      text: 'Cibo per il cane' },
            { id: 'medicine_cane',  text: 'Medicine cane' },
            { id: 'guinzaglio',     text: 'Guinzagli e collari' },
            { id: 'tappetino',      text: 'Tappetino' },
            { id: 'ciotole',        text: 'Ciotole' },
            { id: 'cacca_cane',     text: 'Raccogliere cacca cane' },
            { id: 'roba_spiaggia',  text: 'Roba per spiaggia e piscina' },
        ]
    },
    {
        id: 'spiaggia', icon: '🏊', label: 'Spiaggia e Piscina',
        items: [
            { id: 'costumi',        text: 'Costumi da bagno' },
            { id: 'asciugamani',    text: 'Asciugamani' },
            { id: 'ciambelloni',    text: 'Ciambelloni per la piscina' },
            { id: 'pompa',          text: 'Pompa ciambelloni' },
            { id: 'tennis',         text: 'Giochino del tennis' },
            { id: 'surf',           text: 'Surf' },
            { id: 'sedia',          text: 'Sedia da spiaggia' },
        ]
    },
    {
        id: 'vestiti', icon: '👕', label: 'Vestiti',
        items: [
            { id: 'magliette',      text: 'Magliette' },
            { id: 'pantaloni',      text: 'Pantaloni / shorts' },
            { id: 'scarpe',         text: 'Scarpe / ciabatte' },
            { id: 'occhiali',       text: 'Occhiali da sole e da vista' },
        ]
    },
    {
        id: 'svago', icon: '📚', label: 'Libri e Svago',
        items: [
            { id: 'libri',          text: 'Libri' },
            { id: 'libro_corrente', text: 'Libro che sto leggendo' },
            { id: 'carte',          text: 'Carte da gioco' },
            { id: 'giochi',         text: 'Giochi da tavolo' },
        ]
    },
    {
        id: 'tech', icon: '🔌', label: 'Tecnologia',
        items: [
            { id: 'cavi_usb',       text: 'Cavi USB e cavetteria' },
            { id: 'caricatori',     text: 'Caricatori telefono / iPad' },
            { id: 'ipad',           text: 'iPad' },
            { id: 'pc',             text: 'Pc portatile' },
            { id: 'firestick',      text: 'Fire stick' },
            { id: 'telecomando_fs', text: 'Telecomando fire stick' },
            { id: 'stand_tel',      text: 'Stand telefono' },
            { id: 'raffreddatore',  text: 'Raffreddatore telefono' },
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
            { id: 'macchina_foto',  text: 'Macchina fotografica' },
            { id: 'obiettivi',      text: 'Obiettivi' },
            { id: 'treppiede',      text: 'Treppiede' },
            { id: 'binocolo',       text: 'Binocolo' },
            { id: 'batterie_foto',  text: 'Batterie e caricatore fotocamera' },
            { id: 'polaroid',       text: 'Polaroid' },
        ]
    },
    {
        id: 'medicine', icon: '💊', label: 'Medicine',
        items: [
            { id: 'farmaci_abituali', text: 'Farmaci abituali' },
            { id: 'blister',          text: 'Blister' },
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
// Testi modificati delle voci predefinite: { id: 'nuovo testo' }
function loadEdits() {
    try { return JSON.parse(localStorage.getItem('wk-checklist_edits') || '{}'); } catch { return {}; }
}
function saveEdits(edits) {
    localStorage.setItem('wk-checklist_edits', JSON.stringify(edits));
}
function visibleData() {
    const hidden = loadHidden();
    const edits  = loadEdits();
    const custom = loadCustomItems();
    return CHECKLIST_DATA
        .map(c => ({ ...c, items: [
            ...c.items.filter(i => !hidden.includes(i.id))
                      .map(i => ({ ...i, text: edits[i.id] || i.text })),
            ...custom.filter(i => i.cat === c.id).map(i => ({ ...i, custom: true })),
        ] }));
}
function editDefaultItem(id) {
    const edits = loadEdits();
    let current = edits[id];
    if (!current) CHECKLIST_DATA.forEach(c => c.items.forEach(i => { if (i.id === id) current = i.text; }));
    const newText = prompt('Modifica voce:', current || '');
    if (newText === null || !newText.trim()) return;
    edits[id] = newText.trim();
    saveEdits(edits);
    renderChecklist();
}
function addItemToCategory(catId) {
    const input = document.getElementById('cl-new-' + catId);
    if (!input || !input.value.trim()) return;
    const items = loadCustomItems();
    items.push({ id: 'custom_' + Date.now(), text: input.value.trim(), cat: catId });
    saveCustomItems(items);
    renderChecklist();
    updateChecklistWidget();
    const el = document.getElementById('cl-new-' + catId);
    if (el) el.focus();
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
    const customItems = loadCustomItems().filter(i => !i.cat);
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
        const allDone  = catTotal > 0 && catDone === catTotal;

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
                    <button class="cl-edit-btn" onclick="${item.custom ? 'editCustomItem' : 'editDefaultItem'}('${item.id}')">✏️</button>
                    <button class="cl-delete-btn" onclick="${item.custom ? 'deleteCustomItem' : 'hideDefaultItem'}('${item.id}')">×</button>
                </div>
            `;
        });

        html += `
                <div class="cl-add-row">
                    <input type="text" id="cl-new-${cat.id}" placeholder="Aggiungi a ${cat.label}…"
                           onkeydown="if(event.key==='Enter'){addItemToCategory('${cat.id}');event.preventDefault()}" />
                    <button class="cl-add-btn" onclick="addItemToCategory('${cat.id}')">+</button>
                </div>
            </div></div>`;
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
    const customItems = loadCustomItems().filter(i => !i.cat);
    const total = visibleData().reduce((n, c) => n + c.items.length, 0) + customItems.length;
    const done  = Object.values(checked).filter(Boolean).length;
    const pct   = total > 0 ? Math.round(done / total * 100) : 0;
    el.textContent = pct + '%';
    el.style.color = pct === 100 ? '#22C55E' : pct > 50 ? '#EAB308' : 'inherit';
}
