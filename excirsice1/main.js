

const body =document.querySelector("body");
const header=document.createElement("h1");
const list=document.createElement("ul");
const input1=document.createElement("input");
const button1=document.createElement("button");
const li=document.querySelectorAll("li");
const toDos=["wake up","eat breakfast","code"];
const idText=[];

button1.innerHTML="click me";
button1.className ="btn btn-danger dropdown-toggle text-wight";
header.innerHTML="Welcome";
list.id="navList";

body.append(header);
body.append(list);
body.append(input1);
body.append(button1);

//function

const deleteListItem=function(i){
    toDos.splice(i,1);
    renderList();
}

const updateListItem=function(i){ 
    let message= prompt("please enter the text of item list");
    toDos.splice(i,1,message);
    renderList();
}

const addToList=function(){
    toDos.push(input1.value);
    renderList();
 }

const renderList=function(){
    list.innerHTML="";
    for(let i=0;i<toDos.length;i++)
    {
    
    
        const li=document.querySelectorAll("li");
        const liItem=document.createElement("li");
        const text=document.createElement("h4");
        const buttonLi=document.createElement("button");
        const buttonLi2=document.createElement("button");

        text.innerHTML= toDos[i];
        buttonLi.innerHTML="delete";
        buttonLi2.innerHTML="update";

        text.id=`text-${i}`
        
        idText.push(text.id)
        
        buttonLi.className ="btn btn-danger col ml-7px";
        buttonLi.style.marginLeft="7px";
        buttonLi2.className ="btn btn-warning col ml-7px text-wight";
        buttonLi2.style.marginLeft="7px";

        document.querySelector("#navList").append(liItem);
        liItem.append(text);
        liItem.append(buttonLi);
        liItem.append(buttonLi2); 
    
        buttonLi.addEventListener("click",()=>{deleteListItem(i)});
        buttonLi2.addEventListener("click",()=>{updateListItem(i)});
    }
    }
 
renderList();
    
button1.addEventListener("click",addToList);

//style
body.className="load container-fluid column ";
header.className="page-header text-center text-muted ";
list.className="list-group";
input1.className="form-control";
li.className="list-group-item list-group-item-success container-fluid nav-item text-size-70px";















