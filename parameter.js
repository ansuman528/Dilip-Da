function wbc()
{
    const x = document.getElementById("wbcin").value; //this variable get the value of input
    const value = document.getElementById("wbcout");// this variable get the value of output
    
    if(x < 4000)
    {
        value.innerHTML = "WBC is low";
    }
    else if(x > 10000)
    {
        value.innerHTML = "WBC is high";
    }
    else
    {
        value.innerHTML = "WBC is perfect";
    }
}
function rbc()
{
    const x = document.getElementById("rbcin").value; //this variable get the value of input
    const value = document.getElementById("rbcout");// this variable get the value of output
    
    if(x < 20)
    {
        value.innerHTML = "RBC is low";//
    }
    else if(x > 40)
    {
        value.innerHTML = "RBC is high";
    }
    else
    {
        value.innerHTML = "RBC is perfect";
    }
}
function Haemoglobin()
{
    const x = document.getElementById("Haemoglobiin").value; //this variable get the value of input
    const value = document.getElementById("Haemoglobiout");// this variable get the value of output
    
    if(x < 12)
    {
        value.innerHTML = "HB is low";//
    }
    else if(x > 15)
    {
        value.innerHTML = "HB is high";
    }
    else
    {
        value.innerHTML = "HB is perfect";
    }
}
function HCT()
{
    const x = document.getElementById("HCTin").value; //this variable get the value of input
    const value = document.getElementById("HCTout");// this variable get the value of output
    
    if(x < 36)
    {
        value.innerHTML = "HCT is low";//
    }
    else if(x > 45)
    {
        value.innerHTML = "HCT is high";
    }
    else
    {
        value.innerHTML = "HCT is perfect";
    }
}
function MCV()
{
    const x = document.getElementById("MCVin").value; //this variable get the value of input
    const value = document.getElementById("MCVout");// this variable get the value of output
    
    if(x < 83)
    {
        value.innerHTML = "MCV is low";//
    }
    else if(x > 101)
    {
        value.innerHTML = "MCV is high";
    }
    else
    {
        value.innerHTML = "MCV is perfect";
    }
}
function MCH()
{
    const x = document.getElementById("MCHin").value; //this variable get the value of input
    const value = document.getElementById("MCHout");// this variable get the value of output
    
    if(x < 27)
    {
        value.innerHTML = "MCH is low";//
    }
    else if(x > 32)
    {
        value.innerHTML = "MCH is high";
    }
    else
    {
        value.innerHTML = "MCH is perfect";
    }
}
function MCHC()
{
    const x = document.getElementById("MCHCin").value; //this variable get the value of input
    const value = document.getElementById("MCHCout");// this variable get the value of output
    
    if(x < 32)
    {
        value.innerHTML = "MCHC is low";//
    }
    else if(x > 35)
    {
        value.innerHTML = "MCHC is high";
    }
    else
    {
        value.innerHTML = "MCHC is perfect";
    }
}
function RDW()
{
    const x = document.getElementById("RDWin").value; //this variable get the value of input
    const value = document.getElementById("RDWout");// this variable get the value of output
    
    if(x < 12)
    {
        value.innerHTML = "RDW is low";//
    }
    else if(x > 14)
    {
        value.innerHTML = "RDW is high";
    }
    else
    {
        value.innerHTML = "RDW is perfect";
    }
}
function Platelet()
{
    const x = document.getElementById("Plateletin").value; //this variable get the value of input
    const value = document.getElementById("Plateletout");// this variable get the value of output
    
    if(x < 2)
    {
        value.innerHTML = "PC is low";//
    }
    else if(x > 4)
    {
        value.innerHTML = "PC is high";
    }
    else
    {
        value.innerHTML = "PC is perfect";
    }
}
function Neutrophil()
{
    const x = document.getElementById("Neutrophilin").value; //this variable get the value of input
    const value = document.getElementById(" Neutrophilout");// this variable get the value of output
    
    if(x < 40)
    {
        value.innerHTML = "NC is low";//
    }
    else if(x > 80)
    {
        value.innerHTML = "NC is high";
    }
    else
    {
        value.innerHTML = "NC is perfect";
    }
}
function Eosinophil()
{
    const x = document.getElementById("Eosinophilin").value; //this variable get the value of input
    const value = document.getElementById("Eosinophilout");// this variable get the value of output
    
    if(x < 1)
    {
        value.innerHTML = "EC is low";//
    }
    else if(x > 6)
    {
        value.innerHTML = "EC is high";
    }
    else
    {
        value.innerHTML = "EC is perfect";
    }
}
function Basophil()
{
    const x = document.getElementById("Basophiin").value; //this variable get the value of input
    const value = document.getElementById("Basophiout");// this variable get the value of output
    
    if(x < 1)
    {
        value.innerHTML = "BC is low";//
    }
    else if(x > 2)
    {
        value.innerHTML = "BC is high";
    }
    else
    {
        value.innerHTML = "BC is perfect";
    }
}
function Lymphocyte()
{
    const x = document.getElementById("Lymphocytein").value; //this variable get the value of input
    const value = document.getElementById("Lymphocyteout");// this variable get the value of output
    
    if(x < 20)
    {
        value.innerHTML = "LC is low";//
    }
    else if(x > 40)
    {
        value.innerHTML = "LC is high";
    }
    else
    {
        value.innerHTML = "LC is perfect";
    }
}
function Monocyte()
{
    const x = document.getElementById("Monocytein").value; //this variable get the value of input
    const value = document.getElementById("Monocyteout");// this variable get the value of output
    
    if(x < 2)
    {
        value.innerHTML = "MC is low";//
    }
    else if(x > 10)
    {
        value.innerHTML = "MC is high";
    }
    else
    {
        value.innerHTML = "MC is perfect";
    }
}