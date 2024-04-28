//we have to select all the  buttons and the filterable buttons:-
const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterableCards = document.querySelectorAll('.filterable-cards .card');


console.log(filterButtons, filterableCards)

//Defining the filtercards function:-
const filterCards = e => {
    document.querySelector('.filter-buttons .active').classList.remove('active');
    e.target.classList.add("active")
    console.log(e.target)


//iterate over each the filterable card:-
filterableCards.forEach(card => {
    //add hide class to hide the card initially:-
    card.classList.add('hide')
    //make a condition to show or hide the card:-
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
        card.classList.remove('hide')
    }
})

}
//add Click event listener to all the buttons:-
filterButtons.forEach(button => button.addEventListener('click', filterCards));