const get_jokes = document.querySelector('button')
const show_jokes = document.querySelector('h2')

jokesFunc()

get_jokes.addEventListener('click', jokesFunc)

async function jokesFunc (){
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/',config);
    const data = await res.json();
    show_jokes.innerHTML = data.joke
}