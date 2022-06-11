function isSimple( num ) {
    let i = 2
    while ( num > i ) {
        if ( num % i == 0 ) {
            break
        }
        i++
    }
    return i == num ? true : false
}
console.log( isSimple( 1 ) )
console.log( isSimple( 13 ) )
console.log( isSimple( 139 ) )
console.log( isSimple( 24 ) )

// +-15 минут