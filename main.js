const input_btn = document.getElementById("input-btn")
const Todo_list = document.getElementById("to-do-list");
let tip = document.getElementById("tip")
let Value_list = [];

input_btn.addEventListener("click", Get_value);

function Get_value(){
    let inpute_Value = document.getElementById("Input").value;
    if (inpute_Value !==""){  // if input box is not empty
        const group = {
            contant:inpute_Value,
            condition :1,        //Indicates the condition of the item
        };
        Value_list.push(group);
        document.getElementById("Input").value = "";//clear inpte box
        tip.style.display="none";
        Todo_list.innerHTML = "";  //refresh page
        print_array(Value_list,inpute_Value);
    }
}

function print_array(Value_list){
    Value_list.forEach((group, index, Value_list) =>{
        creat_element (group, index, Value_list);
    })
}

function creat_element (group, index, Value_list) {
    const item = document.createElement("div");
    item.classList.add("item");
    Todo_list.appendChild(item);

    // content
    const content_element= document.createElement("div");
    content_element.classList.add("content");
    content_element.innerText = group.contant;
    item.appendChild(content_element);

    // chick button
    const check = document.createElement("button");
    check.classList.add("chick-btn");
    const icon1 = document.createElement("span");
    icon1.classList.add("material-symbols-outlined");
    if(group.condition=== 1){
        icon1.innerText = ("crop_square");
    }
    else{
        icon1.innerText = ("check_box");
    }
    check.appendChild(icon1);
    item.appendChild(check);

    // click-btn feture
    check .addEventListener("click", () => { fun1(group,index) });
    function fun1(group,index){
        group.condition *= -1;
        if(group.condition === 1){
            icon1.innerText = ("crop_square");
        }
        else{
            icon1.innerText = ("check_box");
        }
        group.condition[index]=group.condition;
    }

    // delete button
    const Delete_btn = document.createElement("button");
    Delete_btn.classList.add("delete-btn");
    const icon3 = document.createElement("span");
    icon3.classList.add("material-symbols-outlined");
    icon3.innerText = ("delete");
    Delete_btn.appendChild(icon3);
    item.appendChild(Delete_btn);

    // delete-btn feture
    Delete_btn .addEventListener("click", () => { fun2(group, index, Value_list) });
    function fun2(group, index, Value_list){
        Value_list.splice(index,1) //delete element
        Todo_list.innerHTML = "";  //refresh page
        print_array(Value_list);
        if(Value_list.length === 0){
            tip.style.display="block";
        }
    }
}

// console.log(condition);




