// ========================================
// MENU MOBILE - HAMBURGER
// ========================================

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Abrir/fechar menu mobile

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    // Animar hamburger
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = mobileMenu.classList.contains('active') ? 'rotate(45deg) translateY(10px)' : 'none';
    spans[1].style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = mobileMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-10px)' : 'none';
});

// Fechar menu ao clicar em um link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        
        // Resetar hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================================
// SCROLL SUAVE (já está no CSS, mas aqui está o JS)
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.querySelectorAll('.sobre-item, .horario-card, .contato-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// VALIDAÇÃO DE FORMULÁRIO (se adicionar um)
// ========================================

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========================================
// FUNÇÃO PARA ROLAR PARA O TOPO
// ========================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar botão de voltar ao topo quando rolar
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    // Aqui você pode adicionar lógica para mostrar um botão de voltar ao topo
    if (scrollTop > 300) {
        // Mostrar botão
    } else {
        // Esconder botão
    }
});

// ========================================
// LOG DE INICIALIZAÇÃO
// ========================================

console.log('✅ Landing page carregada com sucesso!');
