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

    const texto = `Olá! Gostaria de solicitar um orçamento.%0A%0A
Nome: ${nome}%0A
Tipo de site: ${tipo}%0A
Descrição: ${descricao}`;

    const url = `https://wa.me/5511975364351?text=${texto}`;

    // Marca que enviou
    localStorage.setItem("orcamentoEnviado", "true");

    window.location.href = url;
}