const cat = {
    nickname: 'Murzik',
    '1color': 'Black',
    breed: 'Siam',
    age: 1,
    test: 'test',
    eat: function() {
        return 'I am eating';
    },
    sleep: function() {
        return 'I am sleeping'
    },
}


cat.age += 1; // cat.age = cat.age + 1;

cat["1color"] = 'White';

// ВИДАЛЕННЯ ВЛАСТИВОСТЕЙ / МЕТОДІВ

cat.test = undefined; // BAD PRACTICE

delete cat.test; // GOOD PRACTICE

delete cat.sleep;