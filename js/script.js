  // Função para abrir uma aba específica
  function openTab(event, tabId) {
    var tabPanes = document.querySelectorAll(".tab-pane");
    tabPanes.forEach(tab => tab.classList.remove("active"));

    var tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    if (event) {
        event.currentTarget.classList.add("active");
    }
}

// Função para trocar as abas automaticamente
function autoSwitchTabs() {
    const tabs = ["tab1", "tab2", "tab3", "tab4"];
    let currentTabIndex = 0;

    setInterval(() => {
        // Remove a classe "active" da aba atual
        document.querySelectorAll(".tab-pane, .tab-button").forEach(element => {
            element.classList.remove("active");
        });

        // Adiciona a classe "active" à próxima aba
        const nextTabId = tabs[currentTabIndex];
        document.getElementById(nextTabId).classList.add("active");
        document.querySelector(`[onclick="openTab(event, '${nextTabId}')"]`).classList.add("active");

        // Atualiza o índice para a próxima aba
        currentTabIndex = (currentTabIndex + 1) % tabs.length;
    }, 5000); // Troca a cada 5 segundos (5000 ms)
}

// Inicia a troca automática de abas quando a página carrega
window.onload = function () {
    autoSwitchTabs();
};
document.getElementById("contactpage").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o redirecionamento

    let form = event.target;
    let formData = new FormData(form);

    let response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        let successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show(); // Exibe o modal de sucesso

        // Adiciona um listener para fechar o modal ao clicar no botão "OK"
        document.querySelector('#successModal .btn-success').addEventListener('click', function () {
            successModal.hide();
        });

        form.reset(); // Limpa o formulário
    } else {
        alert("Erro ao enviar. Tente novamente mais tarde.");
    }
});