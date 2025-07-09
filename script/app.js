function init (){

    const gridElm=document.querySelector('.grid')
    const cells=[]
    const gridwidth=10
    const numberOfCells=gridwidth*gridwidth
    const scoreDisplayEl=document.querySelector('#score-display')


    let duckposition = 10
    let score=0
function handleClick(event){
    // console.log('it runs')
    if(event.target.classList.contains('duck')){
        score+=10
        scoreDisplayEl.textContent='Your score is '+score

    }
}
function createGrid(){

   for(let i=0; i<100;i++){
    const cell =document.createElement('div')
    cell.textContent=i
    cell.addEventListener('click',handleClick)
    cells.push(cell)
    gridElm.appendChild(cell)

   }
}
function addDuck(){
    cells[duckposition].classList.add('duck')
}

function removeDuck(){
    cells[duckposition].classList.remove('duck')
}
function play(){
    setInterval(()=>{
        removeDuck()
        duckposition=Math.floor(Math.random()*numberOfCells)
        addDuck()
    },3000)

}



  createGrid()
  play()
  
}
document.addEventListener('DOMContentLoaded',init)