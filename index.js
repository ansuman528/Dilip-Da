function wbc()
{
    const x = document.getElementById("").value; //this variable get the value of input
    const value = document.getElementById("");// this variable get the value of output
    
    if(x < 52)
    {
        value.innerHTML = "wbc is low";//
    }
    else if(x>75)
    {
        value.innerHTML = "wbc is high";
    }
    else
    {
        value.innerHTML = "Wbc is perfect";
    }
}
function rbc()
{
    const x = document.getElementById("").value; //this variable get the value of input
    const value = document.getElementById("");// this variable get the value of output
    
    if(x < 20)
    {
        value.innerHTML = "rbc is low";//
    }
    else if(x>40)
    {
        value.innerHTML = "rbc is high";
    }
    else
    {
        value.innerHTML = "rbc is perfect";
    }
}