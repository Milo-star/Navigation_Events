const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())

    section = document.getElementsByTagName('section') [0];

    let div = document.createElement('div')
    div.classList.add("displayedsquare", e.target.classList[1])
    section.appendChild(div);
}




const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
