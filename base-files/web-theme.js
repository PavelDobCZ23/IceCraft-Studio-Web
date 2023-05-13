initializeTheme();

function initializeTheme() {
    const rootDataset = document.documentElement.dataset;
    const savedTheme = localStorage.getItem('web-theme');
    if (savedTheme) {
        rootDataset.theme = savedTheme;
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            rootDataset.theme = 'dark';
            localStorage.setItem('web-theme', 'dark');
        } else {
            rootDataset.theme = 'light';
            localStorage.setItem('web-theme', 'light');
        }
    }
}