const str_screen = document.getElementById("str-screen");
const result_screen = document.getElementById("result-screen");
const btn_panel = document.getElementById("btn-panel");
const btns = btn_panel.getElementsByTagName("button");



const modStrScreen = (str, action) => {
    if (action === 'clear') {
        str_screen.innerHTML = '';
        return;
    }
    if (action === 'bck') {
        const s = str_screen.innerHTML;
        if (s.length < 1) return;
        const s2 = s.substr(0, s.length-1);
        str_screen.innerHTML = s2;
        return;
    }
    if (action === 'add') {
        str_screen.innerHTML += str;
        return;
    }
    if (action === 'result') {
        runCalc(str_screen.innerHTML);
        return;
    }
    if (action === 'addminus') {
        const s = str_screen.innerHTML;
        if (s[0] === '-') {
            str_screen.innerHTML = s.substr(1);
        } else {
            str_screen.innerHTML = '-' + s;
        }
        return;
    }
}


const runCalc = (str) => {
    try {
        result_screen.innerHTML = eval(str);
    } catch (err) {
        result_screen.innerHTML = 'выражение не распознано';
    }
    
}


const buttonClick = (e) => {
    console.log(e.currentTarget.id);
    switch (e.currentTarget.id) {
        case 'jc-bck': modStrScreen('','bck');
        break;
        case 'jc-0': modStrScreen('0','add');
        break;
        case 'jc-1': modStrScreen('1','add');
        break;
        case 'jc-2': modStrScreen('2','add');
        break;
        case 'jc-3': modStrScreen('3','add');
        break;
        case 'jc-4': modStrScreen('4','add');
        break;
        case 'jc-5': modStrScreen('5','add');
        break;
        case 'jc-6': modStrScreen('6','add');
        break;
        case 'jc-7': modStrScreen('7','add');
        break;
        case 'jc-8': modStrScreen('8','add');
        break;
        case 'jc-9': modStrScreen('9','add');
        break;
        case 'jc--': modStrScreen('-','add');
        break;
        case 'jc-+': modStrScreen('+','add');
        break;
        case 'jc-*': modStrScreen('*','add');
        break;
        case 'jc-/': modStrScreen('/','add');
        break;
        case 'jc-,': modStrScreen('.','add');
        break;
        case 'jc-(': modStrScreen('(','add');
        break;
        case 'jc-)': modStrScreen(')','add');
        break;
        case 'jc-+|-': modStrScreen('-','addminus');
        break;
        case 'jc-C': modStrScreen('C','clear');
        break;
        case 'jc-=': modStrScreen('=','result');
        break;
        default: 
            break;
    }
    return
}

const init = () => {
    for (let item of btns){
        item.addEventListener("click", buttonClick);
    }
    str_screen.innerHTML = ' ';
    result_screen.innerHTML = ' ';
}

init();