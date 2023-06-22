// Конструктор Map при створенні об'єкта очікує кортежі 
// (у випадку, якщо ви хочете проініціалузвати Map чимось при створенні)
const map1 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);

/*

const entriesIterator = map1.entries()
undefined
entriesIterator
MapIterator {'key1' => 'test', 'key2' => 'value2', 'key3' => 'value3'}[[Entries]]0: {"key1" => "test"}1: {"key2" => "value2"}2: {"key3" => "value3"}[[Prototype]]: Map Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "entries"
entriesIterator.next().value
(2) ['key1', 'test']
entriesIterator.next().value
(2) ['key2', 'value2']
entriesIterator.next().value
(2) ['key3', 'value3']
entriesIterator.next().value
undefined

*/

/*

const keysIterator = map1.keys();
undefined
keysIterator
MapIterator {'key1', 'key2', 'key3'}[[Entries]]0: "key1"1: "key2"2: "key3"[[Prototype]]: Map Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "keys"
keysIterator.next().value
'key1'
keysIterator.next().value
'key2'
keysIterator.next().value
'key3'
keysIterator.next().value
undefined

*/

/*

const valuesIterator = map1.values();
undefined
valuesIterator
MapIterator {'value1', 'value2', 'value3'}[[Entries]]0: "value1"1: "value2"2: "value3"[[Prototype]]: Map Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "values"
valuesIterator.next().value
'value1'
valuesIterator.next().value
'value2'
valuesIterator.next().value
'value3'
valuesIterator.next().value
undefined

*/

map1.forEach((value, key, map) => {
    console.log(`Value: ${value}, Key: ${key}`)
})

/*

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
// Expected result: true
// True indicates successful removal

*/

/*

const map1 = new Map();

map1.set('bar', 'baz');
map1.set(1, 'foo');

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);
// Expected output: 0

*/

console.log(...map1)
console.log(...map1.keys())
console.log(...map1.values())