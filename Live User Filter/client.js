const search = document.querySelector('input')
const profile_container = document.querySelector('.profile-container')

const API = 'https://randomuser.me/api/?results=10'

async function fetchUser(){
    const res = await fetch(API)
    const data = await res.json()

    dataFunc()
    
    function dataFunc(){
        data.results.forEach(v => {  
            modal = `
            <div class="profile-data">
                <div class="image-container">
                    <img src="${v.picture.medium}">
                </div>
                <div class="text-container">
                    <h4>${v.name.first} ${v.name.last}</h4>
                    <small>${v.location.street.name}, ${v.location.country}</small>
                </div>
            </div>
            `
            profile_container.innerHTML += modal  
        })
    }
    search.addEventListener('input', (e) => {
        if(!e.target.value){
            profile_container.innerHTML = ''
           dataFunc()
        }

        if(e.target.value){
            profile_container.innerHTML = ''
            data.results.forEach(v => {  
                if((v.name.first).toLowerCase().includes((e.target.value).toLowerCase()) ||
                (v.name.last).toLowerCase().includes((e.target.value).toLowerCase())
                ){
                    modal = `
                    <div class="profile-data">
                        <div class="image-container">
                            <img src="${v.picture.medium}">
                        </div>
                        <div class="text-container">
                            <h4>${v.name.first} ${v.name.last}</h4>
                            <small>${v.location.street.name}, ${v.location.country}</small>
                        </div>
                    </div>
                    `
                    profile_container.innerHTML += modal  
                }       
            })
        }
    })
}

fetchUser()
