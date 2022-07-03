
function transL(){
    var x = document.getElementsByClassName('forms')[0];
    var y = document.getElementsByClassName('divider')[0];
    x.style.transform = 'translateX(0%)';
    x.style.transitionDuration = '0.5s';
    y.style.transform = 'translateX(0%)';
    y.style.transitionDuration = '0.5s';
}

function transR(){
    var x = document.getElementsByClassName('forms')[0];
    var y = document.getElementsByClassName('divider')[0];
    x.style.transform = 'translateX(-50%)';
    x.style.transitionDuration = '0.5s';
    y.style.transform = 'translateX(123%)';
    y.style.transitionDuration = '0.5s';
}
