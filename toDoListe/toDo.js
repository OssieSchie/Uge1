const taskArray = [];

/* window.addEventListener("load", pushLocal);

function pushLocal(){
    //console.log(taskArray);
   // console.log(taskArray);
    if (localStorage.getItem("Task Array")){
        //let localArray = localStorage.getItem("Task Array");
        
        taskArray.push(localStorage.getItem("Task Array"));
        prepareList();
    }
} */

/* const taskTemplate ={
    task: "default task",
    amount: 0,
    isDone: false,
    id: 0
} */



document.querySelector("#createToDo").addEventListener("click", makeNewTask);


function makeNewTask(){
    console.log("makeTask");
    const userText = document.querySelector("#text").value;
    const genId = Math.floor(Math.random()*1000);
    
    const amountInput = document.querySelector("#amount").value;
    let userAmount;
    
    if(amountInput<1){
        userAmount = " ";
    } else{
        userAmount = amountInput;
    }
    
    const task = {
        name: `${userText}`,
        amount:`${userAmount}`,
        done: false,
        id: `${genId}`
    }
    
    taskArray.push(task);
    
    localStorage.setItem("Task Array", JSON.stringify(taskArray));
    
    prepareList();
    
    console.table(taskArray);
}

function prepareList(){
    document.querySelector("#tasks").innerHTML = "";

    const localArray = localStorage.getItem("Task Array");
    
    const parsedArray = JSON.parse(localArray);
    //const parseLocalArray = JSON.parse(localArray);
    
    parsedArray.forEach(displayTask);
}

//som den er nu appender displayTask direkte fra makeNewTask, ergo tager den ikke fra local storage. makeNewTask skal KUN pushe til local storage, og prepareTask Skal kun hente data fra localStorage

function displayTask(showTask){
    const clone = document.querySelector("template#toDoListe").content.cloneNode(true);
    
    clone.querySelector("[data-field=taskString]").textContent = showTask.name;
    clone.querySelector("[data-field=taskAmount]").textContent = showTask.amount;
    
    document.querySelector("#tasks").appendChild(clone);
}




//

//DONE ----- Tilføj item til liste //generer id til liste //check om ID'et er taget (generer måske ID'et baseret på hvor mange tasks du har lavet)

//fjerne item fra listen //føj til "trash array" (array med max 5 objecter, objecter kan restoreres)

//Tegn hvert item i arrayet (se i animal base filtering) //clear alle elementer og tegn dem igen når funktionen bliver kaldt