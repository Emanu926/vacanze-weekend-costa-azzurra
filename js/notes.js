function initNotes() {
    renderNotes();
    const input = document.getElementById('notes-input');
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addNote();
        }
    });
}

function addNote() {
    const input = document.getElementById('notes-input');
    const text = input.value.trim();
    if (!text) return;
    const notes = _getNotes();
    notes.unshift({ text, ts: Date.now() });
    _saveNotes(notes);
    input.value = '';
    renderNotes();
}

function deleteNote(i) {
    if (!confirm('Eliminare questa nota?')) return;
    const notes = _getNotes();
    notes.splice(i, 1);
    _saveNotes(notes);
    renderNotes();
}

function _getNotes() {
    try { return JSON.parse(localStorage.getItem('wk-vacation-notes') || '[]'); }
    catch { return []; }
}

function _saveNotes(notes) {
    localStorage.setItem('wk-vacation-notes', JSON.stringify(notes));
}

function renderNotes() {
    const list = document.getElementById('notes-list');
    const notes = _getNotes();
    if (!notes.length) { list.innerHTML = ''; return; }
    list.innerHTML = notes.map((n, i) => {
        const d = new Date(n.ts);
        const date = d.toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' });
        const time = d.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
        const safe = n.text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
        return `<div class="note-item">
            <div class="note-body">
                <div class="note-meta">${date} · ${time}</div>
                <div class="note-text">${safe}</div>
            </div>
            <button class="note-delete-btn" onclick="deleteNote(${i})" aria-label="Elimina nota">✕</button>
        </div>`;
    }).join('');
}
