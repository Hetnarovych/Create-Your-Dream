window.onload = function () {



    var con = document.getElementById('con');
    var sun = document.getElementById('sun');
    var sky = document.getElementById('sky');
    var bac = document.getElementById('back');
    var tree = document.getElementById('tree');
    var treeMost = document.getElementById('treeMost');
    var fish = document.getElementById('fish');
    var circle = document.getElementById('circle');
    var circletwo = document.getElementById('circletwo');

    con.onmousemove = function (world) {

        var element = con;

        var ex = con.offsetLeft;
        var ey = con.offsetTop;

        var ew = con.offsetWidth;
        var eh = con.offsetHeight;

        var halfEw = ew / 2;
        var halfEh = eh / 2;

        var cursorX = -(world.pageX - ex - halfEw) / halfEw;
        var cursorY = -(world.pageY - ey - halfEh) / halfEh;

        con.style.transform = "translateX(" + cursorX * 1 + "px) translateY(" + cursorY * 1 + "px)";

        sun.style.transform = "translateX(" + cursorX * 4 + "px) translateY(" + cursorY * 3 + "px)";

        bac.style.transform = "translateX(" + cursorX * 20 + "px) translateY(" + cursorY * 20 + "px)";

        sky.style.transform = "translateX(" + cursorX * 8 + "px) translateY(" + cursorY * 0 + "px)";

        tree.style.transform = "translateX(" + cursorX * 50 + "px) translateY(" + cursorY * 30 + "px)";

        treeMost.style.transform = "translateX(" + cursorX * 80 + "px) translateY(" + cursorY * 40 + "px)";

        fish.style.transform = "translateX(" + cursorX * 20 + "px) translateY(" + cursorY * 20 + "px)";

        circle.style.transform = "translateX(" + cursorX * 20 + "px) translateY(" + cursorY * 20 + "px)";

        circletwo.style.transform = "translateX(" + cursorX * 20 + "px) translateY(" + cursorY * 20 + "px)";



        con.onmouseleave = function () {

            sun.style.transform = "translateX(0px) translateY(0px)";
            bac.style.transform = "translateX(0px) translateY(0px)";
            sky.style.transform = "translateX(0px) translateY(0px)";
            tree.style.transform = "translateX(0px) translateY(0px)";
            fish.style.transform = "translateX(0px) translateY(0px)";
            circle.style.transform = "translateX(0px) translateY(0px)";
            circletwo.style.transform = "translateX(0px) translateY(0px)";
            treeMost.style.transform = "translateX(0px) translateY(0px)";
        }
    }


    var menu = document.getElementById('hamb');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var treem = document.getElementById('treem');
    var modal = document.getElementById('modal');
    var checked = 1;




    menu.onclick = function () {

        if (checked == 1) {
            one.style.transform = "rotatez(45deg) translatey(22.5px)"
            two.style.transform = "translatex(600px)"
            treem.style.transform = "rotatez(-45deg) translatey(-22.5px)"
            checked++;
            modal.style.transform = "translatex(-20px)"
            con.style.filter = "blur(20px)";
        } else if (checked > 1) {
            modal.style.transform = "translatex(600px)"
            one.style.transform = "rotatez(0deg) translatey(0px)"
            two.style.transform = "translatex(0px)"
            treem.style.transform = "rotatez(0deg) translatey(0px)"
            checked--;
            con.style.filter = "blur(0px)";

        }

    }

    con.onclick = function (s) {

        if (checked > 1) {
            modal.style.transform = "translatex(600px)"
            one.style.transform = "rotatez(0deg) translatey(0px)"
            two.style.transform = "translatex(0px)"
            treem.style.transform = "rotatez(0deg) translatey(0px)"
            checked--;
            con.style.filter = "blur(0px)";
        }
    }
}



//
//var mute = document.getElementById('mute');
//var x = document.getElementById('audio')
//
//mute.onclick = audio.pause();
