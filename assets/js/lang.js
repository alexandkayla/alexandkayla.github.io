document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('siteLang');
  let lang = savedLang || navigator.language.slice(0,2);
  lang = ['en','fr','es'].includes(lang) ? lang : 'en';
  localStorage.setItem('siteLang', lang);

  const langSwitcher = document.getElementById('langSwitcher');
  if (!langSwitcher) return;

  langSwitcher.textContent = lang.toUpperCase();

  const currentPath = location.pathname;

  // Redirection automatique si home
  if(currentPath === '/' && lang !== 'en'){
    window.location.href = `/${lang}/`;
  }

  langSwitcher.addEventListener('click', () => {
    const nextLang = lang === 'en' ? 'fr' : lang === 'fr' ? 'es' : 'en';
    localStorage.setItem('siteLang', nextLang);
    langSwitcher.textContent = nextLang.toUpperCase();

    let path = location.pathname;

    // --- Home page ---
    if(path === '/' || /^\/(en|fr|es)\/?$/.test(path)){
      if(nextLang === 'en'){
        window.location.href = '/';
      } else {
        window.location.href = `/${nextLang}/`;
      }
      return;
    }

    // --- Sous-pages ---
    // Supprimer l'ancien préfixe si existant (/en/, /fr/, /es/)
    path = path.replace(/^\/(en|fr|es)\//, '/');

    // Ajouter le nouveau préfixe
    if(nextLang === 'en'){
      path = '/en' + path;
    } else {
      path = `/${nextLang}${path}`;
    }

    window.location.href = path;
  });
});
