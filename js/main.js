// navbar Menu
const amazing = document.querySelectorAll('.amazing');
const amazingItem = document.querySelectorAll('.amazing-item');
const icons = document.querySelectorAll('.icon');
const showMmobildMenuBox = document.querySelector('.show-mobild-menu-box');
// const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee, index) => {
    ee.addEventListener('click', () => {
        amazingItem[index].classList.toggle('hidden');
        amazingItem[index].classList.toggle('opacity-0');
        ee.classList.toggle('bg-slate-100');
        icons[index].classList.toggle('rotate-180');
    });
});

const menuIcon = () => {
    showMmobildMenuBox.classList.toggle('hidden');
};




// ==========================================Image Change============================//
function imgChangeOne(imageOne, imageTwo, darkImgOne, darkImgTwo) {
    document.querySelector('.imgOne').src = imageOne;
    document.querySelector('.imgTwo').src = imageTwo;
    document.querySelector('.darkImgOne').src = darkImgOne;
    document.querySelector('.darkImgTwo').src = darkImgTwo;
}

var activeIcons = document.getElementsByClassName('icons');
for (var i = 0; i < activeIcons.length; i++) {
    activeIcons[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('activeIcon');
        if (current.length > 0) {
            current[0].className = current[0].className.replace(' activeIcon', '');
        }
        this.className += ' activeIcon';
    });
}

var toggle = document.getElementById('toggle');
var whiteImg = document.getElementById('whiteImg');
var darkImg = document.getElementById('darkImg');
let isDarkMode = false;

const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    switchTheme();
};

const toDark = () => {
    darkImg.classList.remove('hidden');
    whiteImg.classList.add('hidden');
};

const toLight = () => {
    darkImg.classList.add('hidden');
    whiteImg.classList.remove('hidden');
};

const switchTheme = () => {
    isDarkMode ? toDark() : toLight();
 
};

// ===========================================================================================================================================//
// Hover One
const liveUpdate = document.getElementById('liveUpdate');
const firstImg1 = document.getElementById('firstImg1');
const firstImg2 = document.getElementById('firstImg2');
const firstImg3 = document.getElementById('firstImg3');
const textHiddenFirst = document.getElementById('textHiddenFirst');
const live = document.getElementById('live');

liveUpdate.addEventListener('pointerenter', (event) => {
    liveUpdate.classList.add('shadow-2xl');
    firstImg1.classList.add('hidden');
    firstImg2.classList.add('md:block');
    firstImg3.classList.remove('hidden');
    textHiddenFirst.classList.remove('md:hidden');
    live.classList.add('text-blue-700');
});
liveUpdate.addEventListener('pointerleave', (event) => {
    liveUpdate.classList.remove('shadow-2xl');
    firstImg1.classList.remove('hidden');
    firstImg2.classList.remove('md:block');
    firstImg3.classList.add('hidden');
    textHiddenFirst.classList.add('md:hidden');
    live.classList.remove('text-blue-700');
});
// Hover Two
const nativeBuild = document.getElementById('nativeBuild');
const secondImg1 = document.getElementById('secondImg1');
const secondImg2 = document.getElementById('secondImg2');
const secondImg3 = document.getElementById('secondImg3');
const textHiddenSecond = document.getElementById('textHiddenSecond');
const native = document.getElementById('native');

nativeBuild.addEventListener('pointerenter', (event) => {
    nativeBuild.classList.add('shadow-2xl');
    secondImg1.classList.add('hidden');
    secondImg2.classList.add('md:block');
    secondImg3.classList.remove('hidden');
    textHiddenSecond.classList.remove('md:hidden');
    native.classList.add('text-blue-700');
});
nativeBuild.addEventListener('pointerleave', (event) => {
    nativeBuild.classList.remove('shadow-2xl');
    secondImg1.classList.remove('hidden');
    secondImg2.classList.remove('md:block');
    secondImg3.classList.add('hidden');
    textHiddenSecond.classList.add('md:hidden');
    native.classList.remove('text-blue-700');
});
//Hover Three
const appPublishing = document.getElementById('appPublishing');
const thirdImg1 = document.getElementById('thirdImg1');
const thirdImg2 = document.getElementById('thirdImg2');
const thirdImg3 = document.getElementById('thirdImg3');
const textHiddenthird = document.getElementById('textHiddenThird');
const app = document.getElementById('app');

appPublishing.addEventListener('pointerenter', (event) => {
    appPublishing.classList.add('shadow-2xl');
    thirdImg1.classList.add('hidden');
    thirdImg2.classList.add('md:block');
    thirdImg3.classList.remove('hidden');
    textHiddenThird.classList.remove('md:hidden');
    app.classList.add('text-blue-700');
});
appPublishing.addEventListener('pointerleave', (event) => {
    appPublishing.classList.remove('shadow-2xl');
    thirdImg1.classList.remove('hidden');
    thirdImg2.classList.remove('md:block');
    thirdImg3.classList.add('hidden');
    textHiddenThird.classList.add('md:hidden');
    app.classList.remove('text-blue-700');
});
// Hover Four
const cloudCli = document.getElementById('cloudCli');
const fourthImg1 = document.getElementById('fourthImg1');
const fourthImg2 = document.getElementById('fourthImg2');
const fourthImg3 = document.getElementById('fourthImg3');
const textHiddenFourth = document.getElementById('textHiddenFourth');
const cloud = document.getElementById('cloud');

cloudCli.addEventListener('pointerenter', (event) => {
    cloudCli.classList.add('shadow-2xl');
    fourthImg1.classList.add('hidden');
    fourthImg2.classList.add('md:block');
    fourthImg3.classList.remove('hidden');
    textHiddenFourth.classList.remove('md:hidden');
    cloud.classList.add('text-blue-700');
});
cloudCli.addEventListener('pointerleave', (event) => {
    cloudCli.classList.remove('shadow-2xl');
    fourthImg1.classList.remove('hidden');
    fourthImg2.classList.remove('md:block');
    fourthImg3.classList.add('hidden');
    textHiddenFourth.classList.add('md:hidden');
    cloud.classList.remove('text-blue-700');
});
// ====================================================================================================================================//
// activeButton
function activeButton() {
    let activeButtons = document.querySelectorAll('.buttons');
    let activeContent = document.querySelectorAll('.activeContent');

    activeButtons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            activeButtons.forEach((icon) => {
                icon.classList.remove('activeButton');
            });
            icon.classList.add('activeButton');
            activeContent.forEach((content) =>
                content.classList.add('hidden')
            );
            activeContent[index].classList.remove('hidden');
        });
    });
}

// languageIconActive
function languageIconActive() {
    let languageIcons = document.querySelectorAll('.languageIcons');
    let languageContent = document.querySelectorAll('.languageContent');

    languageIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            languageIcons.forEach((icon) => {
                icon.classList.remove('languageIconActive');
            });
            icon.classList.add('languageIconActive');
            languageContent.forEach((content) =>
                content.classList.remove('activeCode')
            );
            languageContent[index].classList.add('activeCode');
        });
    });
}


