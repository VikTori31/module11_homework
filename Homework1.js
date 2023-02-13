let arr = [8, 1, 2, 3, 0, 5, 6, null, 8, 10, 11, 'text', '9']
let newArr = arr.filter(item => typeof item === 'number')
let odd = 0
let even = 0
function quantityNumbOddEven(){
    for(let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 0) {
            console.log('Число 0')
        } else if (newArr[i] % 2 !== 0) {
            odd += 1
        } else {
            even +=1
        }
    }
    
    console.log(`Количество нечётных чисел: ${odd}, количество чётных чисел: ${even}`)
}
quantityNumbOddEven();