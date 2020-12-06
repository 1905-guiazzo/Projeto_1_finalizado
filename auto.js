
var Add = document.querySelector("#btnAdicionar");
var nova_tarefa = document.querySelector("#tarefa");
var lista = [];
var numCH = 0;
var listadetarefa = document.querySelector("#lista_do_dia");
carregarLista()
var pux = []


function nova_tarf() { 
        var texto = nova_tarefa.value;
        if (texto === "") {
            alert("Ops, você deixou o campo vazio!");
            return;
        }
        if (localStorage.getItem("texto")) {
         numCH = JSON.parse(localStorage.getItem('texto')).length;
        }
        var item = {tarfa: texto , condi: false}
        li_list(item);
        LocalStorage(item);  
        document.querySelector("#tarefa").value = null
}

 function li_list(item){
    var lista = document.querySelector("#lista_do_dia");
    var li = document.createElement("li");
    li.id = "li" + numCH;
    
    var checkbox_conf = document.createElement("input");
    checkbox_conf.type = "checkbox"
    checkbox_conf.id = "ch" + numCH;

    var btApagar = document.createElement("input");
    btApagar.type = "button"
    btApagar.id = "bt" + numCH;
    btApagar.value =  "x";
    
    
    checkbox_conf.onclick = function(){
        var id = checkbox_conf.id.charAt(2);
        var element = document.getElementById("li" + id);
        
        if (document.getElementById(checkbox_conf.id).checked) {
            document.getElementById(checkbox_conf.id).checked = true;
            
            element.classList.add("checked");
        } else {
            document.getElementById(checkbox_conf.id).checked = false;
            element.classList.remove("checked");
        }

        lista = JSON.parse(localStorage.getItem("texto"));
        var item = lista.find(x => x.tarfa == text_.textContent);
        item.condi = document.getElementById(checkbox_conf.id).checked;

        lista.splice(id, 1);

        lista.push(item);

        localStorage.setItem("texto", JSON.stringify(lista));

        location.reload();
     };

     btApagar.onclick = function() {
        var lista = JSON.parse(localStorage.getItem("texto"));
       lista.splice(btApagar.id.charAt(2),1);
        localStorage.setItem("texto", JSON.stringify(lista));
        li.remove();
     }

   var text_ = document.createTextNode(item.tarfa)
    li.appendChild(checkbox_conf);
    li.appendChild(text_)
    li.appendChild(btApagar);
    lista.appendChild(li)
    
    numCH++;
}

function pageLoad() {
    if (localStorage.getItem("texto")) {
        lista = JSON.parse(localStorage.getItem("texto"));

        for (var i = 0; i < lista.length; i++) {
            var checkbox = document.getElementById("ch" + i);
            var li = document.getElementById("li" + i);
            checkbox.checked = lista.find(tarefa => tarefa.tarfa == lista[i].tarfa).condi;

            if (checkbox.checked) {
                li.classList.add("checked");
            } 
        }
     }
}
 
function LocalStorage(item) {
    lista.push(item);
    localStorage.setItem("texto", JSON.stringify(lista));
}

function carregarLista() {
    lista = localStorage.getItem("texto") ? JSON.parse(localStorage.getItem("texto")) : []
        
        if (lista) {
            texto = lista;
            for (var i = 0; i < lista.length; i++) {
                    li_list(texto[i]);
            }
        }
}

function precione(event) {
    if (event.key == "Enter") {
        nova_tarf();
    }
}

Add.addEventListener("click", nova_tarf);

nova_tarefa.addEventListener("keydown", precione);


