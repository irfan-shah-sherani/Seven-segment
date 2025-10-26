const button = document.getElementById('myButton');
let a = document.querySelector(".ra");
let b = document.querySelector(".rb");
let c = document.querySelector(".rc");
let d = document.querySelector(".rd");
let e = document.querySelector(".re");
let f = document.querySelector(".rf");
let g = document.querySelector(".rg");

button.addEventListener('click', handleButtonClick);

function handleButtonClick() {
    const input = document.getElementById("input");
    const inputValue = input.value;

    resetClasses();

    switch (inputValue) {
        case '1':
            a.classList.add("na");
            b.classList.add("gb");
            c.classList.add("gc");
            d.classList.add("nd");
            e.classList.add("ne");
            f.classList.add("nf");
            g.classList.add("ng");
            break;
        case '2':
            a.classList.add("ga");
            b.classList.add("gb");
            c.classList.add("nc");
            d.classList.add("gd");
            e.classList.add("ge");
            f.classList.add("nf");
            g.classList.add("gg");
            break;
        case '3':
            a.classList.add("ga");
            b.classList.add("gb");
            c.classList.add("gc");
            d.classList.add("gd");
            e.classList.add("ne");
            f.classList.add("nf");
            g.classList.add("gg");
            break;
        case '4':
            a.classList.add("na");
            b.classList.add("gb");
            c.classList.add("gc");
            d.classList.add("nd");
            e.classList.add("ne");
            f.classList.add("gf");
            g.classList.add("gg");
            break;
        case '5':
            a.classList.add("ga");
            b.classList.add("nb");
            c.classList.add("gc");
            d.classList.add("gd");
            e.classList.add("ne");
            f.classList.add("gf");
            g.classList.add("gg");
            break;
        case '6':
            a.classList.add("ga");
            b.classList.add("nb");
            c.classList.add("gc");
            d.classList.add("gd");
            e.classList.add("ge");
            f.classList.add("gf");
            g.classList.add("gg");
            break;
        case '7':
            a.classList.add("ga");
            b.classList.add("gb");
            c.classList.add("gc");
            d.classList.add("nd");
            e.classList.add("ne");
            f.classList.add("nf");
            g.classList.add("ng");
            break;
        case '8':
            a.classList.add("ga");
            b.classList.add("gb");
            c.classList.add("gc");
            d.classList.add("gd");
            e.classList.add("ge");
            f.classList.add("gf");
            g.classList.add("gg");
            break;
        case '9':
            a.classList.add("ga");
            b.classList.add("gb");
            c.classList.add("gc");
            d.classList.add("gd");
            e.classList.add("ne");
            f.classList.add("gf");
            g.classList.add("gg");
            break;
        case '0':
            a.classList.add("ga");
            b.classList.add("gb");
            c.classList.add("gc");
            d.classList.add("gd");
            e.classList.add("ge");
            f.classList.add("gf");
            g.classList.add("ng");
            break;
        default:
            a.classList.add("ga");
            b.classList.add("nb");
            c.classList.add("nc");
            d.classList.add("gd");
            e.classList.add("ge");
            f.classList.add("gf");
            g.classList.add("gg");
            break;
    }

    input.value = "";
}

function resetClasses() {
    const elements = [a, b, c, d, e, f, g];
    elements.forEach(element => {
        element.className = element.className.split(' ')[0];
    });
}
