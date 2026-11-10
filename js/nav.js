const navMount = document.querySelector('[data-nav]');

if (navMount) {
  try {
    const response = await fetch('./nav.html');
    if (!response.ok) {
      throw new Error(`Could not load navigation (${response.status})`);
    }

    navMount.innerHTML = await response.text();
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentLink = navMount.querySelector(`[data-page="${currentPage}"]`);
    currentLink?.setAttribute('aria-current', 'page');

    const menuToggle = navMount.querySelector('.menu-toggle');
    const navigation = navMount.querySelector('.site-nav');
    menuToggle?.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      navigation?.classList.toggle('is-open', !isExpanded);
    });
  } catch (error) {
    console.error('Navigation failed to load:', error);
    navMount.innerHTML = '<p class="nav-error">Navigation could not be loaded. Please refresh the page.</p>';
  }
}
