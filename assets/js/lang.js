document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('siteLang');
  let lang = savedLang || navigator.language.slice(0,2);
  lang = ['fr','es','en'].includes(lang) ? lang : 'en';
  localStorage.setItem('siteLang', lang);

  const langSwitcher = document.getElementById('langSwitcher');
  if (!langSwitcher) return;

  // Mettre le texte correct
  langSwitcher.textContent = lang.toUpperCase();

  // Redirection automatique si sur la home
  if(location.pathname === '/' && lang !== 'en'){
    window.location.href = `/${lang}/`;
  }

  // Clic sur le bouton pour changer de langue
  langSwitcher.addEventListener('click', () => {
    const nextLang = lang === 'en' ? 'fr' : lang === 'fr' ? 'es' : 'en';
    localStorage.setItem('siteLang', nextLang);
    langSwitcher.textContent = nextLang.toUpperCase();
    window.location.href = nextLang === 'en' ? '/' : `/${nextLang}/`;
  });
});
