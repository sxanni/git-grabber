// get the github username input form
const gitHubForm = document.getElementById('gitHubForm');

    
// Listen for submissions on Github username input form
gitHubForm.addEventListener('submit', (e) =>{

    // prevent default form submission action
    e.preventDefault();

    // Get the github username input field on the DOM
    let usernameInput = document.getElementById('usernameInput');

    // Get the Value of the github username input field
    let gitHubUsername = usernameInput.value;

    // Run guthub API 
    requestUserRepos(gitHubUsername)

});

function requestUserRepos(username) {

    //create new XMLHTTPREQUEST object
    const xhr = new XMLHttpRequest();

    //github endpoint, dynamically passing in specifid username
    const url = `https://api.github.com/users/${username}/repos`;

    // open a new connection, using GET request via URL endpoint
    // Providing 3 arguments (Get/POST, the url, async true/false)
    xhr.open('GET', url, true);

    // When the request is received
    // proccess it here

    xhr.onload = function(){
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        console.log(data);

        let ul = document.getElementById('userRepos');
        userRepos.innerHTML = (`<div style="background-color: white ;"><h1 style="margin-left: auto;margin-right: auto;"> ${data[0].owner.login}</h1>
        <img src=${data[0].owner.avatar_url} alt="The Repo Owner" width="200" height="200" style="margin-left: auto;margin-right: auto;margin-bottom: 30px;">
        <p " width="200" height="200" style="margin-left: auto;margin-right: auto;margin-bottom: 30px;">Followers : ${data[0].owner.followers_url.length}  </p> </div>`)
        
        for (let i = 0; i < data.length; i++) {
            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');

           // Add Bootstrap list item class to each li
            li.classList.add('list-group-item');

            // Create the html markup for each LI
            li.innerHTML = (`
            <div style="background-color: white ;">
            <p><strong>Repo:</strong> ${data[i].name}</p>
            <p><strong>Description:</strong> ${data[i].description}</p>
            <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            </div>
        `);
        
        // Append each li to the ul
        ul.appendChild(li)
            
        }


    }
    
    // Send the request to the server
    xhr.send();


}





// // console.log('hello world')

// //get the github username input form
// const gitHubForm = document.getElementById("gitHubForm");

// //listen for submission on github username form

// gitHubForm.addEventListener('submit', (e) => {
//   //prevent default form submission action
//   e.preventDefault(); //does not refresh when we click submit

//   //GET the gitHUb username input field on the DOM into usernameInput var
//   let usernameInput = document.getElementById('usernameInput');

//   //get the value of the github username input field;
//   let gitHubUsername = usernameInput.value;

//   //run github API
//   requestUserRepos(gitHubUsername);
// });

// //function for above github API running
// function requestUserRepos(username) {
//   //create new XMLHTTPREQUEST object
//   const xhr = new XMLHttpRequest();

//   //github endpoint, dynamically passing in specified username
//   const url = `https://api.github.com/users/${username}/repos`;

//   //open a new connection, using Get request via url endpoint//
//   //providing 3 arguments (GET/post, the url, async true/false)
//   xhr.open("GET", url, true);

//   // when the request is recieved
//   //process it here

//   xhr.onload = function () {
//     //parse API data into JSON
//     const data = JSON.parse(this.response);
//     console.log(data);

//     let ul = document.getElementById("userRepos");
//     userRepos.innerHTML =
//       (`
//         <h1 style="margin: auto;"> ${data[0].owner.login} </h1> 
//         <img src=${data[0].owner,avatar_url} width="150" height="150">
//         `)

//     for (let i = 0; i < data.length; i++) {
//       //each time this runs

//       // crate variable to add li to ul in index
//       let li = document.createElement('li');

//       li.classList.add('list-group-item'); //adding bootstrap li class to each list item(li)

//       //take each li and write in inner html
//       li.innerHTML = (`<p><strong>Repo:</strong> ${data[i].name}</p>`);

//       //append li to ul
//       ul.appendChild(li)
//     }
//   }
//   xhr.send();
// }