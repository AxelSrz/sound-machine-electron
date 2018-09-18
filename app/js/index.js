'use strict';

let soundButtons = document.querySelector('.button-sound');

for (let i = 0; i < soundButtons.length; i++) {
    const soundButton = soundButtons[i];
    const soundName = soundButtons.attributes['data-sound'].value;

    prepareButton(soundButton, soundName);
}

function prepareButton(buttonE1, soundName) {
    buttonE1.querySelector('span').style.backgroundImage = 'url("img/icons/'+ soundName +'.png")';

    const audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
    buttonE1.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
    });
}
