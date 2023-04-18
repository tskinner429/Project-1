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