
dataArray = [];
abnormal_behavior = [];
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
        x[i].getElementsByTagName("input")[0].value =  Math.floor(Math.random()*limit);
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
                abnormal_behavior.push(link_name);
                return "low";
            }
            else if(x.value > high_val)
            {
                value.innerHTML = link_name+" is high";
                value.style.color = "red";
                abnormal_array.push(link_name);
                abnormal_behavior.push(link_name);
                localStorage.setItem(link_name, x.value);
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
    return x;
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
   
    //randomInput(100);
    parameter.forEach(element => {
        const x = new parameter_class(element[0], element[1], element[2]);
        let val = run(x);
        let temp_data = {
            name: x.name,
            value: val.value
        }
        dataArray.push(temp_data);
    });
    console.log(abnormal_array);
    localStorage.setItem("abnormal", JSON.stringify(abnormal_array));
    postData();
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
const genReport = () => {
    // window.location.href = "";
    // window.open(report.html, '_blank');
    NewTab();
}
function NewTab() {
    window.open(
    "report.html", "_blank");
}


const parameter = [["RBC",38,59],["WBC",4000,11000],["Heaomoglobin",12,15],["HCT",36,45],["MCV",83,101],["MCH",27,32],["MCHC",32,35],["RDW",12,14],["Platelet",2,4],["Neutrophil",40,80],["Eosinophil",1,6],["Basophil",1,2],["Lymphocyte",20,40],["Monocyte",2,10],["Plateletcrit",0.22,0.24],["RDW_CV",11.5,15.4],];
const submit_btn = document.getElementById("submitbtn");
const reset_btn = document.getElementById("resetbtn");
const report_generation = document.getElementById("gen_report");
const submit_for_report_gen = document.querySelector('#submit_for_report_gen');
const normal_array = [];
const abnormal_array = [];
const order_list = document.querySelector('#order_list');
const overlay_submit = document.querySelector('#moreResult__content');
const modal_close = document.querySelector('#modal_close');

submit_btn.addEventListener("click", submit);
reset_btn.addEventListener("click", reset);
report_generation.addEventListener("click", genReport);
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


console.log(dataArray);

// const saveParam = "https://server01.onrender.com/saveParam"
const saveParam = "http://localhost:3000/saveParam"

async function postData()
{
    data = {
        RBC: dataArray[0].value,
        WBC: dataArray[1].value,
        Heaomoglobin: dataArray[2].value,
        HCT: dataArray[3].value,
        MCV: dataArray[4].value,
        MCH: dataArray[5].value,
        MCHC: dataArray[6].value,
        RDW: dataArray[7].value,
        Platelet: dataArray[8].value,
        Neutrophil: dataArray[9].value,
        Eosinophil: dataArray[10].value,
        Basophil: dataArray[11].value,
        Lymphocyte: dataArray[12].value,
        Monocyte: dataArray[13].value,
        Plateletcrit: dataArray[14].value,
        RDW_CV: dataArray[15].value,
    }
    await fetch(saveParam, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    .then(response => {
        // Handle response from server
        console.log('Response:', response.json());
    })
    .catch(error => {
        // Handle error
        console.log(error);
    });
    dataArray.splice(0,dataArray.length);
}
    