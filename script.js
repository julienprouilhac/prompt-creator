// Dictionnaire de traductions
const translations = {
    fr: {
        title: "Générateur de Prompt Structuré",
        languageLabel: "Langue:",
        roleTitle: "1. Rôle",
        contexteTitle: "2. Contexte",
        objectifTitle: "3. Objectif",
        detailsTitle: "Détails supplémentaires (optionnel)",
        tachesTitle: "4. Tâches",
        customTachesTitle: "Tâches personnalisées (optionnel)",
        precisionsTitle: "5. Précisions (ton, style écrit de la réponse)",
        livrableTitle: "6. Livrable",
        formatTitle: "7. Format",
        resultTitle: "Prompt généré",
        generateBtn: "Générer le prompt",
        copyBtn: "Copier",
        roleOptions: {
            "": "-- Sélectionner un rôle --",
            "chef(fe) de projet": "chef(fe) de projet",
            "conseiller opérationnel et technique": "conseiller opérationnel et technique",
            "acheteur": "acheteur",
            "PMO": "PMO",
            "responsable marketing": "responsable marketing",
            "DRH": "DRH",
            "juriste": "juriste",
            "expert en": "expert en"
        },
        contexteOptions: {
            "": "-- Sélectionner un contexte --",
            "réunion": "réunion",
            "sourcing": "sourcing",
            "étude technique": "étude technique",
            "atelier": "atelier",
            "étude de cas": "étude de cas",
            "veille juridique": "veille juridique",
            "scénario": "scénario",
            "autre": "autre"
        },
        objectifOptions: {
            "": "-- Sélectionner un objectif --",
            "rechercher": "rechercher",
            "créer": "créer",
            "clarifier": "clarifier",
            "résumer": "résumer",
            "organiser": "organiser",
            "lister": "lister",
            "former": "former",
            "élaborer": "élaborer",
            "évaluer les avantages et les inconvénients": "évaluer les avantages et les inconvénients",
            "autre": "autre"
        },
        tachesOptions: {
            "": "-- Sélectionner des tâches --",
            "expliquer": "expliquer",
            "résumer": "résumer",
            "écrire": "écrire",
            "améliorer": "améliorer",
            "trouver": "trouver",
            "lister": "lister",
            "faire un tableau": "faire un tableau",
            "traduire": "traduire",
            "analyser": "analyser"
        },
        precisionsOptions: {
            "": "-- Sélectionner des précisions --",
            "créatif": "créatif",
            "conventionnel": "conventionnel",
            "professionnel": "professionnel",
            "informel": "informel",
            "expert": "expert",
            "cordial": "cordial",
            "neutre": "neutre",
            "grand public": "grand public"
        },
        livrableOptions: {
            "": "-- Sélectionner un livrable --",
            "tableau": "tableau",
            "liste": "liste",
            "mindmap": "mindmap",
            "rapport technique": "rapport technique",
            "mail": "mail",
            "discours": "discours",
            "post": "post",
            "processus": "processus",
            "interview": "interview"
        },
        formatOptions: {
            "": "-- Sélectionner un format --",
            "powerpoint": "powerpoint",
            "word": "word",
            "excel": "excel",
            "texte": "texte",
            "onenote": "onenote",
            "page html": "page html"
        }
    },
    en: {
        title: "Structured Prompt Generator",
        languageLabel: "Language:",
        roleTitle: "1. Role",
        contexteTitle: "2. Context",
        objectifTitle: "3. Objective",
        detailsTitle: "Additional details (optional)",
        tachesTitle: "4. Tasks",
        customTachesTitle: "Custom tasks (optional)",
        precisionsTitle: "5. Precisions (tone, writing style of the response)",
        livrableTitle: "6. Deliverable",
        formatTitle: "7. Format",
        resultTitle: "Generated Prompt",
        generateBtn: "Generate Prompt",
        copyBtn: "Copy",
        roleOptions: {
            "": "-- Select a role --",
            "chef(fe) de projet": "project manager",
            "conseiller opérationnel et technique": "operational and technical advisor",
            "acheteur": "buyer",
            "PMO": "PMO",
            "responsable marketing": "marketing manager",
            "DRH": "HR manager",
            "juriste": "legal expert",
            "expert en": "expert in"
        },
        contexteOptions: {
            "": "-- Select a context --",
            "réunion": "meeting",
            "sourcing": "sourcing",
            "étude technique": "technical study",
            "atelier": "workshop",
            "étude de cas": "case study",
            "veille juridique": "legal watch",
            "scénario": "scenario",
            "autre": "other"
        },
        objectifOptions: {
            "": "-- Select an objective --",
            "rechercher": "research",
            "créer": "create",
            "clarifier": "clarify",
            "résumer": "summarize",
            "organiser": "organize",
            "lister": "list",
            "former": "train",
            "élaborer": "develop",
            "évaluer les avantages et les inconvénients": "evaluate pros and cons",
            "autre": "other"
        },
        tachesOptions: {
            "": "-- Select tasks --",
            "expliquer": "explain",
            "résumer": "summarize",
            "écrire": "write",
            "améliorer": "improve",
            "trouver": "find",
            "lister": "list",
            "faire un tableau": "create a table",
            "traduire": "translate",
            "analyser": "analyze"
        },
        precisionsOptions: {
            "": "-- Select precisions --",
            "créatif": "creative",
            "conventionnel": "conventional",
            "professionnel": "professional",
            "informel": "informal",
            "expert": "expert",
            "cordial": "friendly",
            "neutre": "neutral",
            "grand public": "general public"
        },
        livrableOptions: {
            "": "-- Select a deliverable --",
            "tableau": "table",
            "liste": "list",
            "mindmap": "mindmap",
            "rapport technique": "technical report",
            "mail": "email",
            "discours": "speech",
            "post": "post",
            "processus": "process",
            "interview": "interview"
        },
        formatOptions: {
            "": "-- Select a format --",
            "powerpoint": "PowerPoint",
            "word": "Word",
            "excel": "Excel",
            "texte": "Text",
            "onenote": "OneNote",
            "page html": "HTML page"
        }
    },
    ar: {
        title: "مولد الطلبات المنظم",
        languageLabel: "اللغة:",
        roleTitle: "1. الدور",
        contexteTitle: "2. السياق",
        objectifTitle: "3. الهدف",
        detailsTitle: "تفاصيل إضافية (اختياري)",
        tachesTitle: "4. المهام",
        customTachesTitle: "مهام مخصصة (اختياري)",
        precisionsTitle: "5. التوضيحات (نبرة، أسلوب كتابة الرد)",
        livrableTitle: "6. المخرجات",
        formatTitle: "7. التنسيق",
        resultTitle: "الطلب المولد",
        generateBtn: "إنشاء الطلب",
        copyBtn: "نسخ",
        roleOptions: {
            "": "-- اختر دورًا --",
            "chef(fe) de projet": "مدير المشروع",
            "conseiller opérationnel et technique": "مستشار فني و تشغيلي",
            "acheteur": "مشتر",
            "PMO": "مكتب إدارة المشاريع",
            "responsable marketing": "مسؤول التسويق",
            "DRH": "مدير الموارد البشرية",
            "juriste": "خبير قانوني",
            "expert en": "خبير في"
        },
        contexteOptions: {
            "": "-- اختر سياقًا --",
            "réunion": "اجتماع",
            "sourcing": "التوريد",
            "étude technique": "دراسة فنية",
            "atelier": "ورشة عمل",
            "étude de cas": "دراسة حالة",
            "veille juridique": "مراقبة قانونية",
            "scénario": "سيناريو",
            "autre": "آخر"
        },
        objectifOptions: {
            "": "-- اختر هدفًا --",
            "rechercher": "بحث",
            "créer": "إنشاء",
            "clarifier": "توضيح",
            "résumer": "تلخيص",
            "organiser": "تنظيم",
            "lister": "إدراج",
            "former": "تدريب",
            "élaborer": "إعداد",
            "évaluer les avantages et les inconvénients": "تقييم المزايا والعيوب",
            "autre": "آخر"
        },
        tachesOptions: {
            "": "-- اختر مهامًا --",
            "expliquer": "شرح",
            "résumer": "تلخيص",
            "écrire": "كتابة",
            "améliorer": "تحسين",
            "trouver": "العثور على",
            "lister": "إدراج",
            "faire un tableau": "إنشاء جدول",
            "traduire": "ترجمة",
            "analyser": "تحليل"
        },
        precisionsOptions: {
            "": "-- اختر توضيحات --",
            "créatif": "إبداعي",
            "conventionnel": "تقليدي",
            "professionnel": "مهني",
            "informel": "غير رسمي",
            "expert": "خبير",
            "cordial": "ودود",
            "neutre": "محايد",
            "grand public": "عام"
        },
        livrableOptions: {
            "": "-- اختر مخرجًا --",
            "tableau": "جدول",
            "liste": "قائمة",
            "mindmap": "خريطة ذهنية",
            "rapport technique": "تقرير فني",
            "mail": "بريد إلكتروني",
            "discours": "خطاب",
            "post": "منشور",
            "processus": "عملية",
            "interview": "مقابلة"
        },
        formatOptions: {
            "": "-- اختر تنسيقًا --",
            "powerpoint": "باوربوينت",
            "word": "وورد",
            "excel": "إكسيل",
            "texte": "نص",
            "onenote": "ون نوت",
            "page html": "صفحة HTML"
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Applique la langue par défaut (français)
    let currentLanguage = 'fr';
    applyLanguage(currentLanguage);

    // Gestion du changement de langue
    const languageSelector = document.getElementById('language');
    languageSelector.addEventListener('change', function() {
        currentLanguage = this.value;
        applyLanguage(currentLanguage);
    });

    // Fonction pour appliquer la langue
    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        if (lang === 'ar') {
            document.body.style.direction = 'rtl';
        } else {
            document.body.style.direction = 'ltr';
        }

        // Met à jour les textes de l'interface
        document.getElementById('title').textContent = translations[lang].title;
        document.getElementById('language-label').textContent = translations[lang].languageLabel;
        document.getElementById('role-title').textContent = translations[lang].roleTitle;
        document.getElementById('contexte-title').textContent = translations[lang].contexteTitle;
        document.getElementById('objectif-title').textContent = translations[lang].objectifTitle;
        document.getElementById('details-title').textContent = translations[lang].detailsTitle;
        document.getElementById('taches-title').textContent = translations[lang].tachesTitle;
        document.getElementById('custom-taches-title').textContent = translations[lang].customTachesTitle;
        document.getElementById('precisions-title').textContent = translations[lang].precisionsTitle;
        document.getElementById('livrable-title').textContent = translations[lang].livrableTitle;
        document.getElementById('format-title').textContent = translations[lang].formatTitle;
        document.getElementById('result-title').textContent = translations[lang].resultTitle;
        document.getElementById('generate-btn').textContent = translations[lang].generateBtn;
        document.getElementById('copy-btn').textContent = translations[lang].copyBtn;

        // Met à jour les options des listes déroulantes
        updateSelectOptions('role', translations[lang].roleOptions);
        updateSelectOptions('contexte', translations[lang].contexteOptions);
        updateSelectOptions('objectif', translations[lang].objectifOptions);
        updateSelectOptions('taches', translations[lang].tachesOptions);
        updateSelectOptions('precisions', translations[lang].precisionsOptions);
        updateSelectOptions('livrable', translations[lang].livrableOptions);
        updateSelectOptions('format', translations[lang].formatOptions);
    }

    // Fonction pour mettre à jour les options d'une liste déroulante
    function updateSelectOptions(selectId, options) {
        const select = document.getElementById(selectId);
        const selectedValues = Array.from(select.selectedOptions).map(option => option.value);
        select.innerHTML = '';

        // Ajoute les options traduites
        for (const [value, text] of Object.entries(options)) {
            select.add(new Option(text, value));
        }

        // Rétablit les sélections
        selectedValues.forEach(value => {
            if (Object.keys(options).includes(value)) {
                const option = select.querySelector(`option[value="${value}"]`);
                if (option) option.selected = true;
            }
        });
    }

    // Gestion des champs "Autre"
    const roleSelect = document.getElementById('role');
    const roleCustom = document.getElementById('role-custom');
    const roleCharCount = document.getElementById('role-char-count');

    roleSelect.addEventListener('change', function() {
        if (this.value === 'expert en') {
            roleCustom.style.display = 'block';
            roleCharCount.parentElement.style.display = 'block';
        } else {
            roleCustom.style.display = 'none';
            roleCharCount.parentElement.style.display = 'none';
        }
    });

    // Compteur pour "Expert en"
    roleCustom.addEventListener('input', function() {
        const currentLength = this.value.length;
        roleCharCount.textContent = currentLength;
        if (currentLength > 60) {
            this.value = this.value.substring(0, 60);
            roleCharCount.style.color = 'red';
        } else {
            roleCharCount.style.color = '#777';
        }
    });

    // Gestion des champs "Autre" pour Contexte et Objectif
    const contexteSelect = document.getElementById('contexte');
    const contexteCustom = document.getElementById('contexte-custom');
    contexteSelect.addEventListener('change', function() {
        contexteCustom.style.display = (this.value === 'autre') ? 'block' : 'none';
    });

    const objectifSelect = document.getElementById('objectif');
    const objectifCustom = document.getElementById('objectif-custom');
    objectifSelect.addEventListener('change', function() {
        objectifCustom.style.display = (this.value === 'autre') ? 'block' : 'none';
    });

    // Compteur pour "Détails supplémentaires"
    const objectifDetails = document.getElementById('objectif-details');
    const objectifCharCount = document.getElementById('objectif-char-count');

    objectifDetails.addEventListener('input', function() {
        const currentLength = this.value.length;
        objectifCharCount.textContent = currentLength;
        if (currentLength > 250) {
            this.value = this.value.substring(0, 250);
            objectifCharCount.style.color = 'red';
        } else {
            objectifCharCount.style.color = '#777';
        }
    });

    // Compteur et numérotation pour "Tâches personnalisées"
    const tachesCustom = document.getElementById('taches-custom');
    const tachesCharCount = document.getElementById('taches-char-count');

    tachesCustom.addEventListener('input', function() {
        const currentLength = this.value.length;
        tachesCharCount.textContent = currentLength;
        if (currentLength > 250) {
            this.value = this.value.substring(0, 250);
            tachesCharCount.style.color = 'red';
        } else {
            tachesCharCount.style.color = '#777';
        }

        // Numérotation automatique
        const lines = this.value.split('\n');
        if (lines.length > 1) {
            const lastLine = lines[lines.length - 1];
            if (lastLine.trim() === '') {
                const nextNumber = lines.length;
                this.value = this.value.replace(/\n$/, `\n${nextNumber} - `);
            }
        }
    });

    // Initialise le champ "Tâches personnalisées" avec "1 - "
    tachesCustom.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.value = '1 - ';
        }
    });

    // Génération du prompt
    document.getElementById('generate-btn').addEventListener('click', function() {
        const role = roleSelect.value === 'expert en' ? `${roleSelect.value} ${roleCustom.value}` : roleSelect.value;
        const contexte = contexteSelect.value === 'autre' ? contexteCustom.value : contexteSelect.value;
        let objectif = objectifSelect.value === 'autre' ? objectifCustom.value : objectifSelect.value;

        // Supprimer les parenthèses après "résumer"
        objectif = objectif.replace(/\(.*\)/, '').trim();

        const taches = Array.from(document.getElementById('taches').selectedOptions)
            .map(option => option.value)
            .filter(value => value !== '') // Filtrer l'option vide
            .join(', ');

        const tachesCustomValue = tachesCustom.value.trim();
        const tachesFinal = tachesCustomValue ? `${taches}${taches ? ', ' : ''}\n${tachesCustomValue}` : taches;

        const precisions = Array.from(document.getElementById('precisions').selectedOptions)
            .map(option => option.value)
            .filter(value => value !== '') // Filtrer l'option vide
            .join(', ');

        const livrable = Array.from(document.getElementById('livrable').selectedOptions)
            .map(option => option.value)
            .filter(value => value !== '') // Filtrer l'option vide
            .join(', ');

        const format = Array.from(document.getElementById('format').selectedOptions)
            .map(option => option.value)
            .filter(value => value !== '') // Filtrer l'option vide
            .join(', ');

        const objectifDetailsValue = objectifDetails.value.trim();

        // Construction du prompt sans ** et sans majuscules
        let prompt = `tu es un(e) ${role}. `;
        prompt += `dans le cadre d'une ${contexte}, `;
        prompt += `ton objectif est de ${objectif}${objectifDetailsValue ? ` ${objectifDetailsValue}` : ''}. `;
        prompt += `pour cela, tu dois : ${tachesFinal}. `;
        prompt += `le ton doit être ${precisions}. `;
        prompt += `le livrable attendu est un ${livrable} au format ${format}. `;
        prompt += `rédige une réponse adaptée.`;

        document.getElementById('prompt-result').value = prompt;
    });

    // Copier le prompt
    document.getElementById('copy-btn').addEventListener('click', function() {
        const promptResult = document.getElementById('prompt-result');
        promptResult.select();
        document.execCommand('copy');
        alert(currentLanguage === 'fr' ? 'Prompt copié dans le presse-papiers !' :
              currentLanguage === 'en' ? 'Prompt copied to clipboard!' :
              'تم نسخ الطلب إلى الحافظة!');
    });
});
