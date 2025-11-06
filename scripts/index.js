function switchPage(event)
{
    alert("body clicked");
    window.location.href = "http://github.com";
    console.log("Test");
}

document.addEventListener('click', switchPage); 
