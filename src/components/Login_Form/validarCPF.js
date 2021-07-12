export function validarCPF() {
    let cpf = document.getElementById('cpf-input').value;
    if(cpf.isInteger === false );
    let cpfValido = cpf.replace(/^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g,'$1.$2.$3-$4');
    document.getElementById('cpf-input').value = cpfValido;
}

