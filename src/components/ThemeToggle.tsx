//dark mode
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');

    //lo que hay dentro del boton
    btn.innerText = " 🌙 ";
    document.body.prepend(btn);
    btn.style.setProperty('margin', '0.5rem', 'important');

    btn.addEventListener ('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        const wpBlock = document.querySelector('.wp-block-group');

        if (isDark) {
        document.body.style.setProperty('background-color', '#1a1a1a', 'important');
        btn.innerText = " ☀️ ";

        const allDivs = document.querySelectorAll('.entry-content, .entry-content div, .wp-block-group');
        allDivs.forEach(div => {
            div.style.setProperty('background-color', 'transparent', 'important');
            });

        document.querySelectorAll('h1, h2, h3, p, li, span').forEach(el => {
            el.style.setProperty('color', '#ffffff', 'important');
            });
        } else {
            document.body.style.setProperty('background-color', '#ffffff', 'important');
            document.querySelectorAll('h2, h3, p, li, span').forEach(el => {
                el.style.setProperty('color', '#000000', 'important');

            btn.innerText = " 🌙 ";    
            });
        }
    });
});