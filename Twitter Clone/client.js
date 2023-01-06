const postContainer = document.querySelector('.post-container') //Height to 90%
const addFile = document.querySelector('.add-file') //Remove Hidden || Use This as Post Image Area
const postTextContainer = document.querySelector('.post-text-container') //Remove Hidden
const textArea = document.querySelector('textarea') // Use this for Post Text Area
const closePostContainer = document.querySelector('.close-post-container') //Remove Hidden
const userTweetContainer = document.querySelectorAll('.append-tweets') //Append here for tweets
const homeContainer = document.querySelector('.home-container') // Hidden to enable the Profile Container
const profileContainer = document.querySelector('.main-profile--container') //Hidden to enable the Home Container
const loading = document.querySelector('.loader') //Hidden to show / hide
const afterLoginContainer = document.querySelector('.main--main-container')
const loginContainer = document.querySelector('.login-container')
const time = document.querySelector('.time')
const tweet_btn = document.querySelector('.tweet-btn')
const loginBtn = document.querySelector('.login-button')
const loginInput = document.querySelector('.login-username')

let tweetCounter = 1;

loginBtn.addEventListener('click', () => {
    if(loginInput.value){
        loginContainer.classList.add('hidden')
        afterLoginContainer.classList.remove('hidden')
        document.querySelectorAll('.profile-name-to-change').forEach(v=> {
            v.innerHTML = loginInput.value.slice(0,1).toUpperCase() + loginInput.value.slice(1)
        })
        document.querySelectorAll('.user-name-to-change').forEach(v => v.innerHTML = `@${loginInput.value}`)
    }
})

document.querySelector('.home').addEventListener('click', () => {
    profileContainer.classList.add('hidden')
    loading.classList.remove('hidden')
    document.querySelector('.home').style.pointerEvents = 'none'
    document.querySelector('.profile').style.pointerEvents = 'none'
    setTimeout(() => {
        loading.classList.add('hidden')
        homeContainer.classList.remove('hidden')  
        document.querySelector('.profile').style.pointerEvents = 'auto'
    },1000)
    document.querySelector('.home').classList.toggle('active')
    document.querySelector('.profile').classList.toggle('active')
})

document.querySelector('.profile').addEventListener('click', () => {
    homeContainer.classList.add('hidden')
    loading.classList.remove('hidden')
    document.querySelector('.home').style.pointerEvents = 'none'
    document.querySelector('.profile').style.pointerEvents = 'none'
    setTimeout(() => {
        loading.classList.add('hidden')
        profileContainer.classList.remove('hidden')
        document.querySelector('.home').style.pointerEvents = 'auto'
    },1000)
    document.querySelector('.home').classList.toggle('active')
    document.querySelector('.profile').classList.toggle('active')
    
})

closePostContainer.addEventListener('click', () => closePostFunc())

tweet_btn.addEventListener('click', () => {
    postContainer.style.height = '90%'
    closePostContainer.classList.remove('hidden')
    closePostContainer.style.pointerEvents = 'none'
    setTimeout(() => {
        addFile.classList.remove('hidden')
        postTextContainer.classList.remove('hidden')
        closePostContainer.style.pointerEvents = 'auto'
        textArea.focus()
    }, 1000);
})

textArea.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && e.target.value){
        postTweet()
        closePostFunc()
        e.target.value = ''
        addFile.value = ''
    }
})


let imgData = ''
addFile.addEventListener('change', () => {
    const reader = new FileReader()
    reader.addEventListener('load',() => {
        imgData = `<img class='tweet-img' src="${reader.result}" width="300"></img>`
    })
    reader.readAsDataURL(addFile.files[0])
    
})


function postTweet(){
    divCreated = `
    <div class=tweet>
        <div class="profile-container">
            <img  class="user-img" src="images/profile.jpg" width="50">
            <div class="username-container">
                <small class="profile-name">${loginInput.value.slice(0,1).toUpperCase() + loginInput.value.slice(1)}</small>
                <small class="username">@${loginInput.value}</small>
            </div>
        </div>
        <div class="text-container">
            <small class="text" maxlength="20">${textArea.value}</small>
        </div>
        ${imgData}
        <div class="bottom-home">
            <i class="fa-regular fa-message"></i>
            <small>0</small>
            <i class="fa-solid fa-arrow-up"></i>
            <small>0</small>
            <i class="fa-solid fa-arrow-down"></i>
        </div>
    </div>
    `
    tweetCounter++
    userTweetContainer.forEach(v => v.insertAdjacentHTML('afterbegin',divCreated))
    document.querySelector('.tweets-count p').innerHTML = tweetCounter
    imgData = ''
}

function closePostFunc(){
    setTimeout(() => postContainer.style.height = '0%',500)
    addFile.classList.add('hidden')
    postTextContainer.classList.add('hidden')
    closePostContainer.classList.add('hidden')
}

function timeFunc(){
    const now = new Date()
    const hours = `${now.getHours()}`.padStart(2,0)
    const minutes = `${now.getMinutes()}`.padStart(2,0)
    time.innerHTML = `${hours}:${minutes}`
}

timeFunc()
setInterval(() => timeFunc(),30000)

