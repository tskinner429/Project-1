if (window.location.href.includes =( 'targetedworkouts.html')) {
    var workoutlist = {
        arm: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)


                for (var i = 0; i < 10; i++) {
                    var armtitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(armtitle)
                    mainBox.innerHTML += content
                }
            });
        },

        abs: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?muscle=abdominals'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)

                for (var i = 0; i < 10; i++) {
                    var abstitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(abstitle)
                    mainBox.innerHTML += content
                }
            });
        },

        back: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?muscle=lower_back'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)

                for (var i = 0; i < 10; i++) {
                    var backTitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(backTitle)
                    mainBox.innerHTML += content
                }
            })
        },

        calves: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?muscle=calves'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)

                for (var i = 0; i < 10; i++) {
                    var calvesTitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(calvesTitle)
                    mainBox.innerHTML += content
                }
            })
        },

        cardio: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?type=cardio'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)

                for (var i = 0; i < 10; i++) {
                    var cardiotitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(cardiotitle)
                    mainBox.innerHTML += content
                }
            })
        },

        chest: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?muscle=chest'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)

                for (var i = 0; i < 10; i++) {
                    var chestTitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(chestTitle)
                    mainBox.innerHTML += content
                }
            })
        },

        legs: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?muscle=hamstrings'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)

                for (var i = 0; i < 10; i++) {
                    var legsTitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(legsTitle)
                    mainBox.innerHTML += content
                }
            })
        },

        shoulder: function () {
            let options = {
                method: 'GET',
                headers: {
                    'x-api-key': 'MEse9WuVgjjzP6YYlCv3pg==s93de26XwygSE5iO'
                }
            }

            let url = 'https://api.api-ninjas.com/v1/exercises?muscle=traps'

            fetch(url, options).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data)

                for (var i = 0; i < 10; i++) {
                    var shoulderTitle = data[i].name
                    var mainBox = document.getElementById("mainBox")
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(shoulderTitle)
                    mainBox.innerHTML += content
                }
            })
        }
    }
}


if (window.location.href.includes('index.html')) {
    var absbutton = document.getElementById('abs');
    absbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'abs') {
        workoutlist.abs()
    }
};


if (window.location.href.includes('index.html')) {
    var armbutton = document.getElementById('arms');
    armbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'arm') {
        workoutlist.arm()
    }
};


if (window.location.href.includes('index.html')) {
    var backbutton = document.getElementById('back');
    backbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'back') {
        workoutlist.back()
    }
};


if (window.location.href.includes('index.html')) {
    var calvesbutton = document.getElementById('calves');
    calvesbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'calves') {
        workoutlist.calves()
    }
};


if (window.location.href.includes('index.html')) {
    var cardiobutton = document.getElementById('cardio');
    cardiobutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'cardio') {
        workoutlist.cardio()
    }
};


if (window.location.href.includes('index.html')) {
    var chestbutton = document.getElementById('chest');
    chestbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'chest') {
        workoutlist.chest()
    }
};


if (window.location.href.includes('index.html')) {
    var legsbutton = document.getElementById('legs');
    legsbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'legs') {
        workoutlist.legs()
    }
};


if (window.location.href.includes('index.html')) {
    var sholderbutton = document.getElementById('sholder');
    sholderbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'sholder') {
        workoutlist.shoulder()
    }
};


if (window.location.href.includes('calorie.html')) {

var button = document.getElementById("Calculate")



function calculateCalorie(obj)
{
    console.log(obj.children[1].children[0].children[0].children[1].value)
                    const age = document.getElementById("age").value;
                    const gender = document.getElementById("gender").value;
                    const bodyFat = document.getElementById("bodyFat").value;
                    const height = document.getElementById("height").value;
                    const weight = document.getElementById("weight").value;
                    const activity = document.getElementById("activity").value;
                    const unit = document.getElementById("unit").value;
                    const formula = document.getElementById("formula").value;
                    
                    
            

                    let BMR = '';
                    if(formula == 0) // Mifflin
                    {
                        if(gender == 0){
                          BMR = 10*weight + 6.25*height - 5*age + 5  
                        } else{
                            BMR = 10*weight + 6.25*height - 5*age - 161
                        }
                      
                    }
                    else if(formula == 1) // Harris
                    {
                        if(gender == 0){
                            BMR = 13.397*weight + 4.799*height - 5.677*age + 88.362
                        } else {
                            BMR = 9.247*weight + 3.098*height - 4.330*age + 447.593
                        }
                      
                    }
                   

                    let ret = parseFloat(BMR)*parseFloat(activity);
                    if(unit == 'kilojoules')
                    {
                        ret = (ret*4.1868);
                    }

                    document.querySelector(".ans_calculate").innerHTML = '<div class="container"><h4 class="text-center form-control my-3 text-danger fs-4">You should consume <span class="text-white">'+Math.ceil(ret)+' '+unit+'/day </span> of calorie to maintain your weight.</h4></div>';
                }
button.addEventListener("submit" , function(event){
    event.preventDefault()
  
    calculateCalorie(event.target)
})}


if (window.location.href.includes('index.html')) {
    var legsbutton = document.getElementById('legs');
    legsbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'legs') {
        workoutlist.legs()
    }
};


if (window.location.href.includes('index.html')) {
    var sholderbutton = document.getElementById('sholder');
    sholderbutton.addEventListener('click', function () {
        var type = this.getAttribute('data-type')
        window.location.href = 'targetedworkouts.html?type=' + type;
    });
};
if (window.location.href.includes('targetedworkouts.html')) {
    var urlParams = new URLSearchParams(window.location.search);
    var type = urlParams.get('type')
    if (type === 'sholder') {
        workoutlist.shoulder()
    }
};




if (window.location.href.includes('calorie.html')) {

var button = document.getElementById("Calculate")



function calculateCalorie(obj)
{
    console.log(obj.children[1].children[0].children[0].children[1].value)
                    const age = document.getElementById("age").value;
                    const gender = document.getElementById("gender").value;
                    const bodyFat = document.getElementById("bodyFat").value;
                    const height = document.getElementById("height").value;
                    const weight = document.getElementById("weight").value;
                    const activity = document.getElementById("activity").value;
                    const unit = document.getElementById("unit").value;
                    const formula = document.getElementById("formula").value;
                    
                    
            

                    let BMR = '';
                    if(formula == 0) // Mifflin
                    {
                        if(gender == 0){
                          BMR = 10*weight + 6.25*height - 5*age + 5  
                        } else{
                            BMR = 10*weight + 6.25*height - 5*age - 161
                        }
                      
                    }
                    else if(formula == 1) // Harris
                    {
                        if(gender == 0){
                            BMR = 13.397*weight + 4.799*height - 5.677*age + 88.362
                        } else {
                            BMR = 9.247*weight + 3.098*height - 4.330*age + 447.593
                        }
                      
                    }
                   

                    let ret = parseFloat(BMR)*parseFloat(activity);
                    if(unit == 'kilojoules')
                    {
                        ret = (ret*4.1868);
                    }

                    document.querySelector(".ans_calculate").innerHTML = '<div class="container"><h4 class="text-center form-control my-3 text-danger fs-4">You should consume <span class="text-white">'+Math.ceil(ret)+' '+unit+'/day </span> of calorie to maintain your weight.</h4></div>';
                }
button.addEventListener("submit" , function(event){
    event.preventDefault()
  
    calculateCalorie(event.target)
})}