// الموجودة بالكومنت هي ألأكواد التي كتبتها سابقا وغيرتها بسبب مشكلة رز التعديل على عناصر القائمة عندما يتم التعديل تختفي الأزرار 
//لذلك قمت بوضع إنشاء الأزار وإضافتها لعناصر القائمه في دالة واحدة ويتم مناداتها في كل مره يتم حذف عنصر من القائمة او التعديل عليهاg
//واصبح عندي مشكلة اخرى وهي انه لايتنفذ الا حدث واحد فقط للبوتنز الحذف والتعديل
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
    list.innerHTML="";
    idButton1.splice(0,idButton1.length);
    idButton2.splice(0,idButton2.length);
    for(let i=0;i<toDos.length ;i++) 
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
        //buttonLi.addEventListener("click",deleteListItem);
        const buttonLi2=document.createElement("button");
        buttonLi2.id=`buttonli2-${i}`;
        idButton2.push(buttonLi2.id)
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
const deleteListItem=function(i){
   // const idBut = e.target.id;
    //const parentBut =document.getElementById(idBut).parentNode;
    
    //const indexParent=toDos.indexOf(parentBut.innerText);
    
    toDos.splice(i,1);
    renderList();


}

const updateListItem=function(i){
    //const idBut2 = e.target.id;
    //const parentBut2 =document.getElementById(idBut2).parentNode;
    let message= prompt("please enter the text of item list");
    //const indexParent=toDos.indexOf(parentBut2.innerText);
    
    //parentBut2.innerText=message;
    toDos.splice(i,1,message);
    renderList();

}





const li=document.querySelectorAll("li");

//deleteButton.addEventListener("click",()=>{deleteListItem(i)});
//updateButton.addEventListener("click",()=>{updateListItem(i)});
//const updateButton=li.lastElementChild();

 
  for(let i=0;i<idButton1.length;i++)
  {
      let b1=idButton1[i];
      let b2=idButton2[i];
      document.getElementById(idButton1[i]).addEventListener("click",()=>{deleteListItem(i)});
      document.getElementById(b2).addEventListener("click",()=>{updateListItem(i)});
//    updateButton.addEventListener("click",()=>{updateListItem(i)});

  }
 button1.addEventListener("click",addToList);




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


//style
body.className="load container-fluid column ";
header.className="page-header text-center text-muted ";
list.className="list-group";
input1.className="form-control";
li.className="list-group-item list-group-item-success container-fluid nav-item text-size-70px";















