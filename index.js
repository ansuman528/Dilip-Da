const validation = async () =>{
        const name = document.querySelector("input[name='name']").value;
        const age = document.querySelector("input[name='age']").value;
        const email = document.querySelector("input[name='email']").value;
        if(name == "" || age == "" || email == ""){
            alert("Please fill all the fields");
            return false;
        }
        else
        {
            const male = document.getElementById('male');
            const female = document.getElementById('female');
            let checked = "";
            if(male.checked){
                checked = male.value
            }
            else{
                checked = female.value
            }
            await postData(name,age,email,checked);
            window.location.href = "mainContent.html"
            
        }
}

const btn = document.querySelector("a");
btn.addEventListener("click", validation)

const saveUser = "http://localhost:3000/saveUser"
// const saveParam = "http://localhost:3000/saveParam"

async function postData(per_name,per_age,per_email,per_gender)
{
    // let person = {"name":per_name, "age":per_age, "email":per_email,"gender":per_gender};
    person = {name: per_name,age:per_age,email:per_email,gender:per_gender}
    await fetch(saveUser, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(person)
    })
    .then(response => {
        // Handle response from server
        console.log('Response:', response.json());
    })
    .catch(error => {
        // Handle error
        console.log(error);
    });
}
    