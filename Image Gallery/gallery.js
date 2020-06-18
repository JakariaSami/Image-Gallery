var panels = document.querySelectorAll('.panel')

function wide() {
    this.classList.toggle('open')
};

function text(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
};

panels.forEach(p => p.addEventListener('click', wide))
panels.forEach(p => p.addEventListener('transitionend', text))











