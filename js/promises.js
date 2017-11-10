//
// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
//
//
//
//
// Generate a Personal Access Token for the github api.
// We will use this so that we don't get rate limited when talking
// to the github api. You can add the token to your requests like this:
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})


// Create a function that accepts a github username, and returns a promise
// that resolves with the date of the last commit that user made.
// Reference the github api documentation to achieve this.


function wait(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, number);
    })

}

    // console.log('HALLO');
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
    // wait(3000).then(() => console.log('You\'ll see this after 6 seconds'));





// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(users => users.map(user => user.login))
//     .then(usernames => users.forEach((username) => {
//         // do something with each username
//     })
//         .catch(error => console.error(error));




function github(username) {

    let promise = fetch('https://api.github.com/users/' + username + '/events/public', {headers: {'Authorization': 'token 8d95f39888271e1b5bc0a7f9482acbbbcb1b5881'}});

promise
    .then((response) => {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('error: '+error);
    });

}

    github('acano0824');



