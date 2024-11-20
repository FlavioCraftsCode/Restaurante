const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Função para revelar a imagem e frases com atraso
function revealContent() {
    // Revela a imagem do hambúrguer após 500ms
    setTimeout(() => {
        const image = document.querySelector(".header__image img");
        image.style.opacity = "1";
        image.style.transform = "translateY(0)";
    }, 500);

    // Revela o h2 após 1000ms
    setTimeout(() => {
        const h2 = document.querySelector(".header__content h2");
        h2.style.opacity = "1";
        h2.style.transform = "translateY(0)";
    }, 1000);

    // Revela o h1 após 1500ms
    setTimeout(() => {
        const h1 = document.querySelector(".header__content h1");
        h1.style.opacity = "1";
        h1.style.transform = "translateY(0)";
    }, 1500);
}

// Chama a função de revelação após o carregamento da página
window.addEventListener("load", revealContent);
