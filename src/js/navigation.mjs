export function enableNavigation() {
    enableSubmenus();
    enableMenuButton();
}



function enableSubmenus() {

    let menuButton = document.querySelector("#global-nav-toggle")
    let submenuButtons = document.querySelectorAll(".global-nav__split-button__toggle");
    for(const button of submenuButtons){
        button.addEventListener("click", (event) =>{
        let target = event.target;
        if(target.tagName != "ul")
            {
                target = target.closest("li");
            }
        target.querySelector(".icon").classList.toggle("rotate");
        const submenu = target.querySelector("ul");
        if(submenu)
        {
            target = submenu
        }
        else{
            target = event.target.closest("ul");
        }
        // target.classList.toggle("show");
        if(target.getAttribute("aria-expanded") == "true")
        {
            target.setAttribute("aria-expanded", false);
        }
        else{
            target.setAttribute("aria-expanded", true);
        }
        });
    };
    
    
    }

    function enableMenuButton()
    {
        menuButton.addEventListener("click", (event) => {
            let target = event.target;
            // toggle the show class on the global-nav
            let global_nav_class = document.querySelector(".global-nav").classList
            global_nav_class.toggle("show");
            // check to see if target is the button or something inside the button
            if(target.tagName != "BUTTON")
            {
                target = target.closest("button");
            }
            // check to see if we just opened or closed the menu
                if(global_nav_class.contains("show")){
                    // if we opened it then set the aria-expanded attribute on the button to true
                    target.ariaExpanded = true
                }
                else {
                    // if we closed it then set the aria-expanded attribute on the button to false
                    target.ariaExpanded = false;
                }
        });
    }