var valores = [];

function aumentarForm() {
  var form = document.getElementById("form-class");
  var div = document.createElement("div");
  div.className =
    "flex-row form-group mt-1 d-flex align-items-center justify-content-center";
  div.innerHTML =
    '<div class="col-8 text-center"><input placeholder="Insira uma valor" type="number" step="1" class="form-control" id="valor" required></div><button type="button" class="btn btn-danger" onclick="excluirForm()">x</button>';
  form.appendChild(div);
}

function excluirForm() {
  var form = document.getElementById("form-class");
  var divs = form.getElementsByClassName("form-group");
  if (divs.length > 1) {
    form.removeChild(divs[divs.length - 1]);
  }
}

function verificarIgualdadeDeValores() {
  valores = [];

  var inputs = document.querySelectorAll("#form-class input");

  for (var i = 0; i < inputs.length; i++) {
    var valor = parseInt(inputs[i].value);
    if (!isNaN(valor)) {
      valores.push(valor);
    }
  }

  if (valores.length === 0) {
    exibirModal("Erro", "Por favor, insira pelo menos algum valor.");
    return;
  }

  var duplicados = valores.filter(function (valor, indice) {
    return valores.indexOf(valor) !== indice;
  });

  if (duplicados.length > 0) {
    exibirModal(
      "Verificação",
      "Há valores iguais no vetor. Os valores duplicados são: " +
        duplicados.join(", ")
    );
  } else {
    exibirModal("Verificação", "Não há valores iguais no vetor.");
  }
}

function exibirModal(titulo, mensagem) {
  var modalTitle = document.getElementById("exampleModalLabel");
  var modalBody = document.getElementById("verificado");

  modalTitle.innerText = titulo;
  modalBody.innerText = mensagem;

  var modal = new bootstrap.Modal(document.getElementById("verificacaoModal"));
  modal.show();
}
