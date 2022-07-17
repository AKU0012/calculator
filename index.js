const key = document.querySelectorAll(".key");
const screen = document.getElementById("screendisplay");
key.forEach((e) => {
    e.addEventListener("click", (e)=>{
        let buttonTxt = e.target.innerText;
        console.log(buttonTxt)
        if (buttonTxt === "AC") {
            screen.value = "";
            
        }
        else if (buttonTxt === "=") {
            screen.value = eval(screen.value);
        }
        else{
        screen.value += buttonTxt;
        console.log(screen.value)
        }
        
    })
});

    














