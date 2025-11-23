function abrirFormulario() {
    document.getElementById("formOrcamento").style.display = "flex";
}

function fecharFormulario() {
    document.getElementById("formOrcamento").style.display = "none";
}

function enviarWhatsApp() {
    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value;

    if (nome.trim() === "" || descricao.trim() === "") {
        alert("Preencha todos os campos antes de enviar!");
        return;
    }

    const numero = "5511975364351"; 
    const mensagem = `Olá! Meu nome é ${nome}.%0A%0AQuero um orçamento para:%0A*${tipo}*.%0A%0ADescrição do projeto:%0A${descricao}`;

    const url = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(url, "_blank");
}