const input_btn = document.getElementById("input-btn")
const item = document.getElementById("item");
let tip = document.getElementById("tip")
let Value_list = [];

input_btn.addEventListener("click", Get_value);

function Get_value(){
    let inpute_Value = document.getElementById("Input").value;
    if (inpute_Value !==""){  // if input is not empty
        Value_list.push(String(inpute_Value));
        document.getElementById("Input").value = "";
        tip.style.display="none";
        creat_element (inpute_Value);
        // Value_list.forEach((value) =>{
        //     console.log(value);
        // });
    }
}


function creat_element (inpute_Value) {
    const content_element= document.createElement("div");
    content_element.classList.add("content");
    content_element.innerText = inpute_Value;
    item.appendChild(content_element);


    const chick = document.createElement("button")
    chick.classList.add("content");


}




