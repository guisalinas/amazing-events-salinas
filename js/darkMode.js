const darkModeBtn = document.getElementById('dark-mode-btn');

darkModeBtn.addEventListener('click', ()=>{
    let value = document.body.classList.toggle('dark-mode');
    localStorage.setItem("mode", value);
});

let isDark = localStorage.getItem("mode");

if (isDark == 'true'){
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}