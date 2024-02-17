// JavaScript for handling tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, clickedEvent) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    clickedEvent.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// JavaScript for handling side menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-250px";
}

// JavaScript for Parallax Effect
window.addEventListener('scroll', function () {
    let header = document.getElementById('header');
    let scrollPosition = window.scrollY;
    header.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

// Form entry
$(document).ready(function(){
    $(".form").on('submit', function(e){
        e.preventDefault();
        var name = $(".name").val();
        var email = $(".email").val();
        $.post("https://script.google.com/macros/s/AKfycbx4F6WaEuAJQ2s_MUqGvXHbY7mM4hAiyHvjyZIDZXqG0aqzWLdNY6uK_69p05PVHDcB/exec", {Name: name, Email: email}, function(res) {
            if(res == 1) {
                alert("Done");
            } else {
                alert("Error");
            }
        });
    });
});

