var randomDogs = require('./apis');

let url = 'https://api.thedogapi.com/v1/images/search';

// Random Dog 1

randomDogs.randomDog1(url).then(function(result){
    console.log('\nRandom Dog 1 : \n');
    console.log(result);
}).catch(function(err){
    console.log('Error is : ' + err);
})

// Random Dog 2

randomDogs.randomDog2(url).then(function(result){
    console.log('\nRandom Dog 2 : \n');
    console.log(result);
}).catch(function(err){
    console.log('Error is : ' + err);
})