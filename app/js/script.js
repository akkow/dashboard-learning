const DarkButton = document.getElementById('dark');
const LightButton = document.getElementById('light');

const setColorMode = () => {
    if(localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
        DarkButton.click();
    } else if(localStorage.getItem('colorMode') == 'light'){
        setLightMode();
        LightButton.click();
    }
};

const checkMode = () => {
    if (localStorage.getItem('colorMod') == null) {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            LightButton.click();
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            DarkButton.click();
        }
    }
};

const checkModeChange = () => {
    window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        checkMode();
    });
};

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark'
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light'
};

setColorMode();
checkMode();
checkModeChange();

const radioButtons = document.querySelectorAll('.toggle__wrapper input');

for(let i = 0; i < radioButtons.length; i++){
    radioButtons[i].addEventListener('click', event => {
        if(DarkButton.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        } else {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }
    });
}