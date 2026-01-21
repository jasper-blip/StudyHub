const data = {
    logs: [
        {
            "source": "Seneca",
            "topic": "Blood types",
            "question": "Karl Landsteiner discovery",
            "answer": "O"
        },
        {
            "source": "Seneca",
            "topic": "Cancer therapy",
            "question": "Start year",
            "answer": "1901"
        },
        {
            "source": "Seneca",
            "topic": "Disease",
            "question": "From flooded trenches",
            "answer": "Trench foot"
        },
        {
            "source": "Seneca",
            "topic": "Gas Weapons",
            "question": "4 main types",
            "answer": "Chlorine, Phosgene"
        },
        {
            "source": "Seneca",
            "topic": "Splint Type",
            "question": "Leg fracture reduction",
            "answer": "Thomas splint"
        },
        {
            "source": "Seneca",
            "topic": "First Blood Bank",
            "question": "Battle of Cambrai",
            "answer": "1917"
        },
        {
            "source": "Seneca",
            "topic": "Decoy Gas",
            "question": "Non-weaponized",
            "answer": "Pickle gas"
        },
        {
            "source": "Seneca",
            "topic": "Fracture Localization",
            "question": "Tool used",
            "answer": "X-ray"
        },
        {
            "source": "Seneca",
            "topic": "Trench Construction",
            "question": "3 methods",
            "answer": "Entrenching, Sapping, Tunnelling"
        },
        {
            "source": "Seneca",
            "topic": "Medical Corps",
            "question": "RAMC",
            "answer": "Royal Army Medical Corps"
        },
        {
            "source": "Seneca",
            "topic": "FANY Role",
            "question": "Primary work",
            "answer": "Field ambulance drivers"
        },
        {
            "source": "Seneca",
            "topic": "Plastic Surgery",
            "question": "Inventor/Pioneer",
            "answer": "Harold Gillies"
        },
        {
            "source": "Seneca",
            "topic": "Mobile X-ray",
            "question": "Inventor",
            "answer": "Marie Curie"
        },
        {
            "source": "Seneca",
            "topic": "Gas Ban",
            "question": "Year",
            "answer": "1925 (Geneva Protocol)"
        },
        {
            "source": "Seneca",
            "topic": "Underground Hospital",
            "question": "Location",
            "answer": "Arras"
        },
        {
            "source": "Seneca",
            "topic": "Blood Clotting",
            "question": "Chemical inhibitor",
            "answer": "Sodium citrate (Discovery: Albert Hustin)"
        },
        {
            "source": "Seneca",
            "topic": "Blood Banks",
            "question": "Countries",
            "answer": "Britain/USA"
        },
        {
            "source": "Seneca",
            "topic": "Shell Shock",
            "question": "Nature of illness",
            "answer": "Mental/Psychological"
        },
        {
            "source": "Seneca",
            "topic": "Infection Acid",
            "question": "Bandage treatment",
            "answer": "Carbolic acid"
        },
        {
            "source": "Seneca",
            "topic": "German Retreat",
            "question": "Line name",
            "answer": "Hindenburg Line"
        },
        {
            "source": "Seneca",
            "topic": "Western Front",
            "question": "Location",
            "answer": "France/Belgium"
        },
        {
            "source": "Seneca",
            "topic": "Trench Depth",
            "question": "Ideal range",
            "answer": "6-7 feet"
        },
        {
            "source": "Seneca",
            "topic": "Evacuation Goal",
            "question": "Move casualties to",
            "answer": "Safe areas"
        },
        {
            "source": "Sparx Science",
            "topic": "Stomach Acid",
            "question": "What type of acid is produced by the stomach to kill pathogens?",
            "answer": "hydrochloric acid"
        },
        {
            "source": "Sparx Science",
            "topic": "Pathogen Defense",
            "question": "Which cells help to defend the body against pathogens?",
            "answer": "white blood cells"
        },
        {
            "source": "Sparx Science",
            "topic": "Pathogen Diseases",
            "question": "What word is used to describe diseases that are caused by pathogens?",
            "answer": "communicable"
        },
        {
            "source": "Sparx Science",
            "topic": "Pathogen Defense (Organ)",
            "question": "Which organ in the digestive system produces acid to kill pathogens?",
            "answer": "stomach"
        },
        {
            "source": "Sparx Science",
            "topic": "Mass Change Reactions",
            "question": "Negative percentage change in mass.",
            "answer": "Reaction B, Reaction C"
        },
        {
            "source": "Sparx Science",
            "topic": "Mean Mass Calculation",
            "question": "Calculate Test 2 mass (Mean=14, T1=12, T3=18, T4=11).",
            "answer": "15"
        },
        {
            "source": "Sparx Science",
            "topic": "Rounding",
            "question": "Round 63.571... to the nearest beat per minute.",
            "answer": "64"
        },
        {
            "source": "Sparx Maths",
            "topic": "Probability Ordering",
            "question": "Order probabilities (0.47, 2/5, 24%, 3/10) from least to most likely",
            "answer": "Pole vault, Discus, 200m, Long jump"
        }
    ],
    notes: [
        { topic: 'The Western Front', content: 'Major theatre of war in Belgium and France (1914-1918). Key sites include the Somme and No Man\'s Land where static warfare was dominant.', sub: 'History' },
        { topic: 'Medicine in WW1', content: 'Advancements included the Thomas Splint (reduced deaths by 60%), mobile X-rays (Marie Curie), and pioneered plastic surgery by Harold Gillies.', sub: 'Medicine' },
        { topic: 'Trench Conditions', content: 'Soldiers faced Trench Foot, lice, and typhus. Muddy environments made infection control difficult; Carbolic acid was the primary antiseptic.', sub: 'Medicine' },
        { topic: 'Gas Warfare', content: 'Use of Chlorine, Phosgene, and Mustard gas caused horrific injuries. Eventually banned by the 1925 Geneva Protocol.', sub: 'Warfare' },
        { topic: 'Evacuation Chain', content: 'Order: RAP (Aid Post) -> Dressing Station -> CCS (Casualty Clearing) -> Base Hospital. CCS was critical for immediate surgery.', sub: 'History' },
        { topic: 'Trench Construction', content: 'Three main methods: Sapping (digging ends), Tunnelling (underground), and Entrenching (from surface). Depth: 6-7 feet.', sub: 'History' },
        { topic: 'Medical Breakthroughs', content: 'Karl Landsteiner discovered blood types. Sodium citrate used for storage. First blood bank: Battle of Cambrai (1917).', sub: 'Medicine' },
        { topic: 'Public Health Evolution', content: 'Policy shifted from "laissez-faire" to the proactive welfare state. Smallpox vaccination became compulsory in England by 1853.', sub: 'Society' },
        { topic: 'Science vs Church', content: 'Church forbidden dissection hindered progress. Black Death was wrongly blamed on God\'s wrath or astrology during the 14th century.', sub: 'Science' },
        { topic: 'Medical Evolution', content: 'Printing press (1440) accelerated knowledge spread. Abulcasis popularised cauterisation and designed many surgical tools.', sub: 'Science' },
        { topic: 'Modern Medicine', content: 'NHS established in 1948 by Aneurin Bevan to provide free healthcare at point of use despite early opposition from doctors.', sub: 'Society' },
        { topic: 'Shell Shock', content: 'Initially thought to be a physical injury from explosions; later correctly identified as psychological trauma (PTSD).', sub: 'Psychology' }
    ]
};

