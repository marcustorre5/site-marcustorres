// Adiciona um listener de evento ao formulário de contato para lidar com a submissão
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Previne o comportamento padrão de submissão do formulário
    event.preventDefault();
    
    // Mostra um alerta indicando que o formulário foi enviado com sucesso
    alert('Formulário enviado com sucesso!');
    
    // Limpa o formulário
    document.getElementById('contact-form').reset();
});
