
let todoArray=JSON.parse(localStorage.getItem('todoArray')) || [];

displayItems();



function addButton(){
    
    let inputBox=document.querySelector('#inputBox');
    let dateBox=document.querySelector('#dateInputBox');
    if(!inputBox.value || !dateBox.value){
        displayItems();
        return;
    }
    todoArray.push({
        item:inputBox.value,
        dueDate:dateBox.value,
    });

    displayItems();
}


function displayItems(){

    let jsInputDiv=document.querySelector('.jsInput');

    let newHtml=``;
    for(let i=0;i<todoArray.length;i++){

        newHtml+=`<span class="jsitem">${todoArray[i].item}</span> <span class="jsdate">${todoArray[i].dueDate}</span> <div class="minus_container"><button onclick="deleteButton(${i});" class="deleteBtn"><i class="fa-solid fa-minus iconMinus"></i></button></div>`;
    }

    jsInputDiv.innerHTML=newHtml;
    localStorage.setItem('todoArray',JSON.stringify(todoArray));
}
function deleteButton(index){
    todoArray.splice(index,1);
    displayItems();
}

function clearAllBtn(){
    localStorage.clear();
    while(todoArray.length>0){
        todoArray.pop();
    }
    displayItems();
}