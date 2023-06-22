function checkAngram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const map1 = new Map(); // Мапа для першого рядка
    const map2 = new Map(); // Мапа для другого рядка

    // Проходимося по першому рядку і додаємо символи до map1
    for(let char of str1) {
        map1.set(char, map1.has(char) ? map1.get(char) + 1 : 1);
    }

    // Проходимося по другому рядку і додаємо символи до map2
    for(let char of str2) {
        map2.set(char, map2.has(char) ? map2.get(char) + 1 : 1);
    }

    /*
    мара

    мапа1:
    м - 1
    а - 2
    р - 1

    рама

    мапа2:
    р - 1
    а - 2
    м - 1

    */

    if(map1.size !== map2.size) {
        return false; // Якщо розміри мап не співпадають, рядки точно не є анаграмами
    }

    // порівнюємо вміст мап
    map1.forEach((value, key) => {
        if(map2.get(key) !== value) {
            return false; // Якщо значення не співпадають, рядки не є анаграмами
        }
    })

    return true; // Якщо всі перевірки пройдені, рядки є анаграмами
}

/*

checkAngram('рама', 'мара');
true


checkAngram('test', 'setT');
true


checkAngram('local', 'vogue');
false


checkAngram('str', 'casesssss');
false

*/