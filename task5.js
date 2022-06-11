function findRepeatsInAll( array1, ...arrays ) {

    function findRepeats( arr ) {
        const rep = new Set()
        for ( let i = 0; i < arr.length; i++ ) {
            for ( let j = 0; j < i; j++ ) {
                if ( arr[j] === arr[i] ) {
                    rep.add( arr[i] )
                }
            }
        }
        return Array.from( rep )
    }
    
    let arrsCon = []
    arrsCon = findRepeats(array1)

    for ( let array of arrays ) {
        arrsCon = arrsCon.concat( findRepeats( array ) )
        arrsCon = findRepeats(arrsCon)
    }
    
    return arrsCon
}

console.log( findRepeatsInAll( [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1] ) )
console.log( findRepeatsInAll( [1, 5, 6, 634, 1, 34, 634, 34], [1, 1, 1, 1, 5, 6, 634, 3, 634], [5, 1, 1, 634, 634], [5, 1, 1, 634, 634] ) )
console.log( findRepeatsInAll( [1, 1, 5, 5, 6], [1, 1, 1, 5, 5, 6, 6], [1, 1, 5, 5, 6, 6], [5, 5, 6, 6, 8, 1], [1, 5, 6, 5] ) )

// Изначально, минут за 20, сделал так, что функция принимала два аргумента. Можно было бы на этом остановиться, но...
// Потом перечитал задание еще раз и немного запутался.
// Подумал, что функция должна принимать произвольное количество
// массивов. Тем самым усложнил себе задачу)
// Оставлю этот вариант, он работает в любом случае.
// В общей сложности потратил где-то час.

// В принципе, я все задачи решал несколько быстрее времени, указанном в комментариях.
// Просто мне хотелось насколько смогу улучшить код и я тратил на это порой много времени.

