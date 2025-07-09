function init (){

    const gridElm=document.querySelector('.grid')
    const cells=[]
    const gridwidth=10
    const numberOfCells=gridwidth*gridwidth
    

function createGrid(){

   for(let i=0; i<100;i++){
    const cell =document.createElement('div')
    cell.classList.add('duck')
    cell.textContent=i
    cells.push(cell)
    gridElm.appendChild(cell)

   }
//   console.log(cells)
}
  createGrid()
}
document.addEventListener('DOMContentLoaded',init)