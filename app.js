alert("This website is undergoing renovation and is currently broken.");

function hover(hoverid) {
    document.getElementById(hoverid).style.animation = 'designtxt 0.35s forwards';
};

function unhover(hoverid) {
    document.getElementById(hoverid).style.animation = 'undesigntxt 0.35s forwards';
};

function hoverimg(hoverid) {
    document.getElementById(hoverid).style.animation = 'designtxt 0.35s forwards';
};

function unhoverimg(hoverid) {
    document.getElementById(hoverid).style.animation = 'undesigntxt 0.35s forwards';
};

function copydc() {
    navigator.clipboard.writeText("alehyer#3767");
};