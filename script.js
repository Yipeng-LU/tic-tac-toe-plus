const cellElements=document.querySelectorAll('.cell')
let circleTurn=false
const board=document.getElementById('board')
const winningMessageText=document.getElementById('winningMessageText')
const winningMessage=document.getElementById('winningMessage')
let count=0
cellElements.forEach(cell=>{
	cell.addEventListener('click',handleClick,{once:true})
})
function handleClick(e){
	count+=1
	const cell=e.target
	if (circleTurn){
		cell.classList.add('circle')
	}
	else{
		cell.classList.add('x')
	}
	if (checkForWin(cell)){
		if (cell.classList.contains('x')){
			winningMessageText.innerText='X wins'
		}
		else{
			winningMessageText.innerText='O wins'
		}
		winningMessage.classList.add('show')
		return
	}
	if (count==225){
		winningMessageText.innerText='draw game'
		winningMessage.classList.add('show')
		return
	}
	circleTurn=!circleTurn
	if (circleTurn){
		board.classList.remove('x')
		board.classList.add('circle')
	}
	else{
		board.classList.remove('circle')
		board.classList.add('x')
	}
}
function checkForWin(cell){
	let i
	let j
	for (i=0;i<cellElements.length;i++){
		if (cellElements[i]==cell){
			break
		}
	}
	let mark1
	let mark2
	if (cell.classList.contains('x')){
		mark1='x'
	}
	else{
		mark1='circle'
	}
	const y=parseInt(i/15)
	const x=i-y*15
	if (x>=4){
		for (i=1;i<5;i++){
			j=cellElements[(x-i)+y*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	if (x<=10){
		for (i=1;i<5;i++){
			j=cellElements[(x+i)+y*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	if (y>=4){
		for (i=1;i<5;i++){
			j=cellElements[x+(y-i)*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	if (y<=10){
		for (i=1;i<5;i++){
			j=cellElements[x+(y+i)*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	if(x>=4 &&y>=4){
		for (i=1;i<5;i++){
			j=cellElements[(x-i)+(y-i)*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	if (x>=4&&y<=10){
		for (i=1;i<5;i++){
			j=cellElements[(x-i)+(y+i)*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	if (x<=10&&y>=4){
		for (i=1;i<5;i++){
			j=cellElements[(x+i)+(y-i)*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	if (x<=10&&y<=10){
		for (i=1;i<5;i++){
			j=cellElements[(x+i)+(y+i)*15]
			if (j.classList.contains('x')){
				mark2='x'
			}
			else if (j.classList.contains('circle')){
				mark2='circle'
			}
			else{
				break
			}
			if (mark1!=mark2){
				break
			}
			if (i==4){
				return true
			}
		}
	}
	return false
}