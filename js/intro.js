let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{A_}", ms: 100 },
    { t: "{AG_}", ms: 100 },
    { t: "{AGO_}", ms: 100 },
    { t: "{AGOU_}", ms: 100 },
    { t: "{AGOUR_}", ms: 100 },
    { t: "{AGOURA_}", ms: 100 },
    { t: "{AGOURAR_}", ms: 100 },
    { t: "{AGOURAR _}", ms: 100 },
    { t: "{AGOURAR Z_}", ms: 100 },
    { t: "{AGOURAR ZA_}", ms: 100 },
    { t: "{AGOURAR ZAK_}", ms: 100 },
    { t: "{AGOURAR ZAKA_}", ms: 100 },
    { t: "{AGOURAR ZAKAR_}", ms: 100 },
    { t: "{AGOURAR ZAKARI_}", ms: 100 },
    { t: "{AGOURAR ZAKARIA_}", ms: 100 },
    { t: "{AGOURAR ZAKARIAE_}", ms: 100 },
    // { t: "{OTTOMATE_}", ms: 100 },
    // { t: "{OTTOMATED_}", ms: 100 },
    { t: "{AGOURAR ZAKARIAE }", ms: 200 },
    { t: "{AGOURAR ZAKARIAE_}", ms: 200 },
    { t: "{AGOURAR ZAKARIAE }", ms: 200 },
    { t: "{AGOURAR ZAKARIAE_}", ms: 200 },
    { t: "{AGOURAR ZAKARIAE}", ms: 200 },
    { t: "{AGOURAR ZAKARIAE}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('container').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();