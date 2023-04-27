let menu = document.getElementById("menu");

menu.style.maxHeight = "0px";
function showMenu()
{
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "200px";
        
    }
    else
    {
        menu.style.maxHeight = "0px"; 
    }
}