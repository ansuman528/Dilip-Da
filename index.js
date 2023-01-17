const validation = () =>{
        const name = document.querySelector("input[name='name']").value;
        const age = document.querySelector("input[name='age']").value;
        const email = document.querySelector("input[name='email']").value;
        if(name == "" || age == "" || email == ""){
            alert("Please fill all the fields");
            return;
        }
        else
        {
            localStorage.setItem("name", document.querySelector("input[name='name']").value);
            localStorage.setItem("age", document.querySelector("input[name='age']").value);
            localStorage.setItem("email", document.querySelector("input[name='email']").value);
            const male = document.getElementById('male');
            const female = document.getElementById('female');
            if(male.checked){
                localStorage.setItem("sex",male.value);
            }
            else{
                localStorage.setItem("sex",female.value);
            }
            window.location.href = "mainContent.html"
        }   
}

const btn = document.querySelector("a");
btn.addEventListener("click", validation);