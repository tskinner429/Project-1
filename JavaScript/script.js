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
                    // mainBox.appendChild(document.createElement("div").setAttribute("id" , "1"))
                    // .appendChild(document.createElement("h2"))
                    // .appendChild(document.createElement("p"))
                    // mainBox.textContent = "hello world"
                    // const displayArmTitle = document.createElement('h2')
                    const content = `
                    <div class="card" id="card-${[i]}">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].equipment}</p>
                    <p>${data[i].instructions}</p>
                    </div>` 
                    console.log(armtitle)
                    mainBox.innerHTML += content
                    // const contentArmTitle = document.createTextNode(armtitle)
                    // displayArmTitle.appendChild(contentArmTitle)
                    // document.getElementById("workoutTitle").appendChild(displayArmTitle)

                    // var absEquipment = data[i].equipment
                    // const displayAbsEquipment = document.createElement('h3')
                    // const conetentAbsEquipment = document.createTextNode(absEquipment)
                    // displayAbsEquipment.appendChild(conetentAbsEquipment)
                    // document.getElementById('workoutEquipment').appendChild(displayAbsEquipment)

                    // var absInformation = data[i].instructions
                    // const displayAbsInfo = document.createElement('p')
                    // const contentAbsInfo = document.createTextNode(absInformation)
                    // displayAbsInfo.appendChild(contentAbsInfo)
                    // document.getElementById('workoutInfo').appendChild(displayAbsInfo)
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
                    const displayAbsTitle = document.createElement('h2')
                    const contentAbsTitle = document.createTextNode(abstitle)
                    displayAbsTitle.appendChild(contentAbsTitle)
                    document.getElementById("workoutTitle").appendChild(displayAbsTitle)

                    var absEquipment = data[i].equipment
                    const displayAbsEquipment = document.createElement('h3')
                    const contentAbsEquipment = document.createTextNode(absEquipment)
                    displayAbsEquipment.appendChild(contentAbsEquipment)
                    document.getElementById('workoutEquipment').appendChild(displayAbsEquipment)

                    var absInformation = data[i].instructions
                    const displayAbsInfo = document.createElement('p')
                    const contentAbsInfo = document.createTextNode(absInformation)
                    displayAbsInfo.appendChild(contentAbsInfo)
                    document.getElementById('workoutInfo').appendChild(displayAbsInfo)
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
                    const displayBackTitle = document.createElement('h2')
                    const contentBackTitle = document.createTextNode(backTitle)
                    displayBackTitle.appendChild(contentBackTitle)
                    document.getElementById("workoutTitle").appendChild(displayBackTitle)

                    var backEquipment = data[i].equipment
                    const displayBackEquipment = document.createElement('h3')
                    const contentBackEquipment = document.createTextNode(backEquipment)
                    displayBackEquipment.appendChild(contentBackEquipment)
                    document.getElementById('workoutEquipment').appendChild(displayBackEquipment)

                    var backInformation = data[i].instructions
                    const displayBackInfo = document.createElement('p')
                    const contentBackInfo = document.createTextNode(backInformation)
                    displayBackInfo.appendChild(contentBackInfo)
                    document.getElementById('workoutInfo').appendChild(displayBackInfo)
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
                    const displayCalvesTitle = document.createElement('h2')
                    const contentCalvesTitle = document.createTextNode(calvesTitle)
                    displayCalvesTitle.appendChild(contentCalvesTitle)
                    document.getElementById("workoutTitle").appendChild(displayCalvesTitle)

                    var calvesEquipment = data[i].equipment
                    const displayCalvesEquipment = document.createElement('h3')
                    const contentCalvesEquipment = document.createTextNode(calvesEquipment)
                    displayCalvesEquipment.appendChild(contentCalvesEquipment)
                    document.getElementById('workoutEquipment').appendChild(displayCalvesEquipment)

                    var calvesInformation = data[i].instructions
                    const displayCalvesInfo = document.createElement('p')
                    const contentCalvesInfo = document.createTextNode(calvesInformation)
                    displayCalvesInfo.appendChild(contentCalvesInfo)
                    document.getElementById('workoutInfo').appendChild(displayCalvesInfo)
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
                    const displayCardioTitle = document.createElement('h2')
                    const contentCardioTitle = document.createTextNode(cardiotitle)
                    displayCardioTitle.appendChild(contentCardioTitle)
                    document.getElementById("workoutTitle").appendChild(displayCardioTitle)

                    var cardioEquipment = data[i].equipment
                    const displayCardioEquipment = document.createElement('h3')
                    const contentCardioEquipment = document.createTextNode(cardioEquipment)
                    displayCardioEquipment.appendChild(contentCardioEquipment)
                    document.getElementById('workoutEquipment').appendChild(displayCardioEquipment)

                    var cardioInformation = data[i].instructions
                    const displayCardioInfo = document.createElement('p')
                    const contentCardioInfo = document.createTextNode(cardioInformation)
                    displayCardioInfo.appendChild(contentCardioInfo)
                    document.getElementById('workoutInfo').appendChild(displayCardioInfo)
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
                    var chesttitle = data[i].name
                    const displayChestTitle = document.createElement('h2')
                    const contentChestTitle = document.createTextNode(chesttitle)
                    displayChestTitle.appendChild(contentChestTitle)
                    document.getElementById("workoutTitle").appendChild(displayChestTitle)

                    var absEquipment = data[i].equipment
                    const displayAbsEquipment = document.createElement('h3')
                    const contentAbsEquipment = document.createTextNode(absEquipment)
                    displayAbsEquipment.appendChild(contentAbsEquipment)
                    document.getElementById('workoutEquipment').appendChild(displayAbsEquipment)

                    var absInformation = data[i].instructions
                    const displayAbsInfo = document.createElement('p')
                    const contentAbsInfo = document.createTextNode(absInformation)
                    displayAbsInfo.appendChild(contentAbsInfo)
                    document.getElementById('workoutInfo').appendChild(displayAbsInfo)
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
                    var legstitle = data[i].name
                    const displayLegsTitle = document.createElement('h2')
                    const contentLegsTitle = document.createTextNode(legstitle)
                    displayLegsTitle.appendChild(contentLegsTitle)
                    document.getElementById("workoutTitle").appendChild(displayLegsTitle)

                    var legsEquipment = data[i].equipment
                    const displayLegsEquipment = document.createElement('h3')
                    const contentLegsEquipment = document.createTextNode(legsEquipment)
                    displayLegsEquipment.appendChild(contentLegsEquipment)
                    document.getElementById('workoutEquipment').appendChild(displayLegsEquipment)

                    var legsInformation = data[i].instructions
                    const displayLegsInfo = document.createElement('p')
                    const contentLegsInfo = document.createTextNode(legsInformation)
                    displayLegsInfo.appendChild(contentLegsInfo)
                    document.getElementById('workoutInfo').appendChild(displayLegsInfo)
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
                    var shouldertitle = data[i].name
                    const displayShoulderTitle = document.createElement('h2')
                    const contentShoulderTitle = document.createTextNode(shouldertitle)
                    displayShoulderTitle.appendChild(contentShoulderTitle)
                    document.getElementById("workoutTitle").appendChild(displayShoulderTitle)

                    var shoulderEquipment = data[i].equipment
                    const displayShoulderEquipment = document.createElement('h3')
                    const contentShoulderEquipment = document.createTextNode(shoulderEquipment)
                    displayShoulderEquipment.appendChild(contentShoulderEquipment)
                    document.getElementById('workoutEquipment').appendChild(displayShoulderEquipment)

                    var shoulderInformation = data[i].instructions
                    const displayShoulderInfo = document.createElement('p')
                    const contentShoulderInfo = document.createTextNode(shoulderInformation)
                    displayShoulderInfo.appendChild(contentShoulderInfo)
                    document.getElementById('workoutInfo').appendChild(displayShoulderInfo)
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