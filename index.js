// do..while

/*

do {
    тут буде блок коду, який повторювано виконуватись
} while(умова)

*/

let pass = '1234';
let userPass;

do {
    userPass = prompt('Ввведіть свій пароль');
} while (userPass !== pass)