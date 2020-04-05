
//carousel filter :
filter('DEVELOPMENT');
function filter(c) {
    var elemet = document.getElementsByClassName('mydiv');
    for (var i = 0; i < elemet.length; i++) {
        if (!elemet[i].classList.contains(c)) {
            if (!elemet[i].classList.contains('dispnone')) {
                elemet[i].classList.add('dispnone');
            }
        } else {
            if (elemet[i].classList.contains(c)) {
                if (elemet[i].classList.contains('dispnone')) {
                    elemet[i].classList.remove('dispnone');
                }
            }
        }
    }
}
/*active nav*/

function activeDes() {
    var b = document.getElementsByClassName('activeDesign');
    var a = document.getElementsByClassName('actidev');
    var c = document.getElementsByClassName('activeT');
    var d = document.getElementsByClassName('activeP');
    if (a[0].classList.contains('active') || c[0].classList.contains('active') || d[0].classList.contains('active')) {
        d[0].classList.remove('active');
        a[0].classList.remove('active');
        c[0].classList.remove('active');
        b[0].classList.add('active');
    }
}



function activeP() {
    var b = document.getElementsByClassName('activeDesign');
    var a = document.getElementsByClassName('actidev');
    var c = document.getElementsByClassName('activeT');
    var d = document.getElementsByClassName('activeP');
    if (a[0].classList.contains('active') || c[0].classList.contains('active') || b[0].classList.contains('active')) {
        b[0].classList.remove('active');
        a[0].classList.remove('active');
        c[0].classList.remove('active');
        d[0].classList.add('active');
    }
}

function activeDev() {
    var b = document.getElementsByClassName('activeDesign');
    var a = document.getElementsByClassName('actidev');
    var c = document.getElementsByClassName('activeT');
    var d = document.getElementsByClassName('activeP');
    if (b[0].classList.contains('active') || c[0].classList.contains('active') || d[0].classList.contains('active')) {
        d[0].classList.remove('active');
        b[0].classList.remove('active');
        c[0].classList.remove('active');
        a[0].classList.add('active');
    }
}

function activeT() {
    var b = document.getElementsByClassName('activeDesign');
    var a = document.getElementsByClassName('actidev');
    var c = document.getElementsByClassName('activeT');
    var d = document.getElementsByClassName('activeP');
    if (a[0].classList.contains('active') || d[0].classList.contains('active') || b[0].classList.contains('active')) {
        b[0].classList.remove('active');
        a[0].classList.remove('active');
        d[0].classList.remove('active');
        c[0].classList.add('active');
    }
}
