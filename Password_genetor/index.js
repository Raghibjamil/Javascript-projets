const passwordBox=document.getElementById("password");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXWZ";
const lowercase=uppercase.toLowerCase();
const number="0123456789";
const symbol="@#$%^&*()_+|}{?></\][=-!~";
// console.log(lowercase);
// console.log(uppercase)
// console.log(number);
// console.log(symbol);
// console.log(number[0],number[1])

let final_String=uppercase+uppercase+number+symbol;
// console.log(arr)

function createpassword(){
    let password="";
    // password += uppercase[Math.floor(Math.random()*uppercase.length)];
    // password += lowercase[Math.floor(Math.random()*lowercase.length)];
    // password += number[Math.floor(Math.random()*number.length)];
    // password += symbol[Math.floor(Math.random()*symbol.length)];
    // console.log(password)
    // let count=0;
    while(password.length<length){
        password += final_String[Math.floor(Math.random()*final_String.length)]
        // count++;
    }
    // console.log(count)
    // console.log(password);
    passwordBox.value=password;

}

function copypassword(){
    /**
     * select:-
     * The select() function is used to search an element in the page with the given id, class or tag name and return it as a p5.element. It has a syntax similar to the CSS selector.
     */
    passwordBox.select();
    /**
     * copy:-
     * Copies the current selection to the clipboard. Conditions of having this behavior enabled vary from one browser to another, and have evolved over time. Check the compatibility table to determine if you can use it in your case.
     */
    /**
     * execommand:-
     * 
     *  its document object exposes an execCommand method to run commands that manipulate the current editable region, such as form inputs or contentEditable elements.
     */
    document.execCommand("copy");
}