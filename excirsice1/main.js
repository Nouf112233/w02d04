// الموجودة بالكومنت هي ألأكواد التي كتبتها سابقا وغيرتها بسبب مشكلة رز التعديل على عناصر القائمة عندما يتم التعديل تختفي الأزرار 
//لذلك قمت بوضع إنشاء الأزار وإضافتها لعناصر القائمه في دالة واحدة ويتم مناداتها في كل مره يتم حذف عنصر من القائمة او التعديل عليهاg
const body =document.querySelector("body");
const header=document.createElement("h1");
const list=document.createElement("ul");
const input1=document.createElement("input");
const button1=document.createElement("button");
const toDos=["wake up","eat breakfast","code"];

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
    list.innerHTML="";
    for(let i=0;i<toDos.length ;i++) 
    {
        const liItem=document.createElement("li");
        liItem.innerHTML= toDos[i];
        document.querySelector("#navList").append(liItem);
        const buttonLi=document.createElement("button");
        buttonLi.id=`buttonli-${i}`
        buttonLi.innerHTML="delete";
        buttonLi.className ="btn btn-danger col ml-7px";
        buttonLi.style.marginLeft="7px";
        liItem.append(buttonLi);
        //buttonLi.addEventListener("click",deleteListItem);
        const buttonLi2=document.createElement("button");
        buttonLi2.id=`buttonli2-${i}`
        buttonLi2.innerHTML="update";
        buttonLi2.className ="btn btn-warning col ml-7px text-wight";
        buttonLi2.style.marginLeft="7px";
        liItem.append(buttonLi2);
        //buttonLi2.addEventListener("click",updateListItem);
    }
}

renderList();

const addToList=function(){
    toDos.push(input1.value);
    renderList();
    // const newLi=document.createElement("li");
    // newLi.innerHTML=toDos[toDos.length-1];
    // document.querySelector("#navList").append(newLi);
}
const deleteListItem=function(e){
    const idBut = e.target.id;
    const parentBut =document.getElementById(idBut).parentNode;
    console.log(parentBut.innerHTML)
   // const indexParent=toDos.indexOf(parentBut.value);
    //toDos.splice(indexParent,1);
    //renderList();


}

const updateListItem=function(e){
    const idBut2 = e.target.id;
    const parentBut2 =document.getElementById(idBut2).parentNode;
    let message= prompt("please enter the text of item list");
    const indexParent=toDos.indexOf(parentBut2.value);
    //parentBut2.innerText=message;
    toDos.splice(indexParent,1,message);
    renderList();

}





const li=document.querySelectorAll("li");
//const deleteButton=li.firstElementChild;
//const updateButton=li.lastElementChild;
 
 for(let i=0;i<toDos.length;i++)
 {
   const deleteButton=li[i].firstElementChild;
    const updateButton=li[i].lastElementChild;

   deleteButton.addEventListener("click",deleteListItem);
   updateButton.addEventListener("click",updateListItem);

 }



// const actionList=()=>{
//     for(let i=0;i<toDos.length;i++)
// {
//     // const buttonLi=document.createElement("button");
//     // buttonLi.id=`buttonli-${i}`
//     // buttonLi.innerHTML="delete";
//     // buttonLi.className ="btn btn-danger col ml-7px";
//     // buttonLi.style.marginLeft="7px";
//     // li[i].append(buttonLi);
//     // buttonLi.addEventListener("click",deleteListItem);
// }

// for(let i=0;i<toDos.length;i++)
// {
//     // const buttonLi2=document.createElement("button");
//     // buttonLi2.id=`buttonli2-${i}`
//     // buttonLi2.innerHTML="update";
//     // buttonLi2.className ="btn btn-warning col ml-7px text-wight";
//     // buttonLi2.style.marginLeft="7px";
//     // li[i].append(buttonLi2);
//     // buttonLi2.addEventListener("click",updateListItem);
// }
// }
//bottonList()

//style
body.className="load container-fluid column ";
header.className="page-header text-center text-muted ";
list.className="list-group";
input1.className="form-control";
li.className="list-group-item list-group-item-success container-fluid nav-item text-size-70px";















