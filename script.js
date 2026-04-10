

document.addEventListener('DOMContentLoaded', () => {

    const sectionHabilidades = document.getElementById('habilidades');
    const barrasDeHabilidade = document.querySelectorAll('.skill-progresso');
    let barrasAtivadas = false;


    function ativarBarras() {
        if (barrasAtivadas) return;

        barrasDeHabilidade.forEach(barra => {
            const nivel = barra.getAttribute('data-nivel');
            barra.style.width = nivel + '%';
        });

        barrasAtivadas = true;
    }

    const observerOptions = {
        root: null,
        threshold: 0.5
    };


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                ativarBarras();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (sectionHabilidades) {
        observer.observe(sectionHabilidades);
    }

});


document.addEventListener('DOMContentLoaded', () => {

    const timelineEvents = document.querySelectorAll('.timeline-evento');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    timelineEvents.forEach(evento => {
        timelineObserver.observe(evento);
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const botoesDetalhes = document.querySelectorAll('.btn-detalhes');

    if (botoesDetalhes.length > 0) {
        botoesDetalhes.forEach(botao => {
            botao.addEventListener('click', (e) => {
                e.stopPropagation();
                const projetoKey = botao.getAttribute('data-target');
                abrirModal(projetoKey);
            });
        });
    }

});


