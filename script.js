window.addEventListener('DOMContentLoaded', () => {

    function navigateTo(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(p => p.classList.remove('active'));

        const target = document.getElementById(pageId);
        if (target) target.classList.add('active');

        const navButtons = document.querySelectorAll('.nav-item');
        navButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`btn-${pageId}`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    window.navigateTo = navigateTo;

});
