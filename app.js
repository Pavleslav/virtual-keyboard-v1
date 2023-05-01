let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let deleteKey = document.querySelector('.del_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let ctrl_left = document.querySelector('.ctrl_left');
let ctrl_right = document.querySelector('.ctrl_right');
let alt_left = document.querySelector('.alt_left');
let alt_right = document.querySelector('.alt_right');
// let body = document.querySelector('body');
// let text_input = document.querySelector('.text');
// let change_color = document.querySelector('.change_light_color');
// let keyboard_lights = document.querySelector('.keyboard_lights');
// let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if (e.code !== 'Delete' && el.code !== 'Backspace') {
            el.preventDefault();
          }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
        if(e.code == 'AltLeft') {
            alt_right.classList.remove('active')
        }
        if(e.code == 'AltRight') {
            alt_left.classList.remove('active')
        }
        if(e.code == 'ControlLeft') {
            ctrl_right.classList.remove('active')
        }
        if(e.code == 'ControlRight') {
            ctrl_left.classList.remove('active')
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'Delete') {
            deleteKey.classList.remove('active');
            deleteKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        if(e.code == 'AltLeft') {
            alt_right.classList.remove('active')
            alt_right.classList.remove('remove')
        }
        if(e.code == 'AltRight') {
            alt_left.classList.remove('active')
            alt_left.classList.remove('remove')
        }
        if(e.code == 'ControlLeft') {
            ctrl_right.classList.remove('active')
            ctrl_right.classList.remove('remove')
        }
        if(e.code == 'ControlRight') {
            ctrl_left.classList.remove('active')
            ctrl_left.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})



