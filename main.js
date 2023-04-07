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
        Value_list.push(A);
        document.getElementById("Input").value = "";//clear inpte box
        tip.style.display="none";
        Todo_list.innerHTML = "";  //refresh page
        Value_list.forEach((group,index) =>{
            // 数组需要记录两个项目为一组 内容 和状态 用for循环输出 index 内容 和状态
            creat_element (group, index);
        });
    }
}


function creat_element (group, index) {
    const item = document.createElement("div");
    item.classList.add("item");

    // content
    const content_element= document.createElement("div");
    content_element.classList.add("content");
    content_element.innerText = value;
    item.appendChild(content_element);

    // chick button
    const check = document.createElement("button");
    check.classList.add("chick-btn");
    const icon1 = document.createElement("span");
    icon1.classList.add("material-symbols-outlined");
    icon1.innerText = ("crop_square");
    check.appendChild(icon1);
    item.appendChild(check);


    check .addEventListener("click", (group,index) => {
        console.log(group.condition);

        condition *= -1;

        if(condition === 1){

            icon1.innerText = ("crop_square");
        }
        else{
            icon1.innerText = ("check_box");
        }
        console.log(group.condition);
        // 改变元素值
    });

    


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

// console.log(condition);




