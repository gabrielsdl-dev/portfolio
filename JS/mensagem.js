document.getElementById("form-orcamento").addEventListener("submit", function(e) {
        e.preventDefault(); // impede reload da página

        // Mostra a mensagem
        document.getElementById("mensagem-sucesso").style.display = "block";

        // Se quiser limpar o formulário:
        this.reset();
    });