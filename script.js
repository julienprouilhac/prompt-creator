document.addEventListener('DOMContentLoaded', function() {
    // Gestion des champs "Autre"
    const roleSelect = document.getElementById('role');
    const roleCustom = document.getElementById('role-custom');
    roleSelect.addEventListener('change', function() {
        roleCustom.style.display = (this.value === 'Autre') ? 'block' : 'none';
    });

    const contexteSelect = document.getElementById('contexte');
    const contexteCustom = document.getElementById('contexte-custom');
    contexteSelect.addEventListener('change', function() {
        contexteCustom.style.display = (this.value === 'Autre') ? 'block' : 'none';
    });

    const objectifSelect = document.getElementById('objectif');
    const objectifCustom = document.getElementById('objectif-custom');
    objectifSelect.addEventListener('change', function() {
        objectifCustom.style.display = (this.value === 'Autre') ? 'block' : 'none';
    });

    // Génération du prompt
    document.getElementById('generate-btn').addEventListener('click', function() {
        const role = roleSelect.value === 'Autre' ? roleCustom.value : roleSelect.value;
        const contexte = contexteSelect.value === 'Autre' ? contexteCustom.value : contexteSelect.value;
        const objectif = objectifSelect.value === 'Autre' ? objectifCustom.value : objectifSelect.value;

        const taches = Array.from(document.getElementById('taches').selectedOptions)
            .map(option => option.value)
            .join(', ');

        const precisions = Array.from(document.getElementById('precisions').selectedOptions)
            .map(option => option.value)
            .join(', ');

        const livrable = Array.from(document.getElementById('livrable').selectedOptions)
            .map(option => option.value)
            .join(', ');

        // Construction du prompt
        let prompt = `Tu es un(e) **${role}**. `;
        prompt += `Dans le cadre d'une **${contexte}**, `;
        prompt += `ton objectif est de **${objectif}**. `;
        prompt += `Pour cela, tu dois : **${taches}**. `;
        prompt += `Le ton doit être **${precisions}**. `;
        prompt += `Le livrable attendu est un **${livrable}**. `;
        prompt += `Rédige une réponse adaptée.`;

        document.getElementById('prompt-result').value = prompt;
    });

    // Copier le prompt
    document.getElementById('copy-btn').addEventListener('click', function() {
        const promptResult = document.getElementById('prompt-result');
        promptResult.select();
        document.execCommand('copy');
        alert('Prompt copié dans le presse-papiers !');
    
        // Ajoute cette fonction à la fin de ton script.js
    function encodePromptForURL(prompt) {
    // Remplace les espaces par %20 et encode les caractères spéciaux
    return encodeURIComponent(prompt);
}

document.getElementById('send-to-mistral-btn').addEventListener('click', function() {
    const prompt = document.getElementById('prompt-result').value;
    if (!prompt) {
        alert("Génère d'abord un prompt !");
        return;
    }
    const encodedPrompt = encodePromptForURL(prompt);
    // Ouvre Mistral avec le prompt pré-rempli
    window.open(`https://mistral.ai/chat?prompt=${encodedPrompt}`, '_blank');
});
    });
});