const state = {
    currentView: 'dashboard',
    searchTerm: '',
    mastery: 84,
    activeSubject: 'All',
    autoMode: false,
    lastClipboard: ''
};

const views = {
    dashboard: () => {
        const stats = [
            { label: 'Total Logs', value: data.logs.length, icon: 'database', trend: '+12%' },
            { label: 'High-Level Notes', value: data.notes.length, icon: 'file-text', trend: 'Updated' },
            { label: 'Study Mastery', value: `${state.mastery}%`, icon: 'graduation-cap', trend: '+5%' }
        ];

        return `
            <div class="stats-grid">
                ${stats.map(stat => `
                    <div class="stat-card">
                        <div class="stat-info">
                            <div class="stat-label">${stat.label}</div>
                            <div class="stat-value">${stat.value}</div>
                        </div>
                        <div class="stat-icon-wrapper">
                            <i data-lucide="${stat.icon}"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin-top: 1rem;">
                <div class="note-card" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(2, 6, 23, 0.8) 100%); border: 2px solid var(--primary); box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);">
                    <div class="note-tag" style="background: var(--primary); color: #fff; font-size: 0.8rem;">ULTRA FEATURE</div>
                    <div class="note-title" style="font-size: 2rem; color: var(--primary-light);">Auto-Complete is READY</div>
                    <div class="note-body" style="font-size: 1.2rem;">
                        Click below to enable <strong>Stealth Auto-Mode</strong>. Just copy a Sparx code and the answer will be instantly copied back to you.
                    </div>
                    <button onclick="toggleAutoMode()" class="copy-pill" style="margin-top: 1.5rem; width: 100%; justify-content: center; padding: 1.5rem; font-size: 1.1rem; border-radius: 20px; ${state.autoMode ? 'background: var(--accent); color: #000;' : 'background: var(--primary); color: #fff;'}" id="auto-mode-main-btn">
                        <i data-lucide="${state.autoMode ? 'zap' : 'zap'}"></i>
                        <span>${state.autoMode ? 'AUTO-MODE IS ACTIVE' : 'ENABLE AUTO-COMPLETE MODE'}</span>
                    </button>
                    ${state.autoMode ? '<div class="pulse-ring"></div>' : ''}
                </div>
                
                <div class="note-card" style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(2, 6, 23, 0.6) 100%);">
                    <div class="note-tag">Status</div>
                    <div class="note-title">Zero-Input Ready</div>
                    <div class="note-body" style="font-size: 0.9rem; color: var(--text-muted);">
                        Connected to <code>bookwork_log.txt</code>. Dashboard fully synchronized with master log.
                    </div>
                </div>
            </div>

            <h2 style="margin: 4rem 0 2rem; font-size: 2rem; font-weight: 800; letter-spacing: -0.04em;">Recent Activity</h2>
            <div class="content-grid">
                <div class="note-card">
                    <div class="note-tag">New Entry</div>
                    <div class="note-title">Battle of the Somme</div>
                    <div class="note-body">Tactical analysis and medical evacuations added to the log.</div>
                </div>
                <div class="note-card">
                    <div class="note-tag">Update</div>
                    <div class="note-title">Gas Protections</div>
                    <div class="note-body">Chemical properties of Phosgene and modern detection methods.</div>
                </div>
            </div>
        `;
    },
    notes: (subject = 'All') => {
        const subjects = ['All', ...new Set(data.notes.map(n => n.sub))];
        const filtered = subject === 'All'
            ? data.notes
            : data.notes.filter(n => n.sub === subject);

        return `
            <div class="subject-filter-bar animate-slide-up" style="display: flex; gap: 1rem; margin-bottom: 2.5rem; overflow-x: auto; padding: 0.5rem 0;">
                ${subjects.map(s => `
                    <div class="subject-pill ${state.activeSubject === s ? 'active' : ''}" 
                         onclick="filterNotesBySubject('${s}')"
                         style="padding: 0.75rem 1.5rem; border-radius: 100px; background: ${state.activeSubject === s ? 'var(--primary)' : 'rgba(255,255,255,0.05)'}; 
                                 color: ${state.activeSubject === s ? '#fff' : 'var(--text-muted)'}; cursor: pointer; font-weight: 700; white-space: nowrap; 
                                 border: 1px solid ${state.activeSubject === s ? 'var(--primary-light)' : 'var(--glass-border)'}; transition: all 0.3s;">
                        ${s}
                    </div>
                `).join('')}
            </div>
            <div class="content-grid">
                ${filtered.map(note => `
                    <div class="note-card animate-slide-up">
                        <div class="note-tag">${note.sub}</div>
                        <div class="note-title">${note.topic}</div>
                        <div class="note-body">${note.content}</div>
                    </div>
                `).join('')}
            </div>
        `;
    },
    logs: (filter = '') => {
        const filtered = data.logs.filter(log =>
            log.topic.toLowerCase().includes(filter.toLowerCase()) ||
            log.question.toLowerCase().includes(filter.toLowerCase()) ||
            log.answer.toLowerCase().includes(filter.toLowerCase()) ||
            log.source.toLowerCase().includes(filter.toLowerCase())
        );

        return `
            <div style="margin-bottom: 2rem; color: var(--text-muted); font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="filter" style="width: 16px;"></i>
                Found ${filtered.length} entries matching "${filter || 'everything'}"
            </div>
            <div class="table-wrapper animate-slide-up">
                <table class="premium-table">
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Topic & Context</th>
                            <th>Target Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.length > 0 ? filtered.map(log => `
                            <tr>
                                <td style="width: 180px;">
                                    <span class="source-badge source-${log.source.toLowerCase().split(' ')[0]}">${log.source}</span>
                                </td>
                                <td>
                                    <div style="font-weight: 800; color: #fff; margin-bottom: 0.25rem;">${log.topic}</div>
                                    <div style="font-size: 0.95rem; color: var(--text-muted);">${log.question}</div>
                                </td>
                                <td>
                                    <div style="color: var(--primary-light); font-weight: 800; font-size: 1.1rem; font-family: 'Outfit', sans-serif;">
                                        ${log.answer}
                                    </div>
                                </td>
                                <td style="width: 140px;">
                                    <button class="copy-pill" onclick="copyToClipboard('${log.answer.replace(/'/g, "\\'")}', this)">
                                        <i data-lucide="copy" style="width: 16px;"></i>
                                        <span>Copy</span>
                                    </button>
                                </td>
                            </tr>
                        `).join('') : `
                            <tr>
                                <td colspan="4" style="text-align: center; padding: 6rem; color: var(--text-dim);">
                                    <i data-lucide="search-x" style="width: 64px; height: 64px; margin-bottom: 1.5rem; opacity: 0.5;"></i>
                                    <p style="font-size: 1.25rem; font-weight: 600;">No matching entries in the database</p>
                                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try a different keyword or check your spelling.</p>
                                </td>
                            </tr>
                        `}
                    </tbody>
                </table>
            </div>
        `;
    }
};

function toggleAutoMode() {
    state.autoMode = !state.autoMode;
    if (state.autoMode) {
        showToast("Auto-Mode Enabled: Monitoring Clipboard...");
        startMonitor();
    } else {
        showToast("Auto-Mode Disabled");
    }
    render();
}

function startMonitor() {
    const check = async () => {
        if (!state.autoMode) return;
        try {
            if (document.hasFocus()) {
                const text = await navigator.clipboard.readText();
                if (text && text !== state.lastClipboard) {
                    state.lastClipboard = text;
                    const match = data.logs.find(l =>
                        text.toLowerCase().includes(l.topic.toLowerCase()) ||
                        text.toLowerCase().includes(l.question.toLowerCase())
                    );
                    if (match) {
                        navigator.clipboard.writeText(match.answer);
                        showToast(`Auto-Matched: ${match.answer}`);
                    }
                }
            }
        } catch (e) { }
        setTimeout(check, 1000);
    };
    check();
}

function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'animate-slide-up';
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-weight: 700;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    toast.innerHTML = `<i data-lucide="zap" style="width: 20px;"></i> <span>${message}</span>`;
    document.body.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check"></i><span>Copied</span>';
        btn.style.background = 'var(--accent)';
        btn.style.color = '#020617';
        btn.style.borderColor = 'var(--accent)';
        lucide.createIcons();

        showToast(`Answer copied to clipboard`);

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
            lucide.createIcons();
        }, 2000);
    });
}

function render() {
    const contentArea = document.getElementById('content-area');
    const viewTitle = document.getElementById('view-title');
    const viewSubtitle = document.getElementById('view-subtitle');
    const searchSection = document.getElementById('search-section');

    if (!contentArea) return;

    // Smooth transition
    contentArea.style.opacity = '0';
    contentArea.style.transform = 'translateY(10px)';

    setTimeout(() => {
        if (state.currentView === 'dashboard') {
            viewTitle.innerText = 'Overview';
            viewSubtitle.innerText = "Tracking your academic excellence.";
            searchSection.style.display = 'none';
            contentArea.innerHTML = views.dashboard();
        } else if (state.currentView === 'notes') {
            viewTitle.innerText = 'Revision Notes';
            viewSubtitle.innerText = 'Structured high-level knowledge for exam success.';
            searchSection.style.display = 'none';
            contentArea.innerHTML = views.notes(state.activeSubject);
        } else if (state.currentView === 'logs') {
            viewTitle.innerText = 'Bookwork Log';
            viewSubtitle.innerText = 'Instant lookup for Seneca & Sparx verify answers.';
            searchSection.style.display = 'block';
            contentArea.innerHTML = views.logs(state.searchTerm);
        }

        contentArea.style.opacity = '1';
        contentArea.style.transform = 'translateY(0)';
        lucide.createIcons();
    }, 100);
}

// Event Listeners
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
        state.currentView = item.dataset.view;
        state.searchTerm = '';
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';
        render();
    });
});

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value;
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = views.logs(state.searchTerm);
        lucide.createIcons();
    });
}

// Filter notes by subject
function filterNotesBySubject(subject) {
    state.activeSubject = subject;
    render();
}

// Initialize
render();
