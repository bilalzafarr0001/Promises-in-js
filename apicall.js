// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpErrorr';
//       this.response = response;
//     }
//   }
  
// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new HttpError(response);
//         }
//       });
//   }

  
// // Ask for a user name until github returns a valid user
// function demoGithubUser() {
//     let name = prompt("Enter a name?", "iliakan");
  
//     return loadJson(`https://api.github.com/users/${name}`)
//       .then(user => {
//         alert(`Full name is : ${user.name}.`);
//         return user;
//       })
//       .catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("No such user, please reenter.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       });
//   }
  
//   demoGithubUser();


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK , GOOD ");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  
//   function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });  
//   }
  
//   async function asyncCall() {
//     document.getElementById("demo1").innerHTML = "Async Calling .... ";
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();
function doJob(x,sec) {
    return new Promise(resolve => {
    console.log('Start: ' + x);
      setTimeout(() => {
          console.log('End: ' + x);
        resolve(x);
      }, sec *1000);
    });
  }

  async function SerialFlow(){
    let result1 = await doJob(1,1);
    let result2 = await doJob(2,2);
    let result3 = await doJob(3,3);
     
    let finalResult = result1+result2+result3;
    document.getElementById("demo1").innerHTML = finalResult ;
    return finalResult;  
}
     
SerialFlow();