<template>
    <div style="margin-top:200px">
        
        <div :class="boardClass" id="board">
            <div @click.once="handleClick(0)" :key="clickReset" :class="cellClass[0]" ></div>
            <div @click.once="handleClick(1)" :key="clickReset" :class="cellClass[1]" ></div>
            <div @click.once="handleClick(2)" :key="clickReset" :class="cellClass[2]" ></div>
            <div @click.once="handleClick(3)" :key="clickReset" :class="cellClass[3]" ></div>
            <div @click.once="handleClick(4)" :key="clickReset" :class="cellClass[4]" ></div>
            <div @click.once="handleClick(5)" :key="clickReset" :class="cellClass[5]" ></div>
            <div @click.once="handleClick(6)" :key="clickReset" :class="cellClass[6]" ></div>
            <div @click.once="handleClick(7)" :key="clickReset" :class="cellClass[7]" ></div>
            <div @click.once="handleClick(8)" :key="clickReset" :class="cellClass[8]" ></div>
            

        </div>
            
        <button @click="startGame" id="restartButton" class="btn btn-primary mt-3">Restart Game</button>
       <h1>{{this.winningMessage}}</h1>
  
       
    </div>

</template>

<style>
*,*::after, *::before {
    box-sizing: border-box;
}

:root{
    --cell-size: 100px;
    --mark-size: calc(var(--cell-size)*.9);
}

body{
    margin: 0;
}

.board{

    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3,auto);
    justify-items: center;
    align-items: center;
}



.cell.x,.cell.circle{
    cursor:not-allowed;
}

.cell {
    width:var(--cell-size);
    height: var(--cell-size);
   border: 1px solid black;
   display:flex;
   justify-content: center;
   align-items:center;
   position:relative;
   cursor:pointer;
}
.cell:first-child,
.cell:nth-child(2),
.cell:nth-child(3){
    border-top: none;
}

.cell:nth-child(3n+1){
    border-left: none;
}
.cell:nth-child(3n+3){
    border-right: none;
}

.cell:last-child,
.cell:nth-child(7),
.cell:nth-child(8){
    border-bottom: none;
}
.cell.x::before,
.cell.x::after,
.cell.circle::before
 {
    background-color: black;
}


.board.x .cell:not(.x):not(.circle):hover::before,
.board.x .cell:not(.x):not(.circle):hover::after,
.board.circle .cell:not(.x):not(.circle):hover::before{
background-color: lightgrey;
}
.cell.x::before, 
.cell.x::after,
.board.x .cell:not(.x):not(.circle):hover::before,
.board.x .cell:not(.x):not(.circle):hover::after{
    content: '';
    width: calc(var(--mark-size)*0.15);
    height: var(--mark-size);
    
    position: absolute;

}

.cell.x::before,
.board.x .cell:not(.x):not(.circle):hover::before{
    transform: rotate(45deg);
}
.cell.x::after,
.board.x .cell:not(.x):not(.circle):hover::after{
    transform: rotate(-45deg);
}




.cell.circle::before, 
.cell.circle::after,
.board.circle .cell:not(.x):not(.circle):hover::before,
.board.circle .cell:not(.x):not(.circle):hover::after {

    content: '';
    position: absolute;
    border-radius: 50%;
}
.cell.circle::before,
.board.circle .cell:not(.x):not(.circle):hover::before{

    width: var(--mark-size);
    height: var(--mark-size);
}
.cell.circle::after,
.board.circle .cell:not(.x):not(.circle):hover::after {
    content: '';
    width: calc(var(--mark-size)*.7);
    height: calc(var(--mark-size)*.7);
    background-color: white;
}

.winning-message{
    display: none;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,.5);
  
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 5rem;
    flex-direction: column;
}
.winning-message button{
    font-size: 3rem;
    background-color: white;
    border:1px solid black;
    padding: .25em .5em;
    cursor: pointer;

}
.winning-message button:hover{
    font-size: 3rem;
    background-color:black;
    border:1px solid white;
    padding: .25em .5em;
    cursor: pointer;
    color:white;

}
.winning-message.show{
    display:flex;
}

.won{
    background-color: green;
}
</style>

<script>
export default {
    name:'tictactoe',  
    data(){
        return{
            X_CLASS : 'x',
            CIRCLE_CLASS : 'circle',
            winningMessage: '',
            WINNING_COMBINATIONS : [
                  [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
            ],
            boardClass:['board','x'],
            cellClass:[
                ['cell'],
                ['cell'],
                ['cell'],
                ['cell'],
                ['cell'],
                ['cell'],
                ['cell'],
                ['cell'],
                ['cell'],
            ],
           circleTurn: false,
           clickReset: 1,
           winningFlag: 0
           
        }
    },
    methods: {
        startGame()
            {
           
            this.circleTurn = false
            this.boardClass =['board','x']
            this.winningFlag = 0
            this.clickReset++
            for(let i=0; i<this.cellClass.length;i++){
             
                let length = this.cellClass[i].length
                while(length!=1)
                {
                    this.cellClass[i].pop()
                    length--
                }
                this.winningMessage=''
                
            }
            
           
            },
        handleClick(cell_number)
        {
       
            let currentClass = this.circleTurn? this.CIRCLE_CLASS:this.X_CLASS
      
        
                
                this.placeMark(cell_number,currentClass)
            if (this.checkWin(currentClass)){
                this.endGame(false)
            }
            else if (this.isDraw())
            {
                this.endGame(true)
            }
            // // else {
                
            this.switchTurns()
                
            this.setBoardHoverClass()
            // // }
    
        },
    placeMark(cell_number, currentClass)
    {   
        if(this.winningFlag!=1)
        {
        this.cellClass[cell_number].push(currentClass)
        }
    },
    setBoardHoverClass(){
    if(this.boardClass.length>1)
    {
        this.boardClass.pop()
    
         if(this.circleTurn) {
        this.boardClass.push(this.CIRCLE_CLASS)
    
        }
        else{
            this.boardClass.push(this.X_CLASS)
            
        }
    }
        
},
switchTurns(){
    
    this.circleTurn = !this.circleTurn
},
 checkWin(currentClass)
{
    return this.WINNING_COMBINATIONS.some(combination => {
        if(combination.every(index => {
           
            return this.cellClass[index][1]==currentClass
        }))
        {
            this.cellClass[combination[0]].push('won')
            this.cellClass[combination[1]].push('won')
            this.cellClass[combination[2]].push('won')
            console.log(combination[0])
            return true
        }
    })
},
 endGame(draw)
{
    if(draw){
        this.winningMessage = 'Draw'
    }
    else{
        this.winningMessage = `${this.circleTurn? "O" : "X"} Wins!`
    }
    this.winningFlag=1
    // this.startGame()
    
},
isDraw()
{   //[...cellElements] destructures cellElements to an array
    return this.cellClass.every(cell => {
        return cell[1]==(this.X_CLASS) || cell[1]==(this.CIRCLE_CLASS)
    })
},


    },
    created(){
 
}

}
</script>