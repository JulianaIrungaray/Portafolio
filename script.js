const filterContainer = document.querySelector(".gallery__categories");
const galleryItems = document.querySelectorAll(".project__card");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active")
        const filterValue = event.target.getAttribute("data-filter")
        galleryItems.forEach(item => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide")
                item.classList.add("show")
            } else {
                item.classList.remove("show")
                item.classList.add("hide")
            }
        })
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const programmingCoursesFilterContainer = document.querySelector("#programming-courses .galeria__categorias");
    const programmingCoursesGalleryItems = document.querySelectorAll("#programming-courses .proyecto__card");

    programmingCoursesFilterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filtro-item")) {
            programmingCoursesFilterContainer.querySelector(".activo").classList.remove("activo");
            event.target.classList.add("activo");

            const filterValue = event.target.getAttribute("data-filter");

            programmingCoursesGalleryItems.forEach(item => {
                const itemFilters = item.getAttribute("data-filter").split(" ");
                if (itemFilters.includes(filterValue) || filterValue === "all") {
                    item.classList.remove("hide");
                    item.classList.add("show");
                } else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.li_animation');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = item.getAttribute('data-section-id');
            scrollToSection(sectionId);
        });
    });
});