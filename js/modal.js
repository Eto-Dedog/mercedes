const modalBtn = document.querySelectorAll('.more')

 for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
    }); 
}

const modal = document.querySelector('.modal')

modal.addEventListener('click', (event) => {
    const target = event.target

    if(target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})