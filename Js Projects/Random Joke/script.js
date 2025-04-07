// var btn = document.getElementById('get-joke')
// var jokeElement = document.getElementById('joke')
// btn.addEventListener("click", () => {
//     fetch('https://official-joke-api.appspot.com/jokes/programming/random')
//         .then(res => res.json())
//         .then(data => {
//             createJoke(data[0]);
//         })
//         .catch(err => console.log(err))
// })
// function createJoke(joke){
//     const jokeElement=`
//          <p><strong>Here's a Joke ${joke.setup}</p>
//          <p> ${joke.punchline}</p>
//          <button id="new-joke">Get a Joke</button>
//     `;
//     document.querySelector('.container').innerHTML=jokeElement;

// document.getElementById('new-joke').addEventListener('click',()=>{
//     btn.click();
// })
// }
var btn = document.getElementById('get-joke')
btn.addEventListener('click', () => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(res => res.json())
        .then(data => {
            createJoke(data[0])
})
        .catch(err =>console.log(err))
})

function createJoke(joke){
    const jokeELement=`
       <p>Here's a Joke ${joke.setup} </p>
       <p> ${joke.punchline}</p>
       <button id="new-joke">Get a Joke</button>
    `;
    document.querySelector('.container').innerHTML=jokeELement;
    document.getElementById('new-joke').addEventListener('click',()=>{
        btn.click();
    })
}