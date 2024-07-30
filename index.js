const incLow=document.getElementById("incLow");
const incUp=document.getElementById("incUp");
const incSym=document.getElementById("incSym");
const incNum=document.getElementById("incNum");
const res=document.getElementById("res");

let allow="";
const length=12;
const lowercase="qwertyuiopasdfghjklzxcvbnm";
const uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
const Symbols="!@#$%^&*_-+=?/,<>";
const Num="1234567890";




function PassGen(){
    function getRandomChar(str) {
        return str[Math.floor(Math.random() * str.length)];
    }
    
    function PassGen() {
        let allow = "";
        let password = "";
    
        if (incLow.checked) {
            allow += lowercase;
        }
        if (incUp.checked) {
            allow += uppercase;
        }
        if (incSym.checked) {
            allow += Symbols;
        }
        if (incNum.checked) {
            allow += Num;
        }
    
        if (allow === "") {
            res.textContent = "Please select at least one character type.";
            return;
        }
    
        for (let i = 0; i < length; i++) {
            password += getRandomChar(allow);
        }
    
        res.textContent = password;
    }
    
    // Example usage: attach PassGen function to a button click
    document.getElementById("b1").addEventListener("click", PassGen);

}