const input_btn = document.getElementById("input-btn")
const Todo_list = document.getElementById("to-do-list");
let tip = document.getElementById("tip")
let Value_list = [];

input_btn.addEventListener("click", Get_value);

function Get_value(){
    let inpute_Value = document.getElementById("Input").value;
    if (inpute_Value !==""){  // if input is not empty
        Value_list.push(String(inpute_Value));
        document.getElementById("Input").value = "";
        tip.style.display="none";
        Todo_list.innerHTML = "";  //refresh page
        Value_list.forEach((value) =>{
            creat_element (value);
        });
    }
}


function creat_element (value) {
    const item = document.createElement("div");
    item.classList.add("item");

// content
    const content_element= document.createElement("div");
    content_element.classList.add("content");
    content_element.innerText = value;
    item.appendChild(content_element);

// chick button
    const chick = document.createElement("button");
    chick.classList.add("chick-btn");
    const icon1 = document.createElement("span");
    icon1.classList.add("material-symbols-outlined");
    icon1.innerText = ("check_box");
    chick.appendChild(icon1);
    item.appendChild(chick);

// delete button
    const Delete_btn = document.createElement("button");
    Delete_btn.classList.add("delete-btn");
    const icon3 = document.createElement("span");
    icon3.classList.add("material-symbols-outlined");
    icon3.innerText = ("delete");
    Delete_btn.appendChild(icon3);
    item.appendChild(Delete_btn);


    Todo_list.appendChild(item);
}




