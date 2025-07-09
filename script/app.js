function init (){

    const gridElm=document.querySelector('.grid')
    const cells=[]
    const gridwidth=10
    const numberOfCells=gridwidth*gridwidth
    const scoreDisplayEl=document.querySelector('#score-display')
    const audioElm=document.querySelector('#quack')


    let duckposition = 10
    let score=0
    let totalDucks=0
function handleClick(event){
    // console.log('it runs')
    if(event.target.classList.contains('duck')){
        audioElm.pause()
        score+=10
        scoreDisplayEl.textContent='Your score is '+score
        audioElm.play()
        removeDuck()

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
    totalDucks++
}

function removeDuck(){
    cells[duckposition].classList.remove('duck')
}

function endGame(){
    alert('Game ended, score: '+score)
    score=0
    scoreDisplayEl.textContent='Your score is '+score
    totalDucks=0
    

}
function play(){
    setInterval(()=>{
        if(totalDucks<10){
         removeDuck()
         duckposition=Math.floor(Math.random()*numberOfCells)
         addDuck()
        }else{
            endGame()
        }
        
    },3000)
    

}



  createGrid()
  play()
  
}
document.addEventListener('DOMContentLoaded',init)