const $ = (selector) => document.querySelector(selector);
let toastTimeout;
function notify(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 2600);
}
async function copy(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    notify('Copied to clipboard');
    if (button && button.textContent === 'Copy') {
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = 'Copy'; }, 1800);
    }
  } catch {
    notify('Couldn’t copy. Please select the text or download the file.');
  }
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', () => copy(button.dataset.copy, button));
});
$('#copy-link').addEventListener('click', () => copy(location.origin + location.pathname));
$('#copy-skill').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  button.disabled = true;
  try {
    const response = await fetch('/downloads/ai-branding-portable.md');
    if (!response.ok) throw new Error('Download failed');
    await copy(await response.text());
  } catch {
    notify('Couldn’t load the skill. Please use the download link.');
  } finally {
    button.disabled = false;
  }
});
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(button, focus = false) {
  tabs.forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) button.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
  });
});
let previewLoaded = false;
$('.skill-preview').addEventListener('toggle', async (event) => {
  if (!event.currentTarget.open || previewLoaded) return;
  try {
    const response = await fetch('/downloads/ai-branding/SKILL.md');
    if (!response.ok) throw new Error('Preview failed');
    $('#skill-content').textContent = await response.text();
    previewLoaded = true;
  } catch { $('#skill-content').textContent = 'Preview unavailable. You can still download the complete skill above.'; }
});
const navLinks = [...document.querySelectorAll('.sidebar nav a')];
function activate(id) {
  navLinks.forEach(link => {
    const active = link.hash === '#' + id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
navLinks.forEach(link => link.addEventListener('click', () => activate(link.hash.slice(1))));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (visible.length) activate(visible[0].target.id);
  }, { rootMargin: '-8% 0px -65% 0px', threshold: 0 });
  navLinks.forEach(link => { const section = document.querySelector(link.hash); if (section) observer.observe(section); });
}
