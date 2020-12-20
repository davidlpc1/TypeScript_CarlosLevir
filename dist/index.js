"use strict";
//LEARNING TYPESCRIPT WITH CARLOS LEVIR
//--------------------------------------------
// Tipos: 
var string = "texto";
var booleano = true;
var numero = 10.5;
var array = ['texto1', 'texto2'];
var tupla = [1, 'string'];
var Theme;
(function (Theme) {
    Theme["Dark"] = "dark";
    Theme["Light"] = "light";
})(Theme || (Theme = {}));
var any = '';
any = 10;
var unknown = '';
unknown = true; //Não permite torcar o tipo depois, como o ANY
function neverWillStop() {
    while (true) {
        console.log('Running as never( stop)');
    }
    // throw new Error('Errors in never')
}
function sum(firstNumber, secondNumber) {
    return String(firstNumber + secondNumber);
}
var result = sum(10, 20);
//result.split('');
var indefinido = undefined;
var nulo = null;
var obj = {}; //any dos objects
var str = 'text';
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
    return { age: 22, city: 'Fortaleza' };
}
function getGithubUser(username) {
    var result = {
        data: {
            name: 'Levir'
        }
    };
    return result.data;
}
function printNumberOrString(numberOrString) {
    console.log(numberOrString);
}
;
var novaConta = {
    cpf: '123',
};
function calcTaxaPessoaFisica(conta) {
}
var novoMei = {
    cpf: '123',
    cnpj: '123',
};
//Partial
function printGithubDataPartial(user) {
    console.log(user);
}
//Pick
function printGithubDataPick(user) {
    console.log(user.followers);
    console.log(user.following);
}
//Omit
function printGithubDataOmit(user) {
    console.log(user.followers);
    console.log(user.following);
}
//Readonly
var newGithubUser = {
    following: '190',
    followers: '190',
};
// newGithubUser.followers = '200'; não da pra alterar com readonly
//Generics : Funcionalidades que permitem a passagem de tipos
// S - State
// T- Types
// K -key
// V -value
// E - element
function print(param) {
    var value = param;
    console.log(param);
}
function printNumber(param) {
    print(param);
}
print('texto');
printNumber(10);
function useState(initialState) {
    var state = initialState;
    function setState(newState) {
        state = newState;
        return state;
    }
    return { state: state, setState: setState };
}
var state = useState();
function printaAlgoNaTela(callback) {
}
function callback(nome) {
}
printaAlgoNaTela(callback);
