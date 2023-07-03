let buttons = document.querySelectorAll(".btn");
let display = document.getElementById("display");
let string = "";
let arr = Array.from(buttons);
//let result = eval();
//let submit = document.querySelector('#submit')
//submit.addEventListener('click', eval());

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      let arr = ["÷", "X", "√", "$"];
      string = string.replace(arr[0], "/");
      string = string.replace(arr[1], "*");
      if (string.match("√")) {
        string = string.slice(1);
        string = Math.sqrt(string);
        display.value = string;
      }
      
       string = eval(string);
       display.value = string;
      
    } else if (e.target.innerHTML === "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML === "⇍") {
      string = string.slice(0, -1);
      display.value = string;
    } else if (e.target.innerHTML === "%") {
      string = string / 100;
      display.value = string;
    } 

    
    else if (e.target.innerHTML === "©") {
      alert("Thank you For Using Calculator")

    }
    else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
try {
  console.log(Hello);
} catch (error) {
  console.log("error");
}
