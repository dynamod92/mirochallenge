var banner = document.getElementById('banner');
        var menu = document.getElementById('menu');
        var logo = document.getElementById('logo');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');

        button1.addEventListener("click", test);
        button2.addEventListener("click", test);

        function test(){

            if(menu.className == "hide"){
                banner.className = "hide";
                menu.className = "nav-expanded";
                logo.className = "hide";

            }
            else {
                menu.className = "hide";
                banner.className = "banner-menu";
                logo.className = "show";
            }
        }