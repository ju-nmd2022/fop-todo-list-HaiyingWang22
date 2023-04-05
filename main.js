const btn = document.getElementById("input-btn")
let Value_list = [];

function Get_value(){
    let inpute_Value = document.getElementById("Input").value;
    if (inpute_Value !==""){
        alert("文本为: " + inpute_Value);
    }
};
btn.addEventListener("click", Get_value);