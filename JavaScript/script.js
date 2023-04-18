
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