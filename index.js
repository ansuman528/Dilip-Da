function WBC()
{
    const x = document.getElementById("WBCin"); //this variable get the value of input
    const value = document.getElementById("WBCout");// this variable get the value of output

        if(x.value == '')
        {
            x.setAttribute("placeholder", "Enter the value");
            value.innerHTML = "";
            x.style.border = "1.5px solid red";
        }
        else
        {
            x.style.border = "1.5px solid green";
            if(x.value < 4000)
            {
                value.innerHTML = "WBC is low";
                value.style.color = "red";
            }
            else if(x.value > 11000)
            {
                value.innerHTML = "WBC is high";
                value.style.color = "red";
            }
            else
            {
                value.innerHTML = "WBC is perfect";
                value.style.color = "green";
            }
        }
}
function RBC()
{
    const x = document.getElementById("RBCin"); //this variable get the value of input
    const value = document.getElementById("RBCout");// this variable get the value of output
    
    if(x.value == '')
        {
            x.setAttribute("placeholder", "Enter the value");
            value.innerHTML = "";
            x.style.border = "1.5px solid red";
        }
        else
        {
            x.style.border = "1.5px solid green";
            if(x.value < 20)
            {
                value.innerHTML = "RBC is low";
                value.style.color = "red";
            }
            else if(x.value > 40)
            {
                value.innerHTML = "RBC is high";
                value.style.color = "red";
            }
            else
            {
                value.innerHTML = "RBC is perfect";
                value.style.color = "green";
            }
        }
}
function Haemoglobin()
{
    const x = document.getElementById("Haemoglobiin"); //this variable get the value of input
    const value = document.getElementById("Haemoglobiout");// this variable get the value of output
    
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 12)
        {
            value.innerHTML = "Haemoglobin is low";
            value.style.color = "red";
        }
        else if(x.value > 15)
        {
            value.innerHTML = "Haemoglobin is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Haemoglobin is perfect";
            value.style.color = "green";
        }
    }
}
function HCT()
{
    const x = document.getElementById("HCTin"); //this variable get the value of input
    const value = document.getElementById("HCTout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";  
        if(x.value < 36)
        {
            value.innerHTML = "HCT is low";
            value.style.color = "red";
        }
        else if(x.value > 45)
        {
            value.innerHTML = "HCT is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "HCT is perfect";
            value.style.color = "green";
        }
    }
}
function MCV()
{
    const x = document.getElementById("MCVin"); //this variable get the value of input
    const value = document.getElementById("MCVout");// this variable get the value of output
    
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 83)
        {
            value.innerHTML = "MCV is low";
            value.style.color = "red";
        }
        else if(x.value > 101)
        {
            value.innerHTML = "MCV is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "MCV is perfect";
            value.style.color = "green";
        }
    }
}
function MCH()
{
    const x = document.getElementById("MCHin"); //this variable get the value of input
    const value = document.getElementById("MCHout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 27)
        {
            value.innerHTML = "MCH is low";
            value.style.color = "red";
        }
        else if(x.value > 32)
        {
            value.innerHTML = "MCH is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "MCH is perfect";
            value.style.color = "green";
        }
    }
}
function MCHC()
{
    const x = document.getElementById("MCHCin"); //this variable get the value of input
    const value = document.getElementById("MCHCout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 32)
        {
            value.innerHTML = "MCHC is low";
            value.style.color = "red";
        }
        else if(x.value > 35)
        {
            value.innerHTML = "MCHC is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "MCHC is perfect";
            value.style.color = "green";
        }
    }
}
function RDW()
{
    const x = document.getElementById("RDWin"); //this variable get the value of input
    const value = document.getElementById("RDWout");// this variable get the value of output
    
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 12)
        {
            value.innerHTML = "RDW is low";
            value.style.color = "red";
        }
        else if(x.value > 14)
        {
            value.innerHTML = "RDW is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "RDW is perfect";
            value.style.color = "green";
        }
    }
}
function Platelet()
{
    const x = document.getElementById("Plateletin"); //this variable get the value of input
    const value = document.getElementById("Plateletout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 2)
        {
            value.innerHTML = "Platelet is low";
            value.style.color = "red";
        }
        else if(x.value > 4)
        {
            value.innerHTML = "Platelet is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Platelet is perfect";
            value.style.color = "green";
        }
    }
}
function Neutrophil()
{
    const x = document.getElementById("Neutrophilin"); //this variable get the value of input
    const value = document.getElementById("Neutrophilout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 40)
        {
            value.innerHTML = "Neutrophil is low";
            value.style.color = "red";
        }
        else if(x.value > 80)
        {
            value.innerHTML = "Neutrophil is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Neutrophil is perfect";
            value.style.color = "green";
        }
    }
}
function Eosinophil()
{
    const x = document.getElementById("Eosinophilin"); //this variable get the value of input
    const value = document.getElementById("Eosinophilout");// this variable get the value of output
    
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 1)
        {
            value.innerHTML = "Eosinophil is low";
            value.style.color = "red";
        }
        else if(x.value > 6)
        {
            value.innerHTML = "Eosinophil is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Eosinophil is perfect";
            value.style.color = "green";
        }
    }
}
function Basophil()
{
    const x = document.getElementById("Basophiin"); //this variable get the value of input
    const value = document.getElementById("Basophiout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 1)
        {
            value.innerHTML = "Basophil is low";
            value.style.color = "red";
        }
        else if(x.value > 2)
        {
            value.innerHTML = "Basophil is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Basophil is perfect";
            value.style.color = "green";
        }

    }
}
function Lymphocyte()
{
    const x = document.getElementById("Lymphocytein"); //this variable get the value of input
    const value = document.getElementById("Lymphocyteout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 20)
        {
            value.innerHTML = "Lymphocyte is low";
            value.style.color = "red";
        }
        else if(x.value > 40)
        {
            value.innerHTML = "Lymphocyte is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Lymphocyte is perfect";
            value.style.color = "green";
        }
    }
}
function Monocyte()
{
    const x = document.getElementById("Monocytein"); //this variable get the value of input
    const value = document.getElementById("Monocyteout");// this variable get the value of output
    
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 2)
        {
            value.innerHTML = "Monocyte is low";
            value.style.color = "red";
        }
        else if(x.value > 10)
        {
            value.innerHTML = "Monocyte is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Monocyte is perfect";
            value.style.color = "green";
        }
    }
}
function Plateletcrit()
{
    const x = document.getElementById("Plateletcritin"); //this variable get the value of input
    const value = document.getElementById("Plateletcritout");// this variable get the value of output
    if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 0.22)
        {
            value.innerHTML = "Plateletcrit is low";
            value.style.color = "red";
        }
        else if(x.value > 0.24)
        {
            value.innerHTML = "Plateletcrit is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "Plateletcrit is perfect";
            value.style.color = "green";
        }
    }
}
function RDW_CV()
{
    const x = document.getElementById("RDW_CVin"); //this variable get the value of input
    const value = document.getElementById("RDW_CVout");// this variable get the value of output
    
if(x.value == '')
    {
        x.setAttribute("placeholder", "Enter the value");
        value.innerHTML = "";
        x.style.border = "1.5px solid red";
    }
    else
    {
        x.style.border = "1.5px solid green";
        if(x.value < 11.5)
        {
            value.innerHTML = "RDW_CV is low";
            value.style.color = "red";
        }
        else if(x.value > 15.4)
        {
            value.innerHTML = "RDW_CV is high";
            value.style.color = "red";
        }
        else
        {
            value.innerHTML = "RDW_CV is perfect";
            value.style.color = "green";
        }
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
const submit = () => {
    randomInput(100);
    RBC();
    WBC();
    Haemoglobin();
    HCT();
    MCV();
    MCH();
    MCHC();
    RDW();
    Platelet();
    Neutrophil();
    Eosinophil();
    Basophil();
    Lymphocyte();
    Monocyte();
    Plateletcrit();
    RDW_CV();
}
setInterval(submit, 500);