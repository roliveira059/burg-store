const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonDiscount = document.querySelector('.discount')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((item) => {
        myLi += `
        <li>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p class="item-price">${formatCurrency(item.price)}</p>
        </li>
    `
    })
    list.innerHTML = myLi
}

function mapAllItens() {
    const newDiscount = menuOptions.map((item) => ({
        ...item,
        price: item.price - item.price * 0.10,
    }))
    showAll(newDiscount)
}


function sumAll() {
    const sumTotal = menuOptions.reduce((acc, value) => {
        const result = value.price
        return acc + result
    }, 0)
    list.innerHTML = `
    <li>
        <p class="item-price">O valor toal é: ${formatCurrency(sumTotal)}</p>
    </li>
    `
}


function filterAll (){
    const newItens = menuOptions.filter( item => {
        if(item.vegan === true) return true
        else return false
    })
    showAll(newItens)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDiscount.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterAll.addEventListener('click', filterAll)