function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

async function fetchLanguageData(lang) {
    const response = await fetch(`${lang}.json`);
    return response.json();
}

function setLanguagePreference(lang) {

    localStorage.setItem('language', lang);
    location.reload();
}

async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    const langData = await fetchLanguageData(lang);
    updateContent(langData);// Toggle Arabic stylesheet
}