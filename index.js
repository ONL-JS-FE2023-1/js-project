// task 1

const userChoice = prompt('Оберіть напій:\n 1 - Сік,\n 2 - Вода,\n 3 - Кава,\n 4 - Чай,\n 5 - Лимонад');

switch(userChoice) {
    case '1': {
        console.log('Сік');
        break;
    }
    case '2': {
        console.log('Вода');
        break;
    }
    case '3': {
        console.log('Кава');
        break;
    }
    case '4': {
        console.log('Чай');
        break;
    }
    case '5': {
        console.log('Лимонад');
        break;
    }
    default: {
        console.log('Оберіть щось із меню!');
    }
}