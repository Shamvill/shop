const nodoz=document.getElementById('nodo');
const food=document.getElementById('fodo');
const add=document.getElementById('add');

function head(){
    // const newTodoText = newtodolist.value;
    const hee=nodoz.value;
    nodoz.value='';

    const num=document.createElement('li');
    const inp=document.createElement('input');
    const Task=document.createElement('span');
    const btn=document.createElement('button');

    inp.type='checkbox';

    num.appendChild(inp);
    num.appendChild(Task);
    num.appendChild(btn);
    
    food.appendChild(num);
    Task.textContent=hee;
    btn.textContent='Delete';

    btn.addEventListener('click', function () {
        food.removeChild(num);
    })
    
    
}

add.addEventListener('click',head);