function switchPage(event)
{
    alert("body clicked");
    document.location.pathname = "../pages/home.html";
    console.log("Test");
}

document.addEventListener('click', switchPage); 
