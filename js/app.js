const singleButton = document.getElementById('single')
const comboButton = document.getElementById('combo')
const tdValue = document.getElementsByTagName('td')
const trValue = document.getElementsByTagName('tr')

singleButton.addEventListener('click', function (event) {
    event.preventDefault()

    let words = Array.from(tdValue)

    let result = words.filter((word) => word.innerText === 'b')
    
    result.forEach((element) => {
        element.classList.add('to-hide')
    })
})

comboButton.addEventListener('click', function (event) {
    event.preventDefault()

    let tRows = Array.from(trValue)

    let comboResult = tRows.filter((row) => row.className === 'combo')

    comboResult.forEach((row) => { 

        if (row.innerText.length < 3) {  
                    
            return false
            
        }  else {

            row.classList.add('to-hide')
            return true
        } 
        
    })
})
