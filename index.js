function washingFace() {
    // ............
    console.log('Washing the face');
}

function brushingTeeth() {
    // ............
    console.log('Brushing teeth');
}

function skincare() { // догляд за шкірою
    // ............
    console.log('Skincare');
}

function coding() {
    // ............
    console.log('Coding');
}

function sleep() {
    // ............
    console.log('Sleep');
}

function goToWork() {
    // ............
    console.log('Go to work');
}

function goToHome() {
    // ............
    console.log('Go home');
}

function breakfast() {
    // ............
    console.log('Breakfast');
}

function education() {
    // ............
    console.log('Education');
}

function lunch() { // Обід
    // ............
    console.log('Lunch');
}

function dinner() {
    // ............
    console.log('Dinner');
}

function walk() { // Прогулянка
    // ............
    console.log('Walk');
}

function shower() {
    // ............
    console.log('Shower');
}

function todo(timeOfDay) { // Higher-order function
    switch (timeOfDay) {
        case 'morning': {

            console.log('---->>>> MORNING <<<<----');
            washingFace();
            brushingTeeth();
            skincare();
            walk();
            breakfast();



            break;
        }
        case 'lunch': {

            console.log('---->>>> LUNCH <<<<----');
            goToWork();
            coding();
            lunch();
            coding();
            walk();
            goToHome();



            break;
        }
        case 'evening': {

            console.log('---->>>> EVENING <<<<----');
            education();
            dinner();
            coding();
            shower();
            brushingTeeth();
            washingFace();
            skincare();
            sleep();



            break;
        }
        default: {
            console.log('Error! Enter a valid time of day!');
        }
    }
}

todo('morning');
todo('lunch');
todo('evening');