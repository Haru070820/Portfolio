const sections = document.querySelectorAll('section');
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index){
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    currentSection = index;
    sections[index].scrollIntoView({ behavior: 'smooth'});

    setTimeout(() => {
        isScrolling = false;
    }, 700);
}

window.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
    }
    else{
        scrollToSection(currentSection - 1);
    }
});

window.addEventListener('keydown', (e) => {
    if (isScrolling) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown'){
        scrollToSection(currentSection + 1);
    }
    else if (e.key === 'ArrowUp' || e.key ==='PageUp'){
        scrollToSection(currentSection - 1);
    }
});