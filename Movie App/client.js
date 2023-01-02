const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e4adc34deed2106b5c4f43ac1d43c7cd&page=1`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=e4adc34deed2106b5c4f43ac1d43c7cd&query=`

const movie_container = document.querySelector('.movie-detail-container')
const Search_input = document.querySelector('input')

async function getMovie(url){
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach(v => {
        const image_data = `https://image.tmdb.org/t/p/w1280/${v.poster_path}`
        const movie_title = v.title
        const movie_rating = +v.vote_average
        const overview = v.overview
        const modal = `
        <div class="movie-container">
            <img src="${image_data}" alt="movie-name">
            <div class="movie-text-container">
                <h3 class="movie-name">${movie_title}</h3>
                <small class="movie-rating" style= color:${movie_rating >=5 ? 'orange' : 'red'}>${movie_rating }</small>
            </div>
            <div class='hover-desc'>
                <small>${overview}</small>
            </div>
        </div>
    `
    movie_container.innerHTML += modal;
    })
}
getMovie(API_URL)

Search_input.addEventListener('keydown',(e) => {
    if(e.key === 'Enter' && e.target.value !== ''){
        movie_container.innerHTML = ''
        getMovie(`${SEARCH_URL}"${e.target.value}"`)
    }
    if(e.target.value === '' && e.key === 'Enter'){
        movie_container.innerHTML = ''
        getMovie(API_URL)
    }
})

