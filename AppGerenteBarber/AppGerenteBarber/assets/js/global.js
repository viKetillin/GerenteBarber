var urlApi = "https://localhost:44393/api/";

//#region [Array weekday]
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
//#endregion [Array weekday]

//#region [Array dia semana]
var diaSemana = new Array(7);
diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda-feira";
diaSemana[2] = "Terça-feira";
diaSemana[3] = "Quarta-feira";
diaSemana[4] = "Quinta-feira";
diaSemana[5] = "Sexta-feira";
diaSemana[6] = "Sábado";
//#endregion [Array dia semana]

function recuperarUrlApi() {
    return "https://localhost:44393/api/";
}

function mensagemConfirmacao(titulo, mensagem) {
    var dfd = new jQuery.Deferred();
    var result = false;

    var html = "";
    html += '<div class="modal fade" id="modalConfirmacaoExclusao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> ';
    html += '    <div class="modal-dialog"> ';
    html += '        <div class="modal-content"> ';
    html += '            <div class="modal-header"> ';
    html += '                <h5 class="modal-title" id="titulo"></h5> ';
    html += '                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> ';
    html += '            </div> ';
    html += '            <div class="modal-body"> ';
    html += '                <span id="mensagem"></span> ';
    html += '            </div> ';
    html += '            <div class="modal-footer"> ';
    html += '                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button> ';
    html += '                <button type="button" class="btn btn-primary" id="confirmacao">Sim</button> ';
    html += '            </div> ';
    html += '        </div> ';
    html += '    </div> ';
    html += '</div> ';

    $(html).appendTo("body")

    var modalConfirmacao = new bootstrap.Modal(document.getElementById("modalConfirmacaoExclusao"), {});

    $("#titulo").text(titulo);
    $("#mensagem").text(mensagem);

    modalConfirmacao.show();

    $("#confirmacao").click(function () {
        modalConfirmacao.hide();
        result = true;
        dfd.resolve(result);
    });

    return dfd.promise();
};

function notificacaoSucesso(mensagem) {
    var html = "";
    html += '<div class="toast position-fixed bg-success text-white top-0 start-50 translate-middle-x" id="notificaoSucesso" role="alert" aria-live="assertive" aria-atomic="true" style="z-index:2;"> ';
    html += '    <div class="d-flex"> ';
    html += '        <div class="toast-body"> ' + mensagem + '</div> ';
    html += '        <button type="button" class="btn-close m-auto" data-bs-dismiss="toast" aria-label="Close"></button> ';
    html += '    </div> ';
    html += '</div> ';

    $(html).appendTo("body")

    $('#notificaoSucesso').toast('show');
}

function notificacaoErro(mensagem) {
    var html = "";
    html += '<div class="toast position-fixed bg-danger text-white top-0 start-50 translate-middle-x" id="notificaoErro" role="alert" aria-live="assertive" aria-atomic="true" style="z-index:2;"> ';
    html += '    <div class="d-flex"> ';
    html += '        <div class="toast-body"> ' + mensagem + '</div> ';
    html += '        <button type="button" class="btn-close m-auto" data-bs-dismiss="toast" aria-label="Close"></button> ';
    html += '    </div> ';
    html += '</div> ';

    $(html).appendTo("body")

    $('#notificaoErro').toast('show');
}

var recuperarUrlParametro = function recuperarUrlParametro(parametro) {
    var URLPagina = window.location.search.substring(1),
        URLVariavel = URLPagina.split('&'),
        nomeParametro,
        i;

    for (i = 0; i < URLVariavel.length; i++) {
        nomeParametro = URLVariavel[i].split('=');

        if (nomeParametro[0] === parametro) {
            return typeof nomeParametro[1] === undefined ? true : decodeURIComponent(nomeParametro[1]);
        }
    }
    return null;
};

function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };

    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(tzo / 60) +
        ':' + pad(tzo % 60);
}