let inputs=document.querySelectorAll('.controls input')

function update(){
    const suffix= this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}`+suffix)
}
inputs.forEach(i => 
    i.addEventListener('change',update)
);
inputs.forEach(i => 
    i.addEventListener('mousemove',update)
);