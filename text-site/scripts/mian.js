
function multiply(num1,num2)
{
    let result=num1*num2;
    alert(result);
}
let myImage=document.querySelector("img");
myImage.onclick=function()
{
    let mySrc=myImage.getAttribute("src");
    if (mySrc==="images/fire-girl.png")
    {
        myImage.setAttribute("src","images/NCU.jpg");
    }
    else
    {
        myImage.setAttribute("src","images/fire-girl.png");
    }
}
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");
function setUserName()
{
    let myName=prompt("请输入你的名字");
    if(!myName)
    {
        setUserName();
    }
    localStorage.setItem("name",myName);
    myHeading.textContent="mozilla 酷毙了，"+myName;
}
if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    let storedName=localStorage.getItem("name");
    myHeading.textContent="mozilla 酷毙了，"+storedName;
}
myButton.onclick=function()
{
    setUserName();
}
myHeading.onclick=function()
{
    let answer_=prompt("是否更改名字");
    localStorage.SetItem("answer",answer_);
    if (answer==="是")
    {
        setUserName();
    }
}