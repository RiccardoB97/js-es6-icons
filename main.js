let icone = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];
let cardsEl = document.getElementById('cards');
var selectedType = document.getElementById('filter')
var selectedValue;
// Gets value from select menu and updates it when changed
selectedType.addEventListener('change', event => {
    selectedValue = event.target.value
})

const displayCards = function () {
    icone.forEach(icona => {
        icona.prefix = 'fa-' + icona.name;
        // Changes color by type
        if (icona.type === 'animal') {
            icona.color = "blue";
        } else if (icona.type === 'vegetable') {
            icona.color = 'orange';
        } else if (icona.type === 'user') {
            icona.color = 'purple';
        }
        cardsEl.insertAdjacentHTML('beforeend', `
        <div class="card" style="display: ${icona.display}">
        <i class="${icona.family} ${icona.prefix}" style="color: ${icona.color}"></i>
        <h4>${icona.name}</h4>
        </div>
        `)
    })
}

displayCards()






