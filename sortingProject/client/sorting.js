function createBars() {
    let barArr = []
    let barContainer = document.querySelector(".barContainer")

    for (let i = 1; i <= 100; i++) {
        let barWidth = Math.floor(Math.random() * 1500) + 10
        barArr.push(barWidth)

        let bar = document.createElement("div")

        bar.classList.add("bars")
        bar.style.width = `${barWidth}px`

        barContainer.appendChild(bar)
    }
}

function deleteBars() {
    document.querySelectorAll(".bars").forEach( (node) => {
        node.remove()
    })
}

async function bubbleSort(barsArray) {
    for (let i = 0; i < barsArray.length - 1; i++) {
        for (let j = 0; j < barsArray.length - 1 - i; j++){

            if (barsArray[j].style.width > barsArray[j + 1].style.width) {
                [barsArray[j].style.width, barsArray[j + 1].style.width] = [barsArray[j + 1].style.width, barsArray[j].style.width]
            }
            await new Promise(resolve => setTimeout(resolve, delay))
        }
        await new Promise(resolve => setTimeout(resolve, delay))
    }

    return barsArray
}

let delay = 5

let newChartBtn = document.getElementById("newArr")

let bubbleSortBtn = document.getElementById("bubbleSort")

newChartBtn.addEventListener("click", () => {
    deleteBars()
    createBars()
})
bubbleSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars")
    bubbleSort(barsArray)
})