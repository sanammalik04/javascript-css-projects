// const friend = {
//     name : 'Laurence Svekis',
//     age: 40,
//     gender: 'male',
//     location: {
//         city: 'Toronto',
//         country: 'Canada',
//         address: '100 Main St.'

//     }
// }

// // console.log(friend)
// // console.log(friend.name)
// // console.log(friend['name']
// // console.log(friend.location.city)

// const h1City = document.querySelector('.output').textContent = friend['location']['country']



// const friend1 ={
//     name:'Laurence'
// };

// const friend2 = {
//     name: 'John'
// }

// const friend3 = {
//     name: 'Jane'
// }

// const friends  = [friend1, friend2];
// friends.push(friend3)

// console.log(friends)

// for(const [key, value] of Object.entries(friends)){
//     console.log(key);
//     friends[key].last = 'Smith'
//     console.log(friends)
    
// }

// for(let x=0; x<friends.length; x++){
//     console.log(friends[x].name);
// }

// const friendList = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
// const newArray = [];

// friendList.forEach(function(item){
//     console.log(item);
//     let temp = {
//         name : item
//     }
//     console.log(temp)
//     newArray.push(temp)
// })
// console.log(newArray)

// const output = document.querySelector('.output');

// let xHR = new XMLHttpRequest();
// xHR.open('GET', url);
// xHR.responseType = 'json';
// xHR.onload = function(){
    //     console.log(xHR.response);
    //     let data = xHR.response
    //     data.books.forEach(val => {
        //         output.innerHTML += val.title + '<br>';
        //     })
        // }
        // xHR.send();
        // console.log(xHR)
        
        
        // const url = "json.json";
        // //fetch(url).then(res => res.json()).then(json => console.log(json));
        // const output = document.querySelector('.output');
        // fetch(url).then(function (res) {
        //   return res.json()
        // }).then(function (json) {
        //   console.log(json)
        // })
        // fetch(url).then(res => res.json()).then(json => {
        //   console.log(json.books)
        //   json.books.forEach(val => {
        //     output.innerHTML += val.title + '<br>';
        //   })
        // })



        ////////////////////////////////////////////////// RANDOM USER API /////////////////////////////////////////////////////////////////////////////


        // const userUrl = 'https://randomuser.me/api/?results=10'
        // const btn = document.querySelector('button');
        // const output = document.querySelector('.output');
        
        // btn.addEventListener('click', getData);
        
        // function getData(){
        //     output.innerHTML = "";
        //     fetch(userUrl).then(function (res){
        //         return res.json()
        //     }).then(function(data){
        //         console.log(data.results)
        //         data.results.forEach(val => {
        //             console.log(val.name)
        //             console.log(val.picture.thumbnail)
        //             let div = document.createElement('div');
        //             div.textContent = `${val.name.title} ${val.name.first} ${val.name.last}`;

        //             let ima = document.createElement('img');
        //             ima.setAttribute('src', val.picture.thumbnail);
        //             ima.style.display = 'block';
                    
        //             div.appendChild(ima);
        //             output.appendChild(div)
        //         })
        //     })

        // }

        ////////////////////////////////////////////////// END RANDOM USER API /////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////// REDDIT API /////////////////////////////////////////////////////////////////////////////

        // const redditUrl = 'https://www.reddit.com/r/test/top/.json?limit=5'
        // const output = document.querySelector('.output');
        // const btnLoad = document.createElement('button')
        // btnLoad.innerText = 'Load'
        // output.appendChild(btnLoad)
        // btnLoad.addEventListener('click', getData)


        
        // function getData(){
        //     fetch(redditUrl).then(function (res){
        //         return res.json()
        //     }).then(function(data){
        //         console.log(data.data.children)
        //         makeHTML(data.data.children)
        //     })
            
        // }
        
        // function makeHTML(val){
        //     output.innerHTML = "";
        //     val.forEach(item => {
        //         console.log(item.data.title)
        //         console.log(item.data.url)
        //         let div = document.createElement('div');
        //         div.innerHTML = `${item.data.title} <a href = "${item.data.url}" target="_blank">Link</a>`;
        //         output.appendChild(div)
        //     });

        // }
        ////////////////////////////////////////////////// END REDDIT API /////////////////////////////////////////////////////////////////////////////


    // ////////////////////////// GIT REPO API/////////////////////////////////////////////////////////////////////////////////////////

        // const urlGit = 'https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc'
        // const btn = document.querySelector('button')
        // const output = document.querySelector('.output');
        // btn.addEventListener('click', getData)

        // function getData(e){
        //     e.preventDefault();
        //     fetch(urlGit).then(function (res){
        //         return res.json()

        //     }).then(function(data){
        //         console.log(data.items)
        //         makeHTML(data.items)
        //     })
        // }

        // function makeHTML(val){
        //     output.innerHTML = "";
        //     for(let x = 1; x <val.length; x++){
        //         console.log(val[x].name)
        //         console.log(val[x].description)
        //         console.log(val[x].url)
        //         let div = document.createElement('div');
        //         div.xurl = val[x].url
        //         div.innerHTML = `${val[x].name} ${val[x].description}`
        //         output.appendChild(div)
        //         div.addEventListener('click', function(e){
        //             fetch(val[x].url).then(function(res){
        //                 return res.json()
        //             }).then(function(data){
        //                 console.log(data)
        //                 let span = document.createElement('span');
        //                 span.textContent = data.html_url;
        //                 span.style.color = "red"
        //                 div.appendChild(span)
        //             })
        //         }, {
        //             once:true
        //         })
        //     }
        // }
////////////////////////////////////////////////// END GIT API /////////////////////////////////////////////////////////////////////////////

// ////////////////////// MY BOOKS API //////////////////////////////////////////////////////////////////////////
    // fetch(url).then(function (res) {
    //   console.log(res);
    //   return res.json()
    // }).then(function (data) {
    //   console.log(data.data);
    //   data.data.forEach(function (val) {
    //     output.innerHTML += val.firstName + ' ' + val.lastName + '<br>';
    //   });
    // }).catch(function (error) {
    //   console.log(error);
    // })
////////////////////////////////////////////////// END MY BOOKS API /////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////// USER API /////////////////////////////////////////////////////////////////////////////

// const url = "https://myjson.dit.upm.es/api/bins/sdv";
// const output = document.querySelector('.output');

// fetch(url)
// .then(res => res.json())
// .then(info => {
//     console.log(info.books);
//     info.books.forEach(val => {
//         output.innerHTML += val.title + ' ' + val.author + '<br>';
//     });
// }).catch(error => {
//     console.log(error)
// })

////////////////////////////////////////////////// END USER API /////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////// STACKOVERFLOW API /////////////////////////////////////////////////////////////////////////////
// const url = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow';
// const btn = document.querySelector('button');
// const output = document.querySelector('.output');
// btn.addEventListener('click', getData);
 
// function getData(e) {
//   e.preventDefault();
//   fetch(url).then(function (rep) {
//     return rep.json()
//   }).then(function (data) {
//     console.log(data.items);
//     data.items.forEach(function (item) {
//       console.log(item.question_id);
//       console.log(item.title);
//       console.log(item.link);
//       let div = document.createElement('div');
//       div.innerHTML = `${item.question_id} <a href="${item.link}" target="_blank">${item.title}</a>`;
//       output.appendChild(div);
//     })
//   }).catch(function (e) {
//     console.log(e);
//   })
// }
////////////////////////////////////////////////// END STACKOVERFLOW API /////////////////////////////////////////////////////////////////////////////

