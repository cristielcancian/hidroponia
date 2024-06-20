// Executa quando o documento está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos de link e modal
    const sobreLink = document.getElementById('sobre-link');
    const contatoLink = document.getElementById('contato-link');
    const sobreModal = document.getElementById('sobre-modal');
    const contatoModal = document.getElementById('contato-modal');
    const closeButtons = document.querySelectorAll('.close');

    // Adiciona um evento de clique ao link "Sobre" para abrir o modal "Sobre"
    sobreLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        $('#sobre-modal').modal('show'); // Mostra o modal "Sobre"
    });

    // Adiciona um evento de clique ao link "Contato" para abrir o modal "Contato"
    contatoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        $('#contato-modal').modal('show'); // Mostra o modal "Contato"
    });

    // Adiciona um evento de clique a todos os botões de fechar (close buttons) nos modais
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            $('#sobre-modal').modal('hide'); // Esconde o modal "Sobre"
            $('#contato-modal').modal('hide'); // Esconde o modal "Contato"
        });
    });

    // Adiciona um evento de clique na janela para fechar os modais ao clicar fora deles
    window.addEventListener('click', function(event) {
        if (event.target === sobreModal) {
            $('#sobre-modal').modal('hide'); // Esconde o modal "Sobre"
        }
        if (event.target === contatoModal) {
            $('#contato-modal').modal('hide'); // Esconde o modal "Contato"
        }
    });
});




