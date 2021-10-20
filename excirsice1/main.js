

// عندي مشكلة  وهي انه لايتفذ إيفنت للبوتن على العنصر المعمول له ابديت او ادد
const body =document.querySelector("body");
const header=document.createElement("h1");
const list=document.createElement("ul");
const input1=document.createElement("input");
const button1=document.createElement("button");
const toDos=["wake up","eat breakfast","code"];
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

const renderList=function(){
    for(let i=0;i<toDos.length;i++)
    {
        const liItem=document.createElement("li");
        liItem.innerHTML= toDos[i];
        document.querySelector("#navList").append(liItem);
        const buttonLi=document.createElement("button");
        buttonLi.id=`buttonli-${i}`
        idButton1.push(buttonLi.id)
        buttonLi.innerHTML="delete";
        buttonLi.className ="btn btn-danger col ml-7px";
        buttonLi.style.marginLeft="7px";
        liItem.append(buttonLi);
        const buttonLi2=document.createElement("button");
        buttonLi2.id=`buttonli2-${i}`;
        idButton2.push(buttonLi2.id)
        buttonLi2.innerHTML="update";
        buttonLi2.className ="btn btn-warning col ml-7px text-wight";
        buttonLi2.style.marginLeft="7px";
        liItem.append(buttonLi2);
    }
}

renderList();

const addToList=function(){
    toDos.push(input1.value);
    const newli=document.createElement("li");
    newli.innerText=(input1.value);
    list.append(newli);
    const buttonLi=document.createElement("button");
    let index=idButton1.length;
    buttonLi.id=`buttonli-${index}`
    idButton1.push(buttonLi.id)
    buttonLi.innerHTML="delete";
    buttonLi.className ="btn btn-danger col ml-7px";
    buttonLi.style.marginLeft="7px";
    newli.append(buttonLi);
    const buttonLi2=document.createElement("button");
    buttonLi2.id=`buttonli2-${index}`;
    idButton2.push(buttonLi2.id)
    buttonLi2.innerHTML="update";
    buttonLi2.className ="btn btn-warning col ml-7px text-wight";//المارجن هنا لم يتنفذ لذلك وضعت مارجن ب سي اس اس
    buttonLi2.style.marginLeft="7px";
    newli.append(buttonLi2);

}
const deleteListItem=function(i){
    toDos.splice(i,1);
    li[i].remove();
}

const updateListItem=function(i){
    let message= prompt("please enter the text of item list");
    toDos.splice(i,1,message);
    li[i].innerText=message;
    const buttonLi=document.createElement("button");
    buttonLi.id=`buttonli-${i}`
    idButton1.push(buttonLi.id)
    buttonLi.innerHTML="delete";
    buttonLi.className ="btn btn-danger col ml-7px";
    buttonLi.style.marginLeft="7px";
    li[i].append(buttonLi);
    const buttonLi2=document.createElement("button");
    buttonLi2.id=`buttonli2-${i}`;
    idButton2.push(buttonLi2.id)
    buttonLi2.innerHTML="update";
    buttonLi2.className ="btn btn-warning col ml-7px text-wight";
    buttonLi2.style.marginLeft="7px";
    li[i].append(buttonLi2);

}





const li=document.querySelectorAll("li");

  for(let i=0;i<idButton1.length;i++)
  {

      let b1=idButton1[i];
      let b2=idButton2[i];
      document.getElementById(b1).addEventListener("click",()=>{deleteListItem(i)});
      document.getElementById(b2).addEventListener("click",()=>{updateListItem(i)});

  }
 button1.addEventListener("click",addToList);


//style
body.className="load container-fluid column ";
header.className="page-header text-center text-muted ";
list.className="list-group";
input1.className="form-control";
li.className="list-group-item list-group-item-success container-fluid nav-item text-size-70px";















