const APIURL = 'https://api.github.com/users/'
const search = document.querySelector('input')

const profileName = document.querySelector('.profile-name')
const profileBio = document.querySelector('.profile-bio')
const profileImage = document.querySelector('img')
const profileFollowers = document.querySelector('.followers-count')
const profileFollowing = document.querySelector('.following-count')
const profileRepos = document.querySelector('.repos-count')
const repoContainer = document.querySelector('.repos-container')
const mainContainer = document.querySelector('.container')
const profileContainer = document.querySelector('.profile-container')
const notification = document.querySelector('.notification')

search.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && e.target.value !== ''){
        userSearch(e.target.value)
        userRepos(e.target.value)
        e.target.value = ''
    }
})

async function userSearch(name){
    const res = await fetch(`${APIURL}${name}`)
    const data = await res.json()
    
    if(data.name){
        mainContainer.classList.remove('hidden')
        profileName.innerHTML = data.name
        profileBio.innerHTML = data.bio === null ? 'No Bio' : data.bio
        profileImage.src = data.avatar_url
        profileFollowers.innerHTML = data.followers
        profileFollowing.innerHTML = data.following
        profileRepos.innerHTML = data.public_repos
    }else{
        mainContainer.classList.add('hidden')
        notification.classList.remove('closed')
        setTimeout(() => notification.classList.add('closed'),2000)
    }
}

async function userRepos(name){
    const res = await fetch(`${APIURL}${name}/repos`)
    const data = await res.json()
    repoContainer.innerHTML = ''
    
    if(data){
        for(let i = 0; i < 5; i++){
            const created_repos = document.createElement('span')
            created_repos.innerHTML = data[i].name
            repoContainer.appendChild(created_repos)
        }
    }
}