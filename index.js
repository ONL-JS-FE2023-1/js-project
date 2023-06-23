const monitor = {
    sizes: {
        height: {
            value: 30,
            scale: 'cm'
        },
        width: {
            value: 50,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Ggrc'
    },
    color: 'white',
    resolution: '4K'
}

/*

Написати функцію, яка приймає об'єкт монітораю, 
виймає з нього розміри ширини і висоти і на їх основі повертає розмір діагоналі 


формула розрахунку для діагоналі = корінь квадратний(від суми квадратів сторін)

d = Math.sqrt(a*a + b*b)

*/

function getDiagonal({sizes: {height: {value: a}, width: {value: b}}}) {
    return Math.sqrt(a*a + b*b);
}


console.log(getDiagonal(monitor));