function switchPage(event)
{
    alert("body clicked");
    window.location.href = "/pages/home.html";
    console.log("Test");
}

document.addEventListener('click', switchPage); 
