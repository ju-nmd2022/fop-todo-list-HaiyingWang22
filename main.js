const btn = document.getElementById("input-btn")
let tip = document.getElementById("tip")
let Value_list = [];

function Get_value(){
    let inpute_Value = document.getElementById("Input").value;
    if (inpute_Value !==""){
        Value_list.push(String(inpute_Value));
        document.getElementById("Input").value = "";
        tip.style.display="none";
    }
}
console.log(Value_list);

// if(Value_list.length === 0){
// }





btn.addEventListener("click", Get_value);