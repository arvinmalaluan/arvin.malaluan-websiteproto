var introBtn = document.getElementById("intro-btn");
var educBtn = document.getElementById("educ-btn");
var otherBtn = document.getElementById("other-btn");

(function() {
    document.getElementById("short").style.visibility = "visible";
    document.getElementById("educ").style.visibility = "hidden";
    document.getElementById("other").style.visibility = "hidden";
}())

function displayShort() {
    document.getElementById("short").style.visibility = "visible";
    document.getElementById("educ").style.visibility = "hidden";
    document.getElementById("other").style.visibility = "hidden";
    
    introBtn.style.color = "#5F4216";
    introBtn.style.borderBottom = "1px solid #5F4216";
    introBtn.style.fontWeight = "bold";
    introBtn.style.paddingBottom = "30px";

    educBtn.style.color = "black";
    educBtn.style.borderBottom = "none";
    educBtn.style.fontWeight = "normal";
    educBtn.style.paddingBottom = "none";
    otherBtn.style.color = "black";
    otherBtn.style.borderBottom = "none";
    otherBtn.style.fontWeight = "normal";
    otherBtn.style.paddingBottom = "none";
}

function displayEduc() {
    document.getElementById("short").style.visibility = "hidden";
    document.getElementById("educ").style.visibility = "visible";
    document.getElementById("other").style.visibility = "hidden";

    educBtn.style.color = "#5F4216";
    educBtn.style.borderBottom = "1px solid #5F4216";
    educBtn.style.fontWeight = "bold";
    educBtn.style.paddingBottom = "30px";

    introBtn.style.color = "black";
    introBtn.style.borderBottom = "none";
    introBtn.style.fontWeight = "normal";
    introBtn.style.paddingBottom = "none";
    otherBtn.style.color = "black";
    otherBtn.style.borderBottom = "none";
    otherBtn.style.fontWeight = "normal";
    otherBtn.style.paddingBottom = "none";
}

function displayOther() {
    document.getElementById("short").style.visibility = "hidden";
    document.getElementById("educ").style.visibility = "hidden";
    document.getElementById("other").style.visibility = "visible";
    console.log("js working prop");

    otherBtn.style.color = "#5F4216";
    otherBtn.style.borderBottom = "1px solid #5F4216";
    otherBtn.style.fontWeight = "bold";
    otherBtn.style.paddingBottom = "30px";

    educBtn.style.color = "black";
    educBtn.style.borderBottom = "none";
    educBtn.style.fontWeight = "normal";
    educBtn.style.paddingBottom = "none";
    introBtn.style.color = "black";
    introBtn.style.borderBottom = "none";
    introBtn.style.fontWeight = "normal";
    introBtn.style.paddingBottom = "none";
}