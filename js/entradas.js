function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

// Função para adicionar a classe de animação quando a seção está visível
function animateSections() {
    const sections = document.querySelectorAll('.section-entrada-direita');
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('animate');
            }
        });
    }

// Verificar as seções visíveis no carregamento e ao rolar a página
window.addEventListener('load', animateSections);
window.addEventListener('scroll', animateSections);