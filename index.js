function getFuncName() {
    return getFuncName.caller.name
 }
 const crate_link=(link_name,value)=>
 {
    const link = document.createElement("a");
    link.href = link_name+".html";
    link.innerHTML = "learn more";
    link.setAttribute("target", "_blank");
    link.style.fontSize = "0.8rem";
    value.appendChild(link);
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
// const randomInput=(element)=>{
//     const x = document.getElementById(element.name+"in");
//     if(x)
//     {
//         if(element.low >0 && element.high <1)
//         {
//             x.value = Math.random()/10;
//         }
//         if(element.low > 1 && element.high < 10)
//         {
//             x.value = Math.floor(Math.random());
//         }
//         if (element.low > 10 && element.high < 100) {
//             x.value = Math.floor(Math.random() * 100);
//         }
//         else {
//             x.value = Math.floor(Math.random() * 1000);    
//         }
//     }
//     console.log(x.value);
// }
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
            }
            else if(x.value > high_val)
            {
                value.innerHTML = link_name+" is high";
                value.style.color = "red";
            }
            else
            {
                value.innerHTML = link_name+"is perfect";
                value.style.color = "green";
            }
        }
 }
 const run =(element)=>
 {
    const x = document.getElementById(element.name+"in"); //this variable get the value of input
    const value = document.getElementById(element.name+"out");// this variable get the value of output
    validate(x,value,element.name,element.low,element.high);
    crate_link(element.name,value);
 }
 class parameter_class {
    constructor(name, low, high) {
        this.name = name;
        this.low = low;
        this.high = high;
    }
}
const submit = () => {
    const parameter = [
        ["RBC",20,40],
        ["WBC",4000,11000],
        ["Heaomoglobin",12,15],
        ["HCT",36,45],
        ["MCV",83,101],
        ["MCH",27,32],
        ["MCHC",32,35],
        ["RDW",12,14],
        ["Platelet",2,4],
        ["Neutrophil",40,80],
        ["Eosinophil",1,6],
        ["Basophil",1,2],
        ["Lymphocyte",20,40],
        ["Monocyte",2,10],
        ["Plateletcrit",0.22,0.24],
        ["RDW_CV",11.5,15.4],   
    ];
    randomInput(100)
    parameter.forEach(element => {
        const x = new parameter_class(element[0], element[1], element[2]);
        run(x);
    });
}
setInterval(submit, 500);