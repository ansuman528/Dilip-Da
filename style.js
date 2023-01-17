

function getFuncName() {
    return getFuncName.caller.name
 }
 const crate_link=(link_name,value,result)=>
 {
    const link = document.createElement("a");
    if(result == "low")
    {
        link.href = 'pages\\'+ link_name+ '.html';
        
    link.innerHTML = "learn more";
    link.setAttribute("target", "_blank");
    link.style.fontSize = "0.8rem";
    value.appendChild(link); 
    }
    else if(result == "high")
    {
        link.href = 'page_for_high\\'+ link_name+ '_high.html';
        
    link.innerHTML = "learn more";
    link.setAttribute("target", "_blank");
    link.style.fontSize = "0.8rem";
    value.appendChild(link);
    }
 }
 const reset =()=>
{
    const x = document.getElementsByClassName("FlexContainer");
    for (let i = 1; i < x.length-1; i++) {
        x[i].getElementsByTagName("input")[0].value = '';
        x[i].getElementsByTagName("input")[0].style.border = "1px solid red";
    }
    const p = document.getElementsByClassName("FlexContainer");
    for (let i = 1; i < p.length-1; i++) {
        p[i].getElementsByTagName("span")[0].innerHTML = '';
    }
}
const randomInput=(limit)=>{
    const x = document.getElementsByClassName("FlexContainer");
    for (let i = 1; i < x.length-1; i++) {
        x[i].getElementsByTagName("input")[0].value = Math.random() * limit;
    }
}
const validate =(x,value,link_name,low_val,high_val)=>
 {
    if(x.value == '')
        {
            x.setAttribute("placeholder", "Enter the value");
            value.innerHTML = "";
            x.style.border = "1.5px solid red";
        }
        else
        {
            x.style.border = "1.5px solid green";
            if(x.value < low_val)
            {
                value.innerHTML = link_name+"is low";
                value.style.color = "red";
                abnormal_array.push(link_name);
                return "low";
            }
            else if(x.value > high_val)
            {
                value.innerHTML = link_name+" is high";
                value.style.color = "red";
                abnormal_array.push(link_name);
                return "high";
            }
            else
            {
                value.innerHTML = link_name+"is perfect";
                value.style.color = "green";
                normal_array.push(link_name);
                return "perfect";
            }
        }
 }
 const run =(element)=>
 {
    const x = document.getElementById(element.name+"in"); //this variable get the value of input
    const value = document.getElementById(element.name+"out");// this variable get the value of output
    const result = validate(x,value,element.name,element.low,element.high);
    crate_link(element.name,value,result);
 }
 class parameter_class {
    constructor(name, low, high) {
        this.name = name;
        this.low = low;
        this.high = high;
    }
}
const print_array = () =>{
    console.log(abnormal.checked);
    console.log(normal.checked);
    if(abnormal.checked)
    {
        abnormal_array.forEach(element => {
            const p = document.createElement("li");
            p.innerHTML = "abnormal "+element;
            order_list.appendChild(p);
        });
        
    }
    else
    {
        normal_array.forEach(element => {
            const p = document.createElement("li");
            p.innerHTML = element+" is normal ";
            order_list.appendChild(p);
        });
        
    }
}
const submit = () => { 
    abnormal_array.splice(0,abnormal_array.length);
    normal_array.splice(0,normal_array.length);
    randomInput(100)
    parameter.forEach(element => {
        const x = new parameter_class(element[0], element[1], element[2]);
        run(x);
    });
}


const modal_check_button_validation = (abnormal,normal) =>{
    abnormal.addEventListener('click', () => {
        if(normal.checked){
            normal.checked = false;
        }
    });
    normal.addEventListener('click', () => {
        if(abnormal.checked){
            abnormal.checked = false;
        }
    });
}


const parameter = [["RBC",20,40],["WBC",4000,11000],["Heaomoglobin",12,15],["HCT",36,45],["MCV",83,101],["MCH",27,32],["MCHC",32,35],["RDW",12,14],["Platelet",2,4],["Neutrophil",40,80],["Eosinophil",1,6],["Basophil",1,2],["Lymphocyte",20,40],["Monocyte",2,10],["Plateletcrit",0.22,0.24],["RDW_CV",11.5,15.4],];
const submit_btn = document.getElementById("submitbtn");
const reset_btn = document.getElementById("resetbtn");
const submit_for_report_gen = document.querySelector('#submit_for_report_gen');
const normal_array = [];
const abnormal_array = [];
const order_list = document.querySelector('#order_list');
const overlay_submit = document.querySelector('#moreResult__content');
const modal_close = document.querySelector('#modal_close');

submit_btn.addEventListener("click", submit);
reset_btn.addEventListener("click", reset);
const abnormal = document.querySelector('#abnormal');
const normal = document.querySelector('#normal');
modal_check_button_validation(abnormal,normal);
overlay_submit.addEventListener("click", () => {
    print_array();
});
modal_close.addEventListener("click", () => {
    console.log(order_list.hasChildNodes());
    while (order_list.hasChildNodes()) {
        order_list.removeChild(order_list.firstChild);
    }
});
