//LEARNING TYPESCRIPT WITH CARLOS LEVIR
//--------------------------------------------


// Tipos: 

const string: string = "texto";
const booleano: boolean = true;
const numero: number = 10.5;

const array: string[] = ['texto1','texto2'];
const tupla: [number, string] = [1,'string'];

enum Theme{
    Dark = 'dark',
    Light = 'light',
}

let any: any = '';
any = 10;

let unknown: unknown = '';
unknown = true; //Não permite torcar o tipo depois, como o ANY

function neverWillStop() : never{
    while (true){
        console.log('Running as never( stop)')
    }
    // throw new Error('Errors in never')
}

function sum(firstNumber: number, secondNumber: number) : string{
    return String(firstNumber + secondNumber);
}

const result = sum(10,20);
//result.split('');

let indefinido = undefined;
let nulo = null;

const obj : object = {} //any dos objects

const str = 'text';

// ====================================

interface User {
    name: string;
    age?: number;
}

interface PrintUserReturn{
    age: number;
    city: string;
}

function printUser(user : User) : PrintUserReturn{
    console.log(user.name);
    console.log(user.age);

    return { age:22, city:'Fortaleza' }
}

function getGithubUser(username: string) : User{
    const result = {
        data:{
            name:'Levir'
        }
    }

    return result.data;
}

//Union: |
//Type alias

type NumberOrString = number | string | boolean | User;

function printNumberOrString(numberOrString : NumberOrString){
    console.log(numberOrString)
};

// type TypeTheme = Dark | Light;

interface ContaPessoaFisica {
    cpf: string;
}

const novaConta : ContaPessoaFisica = {
    cpf:'123',
}

function calcTaxaPessoaFisica(conta : ContaPessoaFisica & { cnpj:string }){

}

// calcTaxaPessoaFisica( novaConta );

interface ContaPessoaJuridica {
    cnpj: string;
}

// Intersection &
//Type Alias
type ContaMEI = ContaPessoaJuridica | ContaPessoaFisica;

const novoMei : ContaMEI = {
    cpf:'123',
    cnpj:'123',
}


// Utility Types

interface GithubUserData {
    // login:string ,
    // id:string ,
    // node_id:string ,
    // avatar_url:string ,
    // gravatar_id:string ,
    // url:string ,
    // html_url:string ,
    // followers_url:string,
    // following_url:string ,
    // gists_url:string ,
    // starred_url:string,
    // subscriptions_url:string ,
    // organizations_url:string ,
    // repos_url:string ,
    // events_url:string ,
    // received_events_url:string ,
    // type:string ,
    // site_admin:string ,
    // name:string ,
    // company:string ,  
    // blog:string,
    // location:string ,
    // email:string ,
    // hireable:string ,
    // bio:string ,
    // twitter_username:string ,
    // public_repos:string ,
    // public_gists:string ,
    followers:string ,
    following:string ,
}

//Partial
function printGithubDataPartial(user : Partial<GithubUserData>){
    console.log(user)
}

//Pick
function printGithubDataPick(user : Pick<GithubUserData, "followers" |"following">){
    console.log(user.followers);
    console.log(user.following)
}

//Omit
function printGithubDataOmit(user : Omit<GithubUserData, "login">){
    console.log(user.followers);
    console.log(user.following)
}

//Readonly

const newGithubUser: Readonly<GithubUserData> = {
    following:'190',
    followers:'190',
};

// newGithubUser.followers = '200'; não da pra alterar com readonly

//Generics : Funcionalidades que permitem a passagem de tipos

// S - State
// T- Types
// K -key
// V -value
// E - element

function print<S>(param: S ){
    let value : S = param;
    console.log(param)
}

function printNumber(param: number ){
    print<number>(param);
}

print<string>('texto');
printNumber(10);


function useState<S extends number | string = string>(initialState?: S){
    let state = initialState;

    function setState(newState:S){
        state = newState;

        return state;
    }

    return { state,setState };
}

const state = useState<number>();

// console.log(state.setState('contador'))

type Callback =  (result:string) => void
function printaAlgoNaTela(callback:Callback){

}
function callback(nome:string){

}

printaAlgoNaTela(callback);