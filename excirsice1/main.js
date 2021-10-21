

// عندي مشكلة  وهي انه لايتفذ إيفنت للبوتن على العنصر المضاف
const body =document.querySelector("body");
const header=document.createElement("h1");
const list=document.createElement("ul");
const input1=document.createElement("input");
const button1=document.createElement("button");
const toDos=["wake up","eat breakfast","code"];
const idText=[];
const idButton1=[];
const idButton2=[];

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
    idText.splice(i,1);
    idButton1.splice(i,1);
    idButton2.splice(i,1);
    li[i].remove();
}

const updateListItem=function(i){
    
    let message= prompt("please enter the text of item list");
    toDos.splice(i,1,message);
    let id =idText[i];
    const text=document.getElementById(id);
    text.innerHTML=message;

}

const renderList=function(i){
        
        const liItem=document.createElement("li");
        const text=document.createElement("h4");
        const buttonLi=document.createElement("button");
        const buttonLi2=document.createElement("button");

        text.innerHTML= toDos[i];
        buttonLi.innerHTML="delete";
        buttonLi2.innerHTML="update";

        text.id=`text-${i}`
        buttonLi.id=`buttonli-${i}`;
        buttonLi2.id=`buttonli2-${i}`;
       
        idText.push(text.id)
        idButton1.push(buttonLi.id);
        idButton2.push(buttonLi2.id);
        
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

for(let i=0;i<toDos.length;i++)
    {
        renderList(i);
    }



const addToList=function(){
    toDos.push(input1.value);
    let i=toDos.length-1;
    renderList(i);

 }

const li=document.querySelectorAll("li");

//   for(let i=0;i<toDos.length;i++)
//   {
//       renderList(i);
//       let b1=idButton1[i];
//       let b2=idButton2[i];
//       document.getElementById(b1).addEventListener("click",()=>{deleteListItem(i)});
//       document.getElementById(b2).addEventListener("click",()=>{updateListItem(i)});

//   }
 button1.addEventListener("click",addToList);


//style
body.className="load container-fluid column ";
header.className="page-header text-center text-muted ";
list.className="list-group";
input1.className="form-control";
li.className="list-group-item list-group-item-success container-fluid nav-item text-size-70px";















