const showNotify = document.querySelector('.show-btn')
const notificationContainer = document.querySelector('.notifcation-container')
const type = ['success','warning','error']

showNotify.addEventListener('click', () => {
    const selectedType = type[Math.trunc(Math.random()*type.length)]
    const create_notify = document.createElement('div')
    create_notify.className = `notification ${selectedType}`
    create_notify.innerHTML = `Notification ${selectedType[0].toUpperCase() + selectedType.slice(1)}`
    notificationContainer.appendChild(create_notify)
    setTimeout(() => create_notify.remove(),2000);
})