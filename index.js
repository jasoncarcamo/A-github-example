
'use strict';


function getProfile(){
    let input = $('#userinput').val();

   
    fetch(`https://api.github.com/users/${input}/repos`)
    .then( response => response.json())
    .then( responseJson => displayRepo(responseJson, input));
}

function displayRepo(responseJson, input){
    console.log(responseJson);
    for(let i = 0; i < responseJson.length; i++){
        $('#container').append(`<li><a href="${responseJson[i].clone_url}">${responseJson[i].description}</a></li>`)
    }
}

$('form').submit(function(event){
    event.preventDefault();
    getProfile();
})
