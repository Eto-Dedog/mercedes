// перебор всех inputov
const input = document.querySelectorAll(".input");

 for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup',function(e){
        if(e.which=='32') this.value='Не водите пожалуйста пробел'
        else this.value=this.value.toUpperCase();
    }); 
}
// 

const form = document.querySelector('.form-test-drive')

// https://jsonplaceholder.typicode.com
form.addEventListener('submit', (event) => {
    event.preventDefault()

    let data = {}

    for(let {name, value} of form.elements) {
        if(name) {
            data[name] = value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status === 200 || response.status === 201) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then(data => {
        alert('Данные успешно сохранены!')
        form.reset()
    })
    .catch(error => {
        alert('Произошла ошибка, статуса ' + error.message)
    })
})