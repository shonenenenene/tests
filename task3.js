const glossary = {
    one: ' компьютер',
    twoToFour: ' компьютера',
    fiveToTen: ' компьютеров',
    exceptions: ' компьютеров',
}

function humanizator( num ) {
    
    const convertNum = num.toString().at( -1 )
    const convertNumExc = num.toString().at( -2 ) + convertNum

    if ( convertNumExc >= 11 && convertNumExc <= 19) {
        return num.toString() + glossary.exceptions
    } else if ( convertNum == 1 ) {
        return num.toString() + glossary.one
    } else if ( convertNum >= 2 && convertNum <= 4 ) {
        return num.toString() + glossary.twoToFour
    } else if (convertNum >= 5 && convertNum <= 10 || convertNum == 0) {
        return num.toString() + glossary.fiveToTen
    } else {
        return 'pls no...'
    }
}

console.log( humanizator( 851 ) )
console.log( humanizator( 9992 ) )
console.log( humanizator( 777 ) )
console.log( humanizator( 12 ) )
console.log( humanizator( 10000000000000 ) )
console.log( humanizator( 0 ) )
console.log( humanizator( 1 ) )
console.log( humanizator( 'gg' ) )

// +- 30 минут
