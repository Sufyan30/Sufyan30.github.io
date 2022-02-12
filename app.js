alert("This website is under development. The mobile version is unstable.");

function hover(hoverid) {
    document.getElementById(hoverid).style.animation = 'designtxt 0.35s forwards';
};

function unhover(hoverid) {
    document.getElementById(hoverid).style.animation = 'undesigntxt 0.35s forwards';
};