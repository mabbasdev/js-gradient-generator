const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const previewBox = document.getElementById('previewBox');
const codeOutput = document.querySelector('#codeOutput span');
const copyBtn = document.getElementById('copyBtn')

let rgb1 = "#282ad2"
let rgb2 = "#77eaf1"

hexValues = () => {
    let hexCode = "0123456789abcdef"
    let colorCode = "#"
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16)
        colorCode = colorCode + hexCode[randomIndex]
    }
    return colorCode
}

leftBtn.addEventListener('click', () => {
    rgb1 = hexValues()
    leftBtn.innerHTML = rgb1
    previewBox.style.background = `linear-gradient(135deg, ${rgb1}, ${rgb2})`
    codeOutput.innerText = `background: linear-gradient(135deg, ${rgb1}, ${rgb2});`
})

rightBtn.addEventListener('click', () => {
    rgb2 = hexValues()
    rightBtn.innerHTML = rgb2
    previewBox.style.background = `linear-gradient(135deg, ${rgb1}, ${rgb2})`
    codeOutput.innerText = `background: linear-gradient(135deg, ${rgb1}, ${rgb2});`
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeOutput.innerText)
    copyBtn.innerText = 'Copied!'
    copyBtn.style.backgroundColor = '#6ee308ff'
    copyBtn.style.color = '#222'
    
    setTimeout(() => {
        copyBtn.innerText = 'Copy'
        copyBtn.style.backgroundColor = ''
        copyBtn.style.color = ''
    }, 1500);
})