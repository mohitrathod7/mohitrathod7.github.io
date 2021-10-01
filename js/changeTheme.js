const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    var theme = document.getElementsByTagName("html")[0].getAttribute("data-theme");

    if (theme === "dark"){
        document.documentElement.setAttribute("data-theme", "light");
        // localStorage.setItem("data-theme", "light");
    }
    else{
        document.documentElement.setAttribute("data-theme", "dark");
        // localStorage.setItem("data-theme", "dark");
    }
});