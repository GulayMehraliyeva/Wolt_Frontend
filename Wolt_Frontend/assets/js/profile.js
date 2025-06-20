"use strict"

 const menuItems = document.querySelectorAll('.sidebar ul li');
    const profileSection = document.getElementById('profile-section');
    const settingsSection = document.getElementById('settings-section');
    const favoritesSection = document.getElementById('favorites-section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const itemText = item.innerText.trim();

            profileSection.style.display = 'none';
            settingsSection.style.display = 'none';
            favoritesSection.style.display = 'none';

            if (itemText.includes('Profil')) {
                profileSection.style.display = 'block';
            } else if (itemText.includes('Parametrlər')) {
                settingsSection.style.display = 'block';
            } else if (itemText.includes('Sevimlilər')) {
                favoritesSection.style.display = 'block';
            }
        });
    });