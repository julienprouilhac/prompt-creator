document.addEventListener('DOMContentLoaded', function() {
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
            .join(', ');

        const tachesCustomValue = tachesCustom.value.trim();
        const tachesFinal = tachesCustomValue ? `${taches}${taches ? ', ' : ''}\n${tachesCustomValue}` : taches;

        const precisions = Array.from(document.getElementById('precisions').selectedOptions)
            .map(option => option.value)
            .join(', ');

        const livrable = Array.from(document.getElementById('livrable').selectedOptions)
            .map(option => option.value)
            .join(', ');

        const format = Array.from(document.getElementById('format').selectedOptions)
            .map(option => option.value)
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
        alert('Prompt copié dans le presse-papiers !');
    });
});
