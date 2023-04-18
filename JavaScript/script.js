// BMR Calculator START
var Calories = document.querySelector(`.bmr-calculator .result .calories`);
var calculateBtn = document.querySelector(`.bmr-calculator .result .calculate-btn`);
var age= document.querySelector(`.bmr-calculator form #age`);
var height = document.querySelector(`.bmr-calculator form #height`);
var weight = document.querySelector(`.bmr-calculator form #weight`);

//Female = 655 + (4.35 × weight in pounds) + (4.7 × height in inches) − (4.7 × age in years)
//Male = 66 + (6.23 × weight in pounds) + (12.7 × height in inches) − (6.8 × age in years)

var calculateBMR = (weight, height, age, gender) => {
    if(gender == `male`){
        return 66 + (6.23 * weight) + (12.7 * height ) - (6.8 * age );
    }
    return 655 + (4.35 * weight) + (4.7 * height ) - (4.7 * age );
};


calculateBtn.addEventListener(`click`, () => {
    
    let genderValue = document.querySelector(`.bmr-calculator form input[name = "gender"] :checked`
    );
    

    let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

    Calories.innerHTML = BMR.toLocaleString(`en-us`);
});


// BMR Calculator START


var workoutlist = {
    arm: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps'

          fetch(url,options)
          .then(function (response) {
              return response.json()
          })
          .then(function (data) {
              console.log(data)
          })
    },

    abs: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?muscle=abdominals'

          fetch(url,options)
          .then(function (response) {
            return response.json()
        }) 
          .then(function(data) {
            console.log(data)
          })
    },

    back: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?muscle=lower_back'

          fetch(url,options)
          .then(function (response) {
            return response.json()
        }) 
          .then(function(data) {
            console.log(data)
          })
    },

    calves: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?muscle=calves'

          fetch(url,options)
          .then(function (response) {
            return response.json()
        }) 
          .then(function(data) {
            console.log(data)
          })
    },

    cardio: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?type=cardio'

          fetch(url,options)
          .then(function (response) {
            return response.json()
        }) 
          .then(function(data) {
            console.log(data)
          })
    },

    chest: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?muscle=chest'

          fetch(url,options)
          .then(function (response) {
            return response.json()
        }) 
          .then(function(data) {
            console.log(data)
          })
    },

    legs: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?muscle=hamstrings'

          fetch(url,options)
          .then(function (response) {
            return response.json()
        }) 
          .then(function(data) {
            console.log(data)
          })
    },

    shoulder: function () {
        let options = {
            method: 'GET',
            headers: { 'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO' }
          }
          
          let url = 'https://api.api-ninjas.com/v1/exercises?muscle=traps'

          fetch(url,options)
          .then(function (response) {
            return response.json()
        }) 
          .then(function(data) {
            console.log(data)
          })
    }
}

workoutlist.arm()
workoutlist.abs()
workoutlist.back()
workoutlist.calves()
workoutlist.chest()
workoutlist.legs()
workoutlist.shoulder()