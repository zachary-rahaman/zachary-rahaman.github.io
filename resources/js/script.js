function enterSite() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('about').classList.remove('hidden');
}

  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function enterSite() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('about').classList.remove('hidden');
    const title = document.getElementById('site-title');
    title.classList.remove('centered-title');
    title.classList.add('top-title');
}
