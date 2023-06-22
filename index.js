// {
//     {
//         {
//             {
//                 {
//                     {

//                     }
//                 }
//                 {

//                 }
//             }
//             {
//                 {

//                 }
//             }
//         }
//         {
//             {

//             }
//         }
//     }
// }

/* Деструктуризація */

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


// колір
monitor.color

// висота
monitor.sizes.height

// отримати значення висоти
monitor.sizes.height.value

// const height = monitor.sizes.height.value;

const {resolution, color: monitorColor} = monitor; // const resolution = monitor.resolution

// Задача: витягнути значення ширина та висоти з об'єкту
const {sizes: {
    height: {
        value: heightValue // const heightValue = monitor.sizes.height.value
    },
    width: {
        value: widthValue // const widthValue = monitor.sizes.width.value
    }
}} = monitor;

// ...