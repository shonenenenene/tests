function getCitiesList( arr ) {
    let citiesList = ''
    arr.forEach( function(element, index)  {
        if ( index < arr.length - 1 ) {
            citiesList += element + ', '
            
        } else {
            citiesList += element + '.'
        }
    } )
    return citiesList
}

const citiesArray = ['Москва', 'Санкт-Петербург', 'Токио', 'Киото', 'Сидней']
console.log( getCitiesList( citiesArray ) )

// Решил сначала минуты за 3 с помощью цикла for.
// Но затем вспомнил про существование forEach
// В итоге вышло минут на 15, но алгоритм решения был понятен сразу.