function addBarChart(event){
    event.preventDefault()
    let barArr = []
    let bar

    let divClass = document.getElementById("indBars")

    for (let i = 1; i < 101; i++) {
        barArr.push(Math.floor(Math.random() * 1500) + 10)
    }

    for (let i = 0; i < barArr.length; i++) {
        bar = document.createElement("div")
        bar.classList.add("curBar")
        bar.style.width = `${barArr[i]}px`
        divClass.appendChild(bar)
    }

    document.body.appendChild(divClass)

}

function bubbleSort() {

    function swapElements(fElement, sElement) {
        let sOne = window.getComputedStyle(fElement)
        let sTwo = window.getComputedStyle(sElement)
    
        let tOne = sOne.getPropertyValue("width")
        let tTwo = sTwo.getPropertyValue("width")
    
        sOne.style.width = tTwo
        sTwo.style.width = tOne
    }
    console.log('wtf')
    function bubble(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1 - i; j++){
                if (array[j] > array[j + 1]) {
                    swapElements(array[j], array[j + 1])
                    // [array[j], array[j + 1]] = [array[j + 1], array[j]]
                }
            }
        }
        // return array
    }
    return bubble(document.getElementById("curBar"))
}



// addBarChart()

document.getElementById("newArr").addEventListener("click", addBarChart)
document.getElementById("sort").addEventListener("click", bubbleSort)