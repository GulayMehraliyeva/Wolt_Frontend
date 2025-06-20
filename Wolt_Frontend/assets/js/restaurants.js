"use strict"

const categoriesRow = document.getElementById("categories-row");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
const categoryItems = categoriesRow.querySelectorAll(".image-item");
const totalItems = categoryItems.length;
const visibleItems = 6;

function updateSlider() {
    const itemWidth = categoryItems[0].offsetWidth;
    categoriesRow.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    categoriesRow.style.transition = "transform 0.4s ease";
}

rightArrow.addEventListener("click", () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - visibleItems;
    }
    updateSlider();
});





const navItems = document.querySelectorAll('.second-navbar .nav-item');
const path = window.location.pathname;

navItems.forEach(item => item.classList.remove('active'));

if (path.includes('home.html')) {
    document.querySelector('.home').classList.add('active');
} else if (path.includes('restaurants.html')) {
    document.querySelector('.restaurants').classList.add('active');
}



document.addEventListener("DOMContentLoaded", function () {
    const pageButtons = document.querySelectorAll(".page");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentPageIndex = 0;

    function updateActivePage(index) {
        if (index < 0 || index >= pageButtons.length) return;

        pageButtons.forEach(btn => btn.classList.remove("active"));
        pageButtons[index].classList.add("active");
        currentPageIndex = index;
    }

    pageButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            updateActivePage(index);
        });
    });

    document.querySelectorAll(".arrow").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const isLeft = button.classList.contains("left-arrow");
            const newIndex = isLeft ? currentPageIndex - 1 : currentPageIndex + 1;
            updateActivePage(newIndex);
        });
    });

    updateActivePage(0);
});