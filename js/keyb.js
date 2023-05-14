'use strict';

let row1 = '`1234567890-=';
let row2 = 'qwertyuiop[]\\';
let row3 = "asdfghjkl;'''";
let row4 = 'zxcvbnm,./';
let row5 = ' ';
let srow1 = '~!@#$%^&*()_+';
let srow2 = 'QWERTYUIOP{}|';
let srow3 = 'ASDFGHJKL:"';
let srow4 = 'ZXCVBNM<>?';


let row1_cont = document.getElementsByClassName('keyboard__row1')[0];
for (var i = 0; i < row1_cont.children.length; i++)
    if (i == row1_cont.children.length - 1)
        row1_cont.children[i].innerHTML = 'Backspace'
    else {
        row1_cont.children[i].innerHTML = row1[i];
        row1_cont.children[i].className += ' ' + row1[i] + ' ' + srow1[i];
    }

let row2_cont = document.getElementsByClassName('keyboard__row2')[0];
row2_cont.children[0].innerHTML = 'Tab';
for (var i = 1; i < row2_cont.children.length; i++) {
    row2_cont.children[i].innerHTML = row2[i - 1];
    row2_cont.children[i].className += ' ' + row2[i - 1] + ' ' + srow2[i - 1];
}

let row3_cont = document.getElementsByClassName('keyboard__row3')[0];
row3_cont.children[0].innerHTML = 'CapsLock';
for (var i = 1; i < row3_cont.children.length; i++)
    if (i == row3_cont.children.length - 1)
        row3_cont.children[i].innerHTML = 'Enter'
    else {
        row3_cont.children[i].innerHTML = row3[i - 1];
        row3_cont.children[i].className += ' ' + row3[i - 1] + ' ' + srow3[i - 1];
    }

let row4_cont = document.getElementsByClassName('keyboard__row4')[0];
row4_cont.children[0].innerHTML = 'Shift';
for (var i = 1; i < row4_cont.children.length; i++)
    if (i == row4_cont.children.length - 1)
        row4_cont.children[i].innerHTML = 'Shift'
    else {
        row4_cont.children[i].innerHTML = row4[i - 1];
        row4_cont.children[i].className += ' ' + row4[i - 1] + ' ' + srow4[i - 1];
    }

let row5_cont = document.getElementsByClassName('keyboard__row5')[0];
row5_cont.children[0].innerHTML = 'Space';
/**----------------------------------------------------------------------------------------------- */
let shiftdowm = () => {
    let row1_cont = document.getElementsByClassName('keyboard__row1')[0];
    for (var i = 0; i < row1_cont.children.length - 1; i++)
        row1_cont.children[i].innerHTML = srow1[i];
    let row2_cont = document.getElementsByClassName('keyboard__row2')[0];
    for (var i = 1; i < row2_cont.children.length; i++)
        row2_cont.children[i].innerHTML = srow2[i - 1];
    let row3_cont = document.getElementsByClassName('keyboard__row3')[0];
    for (var i = 1; i < row3_cont.children.length - 1; i++)
        row3_cont.children[i].innerHTML = srow3[i - 1];
    let row4_cont = document.getElementsByClassName('keyboard__row4')[0];
    for (var i = 1; i < row4_cont.children.length - 1; i++)
        row4_cont.children[i].innerHTML = srow4[i - 1];
}
let shiftup = () => {
    let row1_cont = document.getElementsByClassName('keyboard__row1')[0];
    for (var i = 0; i < row1_cont.children.length - 1; i++)
        row1_cont.children[i].innerHTML = row1[i];
    let row2_cont = document.getElementsByClassName('keyboard__row2')[0];
    for (var i = 1; i < row2_cont.children.length; i++)
        row2_cont.children[i].innerHTML = row2[i - 1];
    let row3_cont = document.getElementsByClassName('keyboard__row3')[0];
    for (var i = 1; i < row3_cont.children.length - 1; i++)
        row3_cont.children[i].innerHTML = row3[i - 1];
    let row4_cont = document.getElementsByClassName('keyboard__row4')[0];
    for (var i = 1; i < row4_cont.children.length - 1; i++)
        row4_cont.children[i].innerHTML = row4[i - 1];
}
let capson = () => {
    let row2_cont = document.getElementsByClassName('keyboard__row2')[0];
    for (var i = 1; i < row2_cont.children.length - 3; i++)
        row2_cont.children[i].innerHTML = srow2[i - 1];
    let row3_cont = document.getElementsByClassName('keyboard__row3')[0];
    for (var i = 1; i < row3_cont.children.length - 3; i++)
        row3_cont.children[i].innerHTML = srow3[i - 1];
    let row4_cont = document.getElementsByClassName('keyboard__row4')[0];
    for (var i = 1; i < row4_cont.children.length - 4; i++)
        row4_cont.children[i].innerHTML = srow4[i - 1];
}
let capsoff = () => {
    let row2_cont = document.getElementsByClassName('keyboard__row2')[0];
    for (var i = 1; i < row2_cont.children.length - 3; i++)
        row2_cont.children[i].innerHTML = row2[i - 1];
    let row3_cont = document.getElementsByClassName('keyboard__row3')[0];
    for (var i = 1; i < row3_cont.children.length - 3; i++)
        row3_cont.children[i].innerHTML = row3[i - 1];
    let row4_cont = document.getElementsByClassName('keyboard__row4')[0];
    for (var i = 1; i < row4_cont.children.length - 4; i++)
        row4_cont.children[i].innerHTML = row4[i - 1];
}
/**----------------------------------------------------------------------------------------------- */

let txt = document.getElementById('area');
let container = document.getElementsByTagName('html')[0];


container.addEventListener('keydown', (e) => {
    txt.scrollTop = txt.scrollHeight;
    let key = e.key;  
    let clState = e.getModifierState('CapsLock');

    if (e.key == 'Shift') {
        key = e.code;
        shiftdowm();
        if (clState) capsoff();
    };

    if (e.key === ' ') key = 'Space';

    let selButt=document.getElementsByClassName(key)[0];
    if (selButt) selButt.style.backgroundColor = 'grey';

    if (e.key === 'CapsLock') {
        if (clState) capson()
        else {
            selButt.style.backgroundColor = 'white';
            capsoff();
        }
    };

    if (e.key === 'Tab') {
        e.preventDefault();
        txt.value += '\t';
    }
    else if (e.key === 'Backspace') {
        txt.value = txt.value.slice(0, txt.value.length - 1);
    }
    else if (e.key === 'Enter') txt.value += '\r\n';

    if (e.key.length == 1) txt.value += e.key;
});


container.addEventListener('keyup', (e) => {
    let key = e.key;

    if (e.key === ' ') key = 'Space';
    
    if (e.key == 'Shift') {
        document.getElementsByClassName(e.code)[0].style.backgroundColor = 'white';
        shiftup();       
    if (e.getModifierState('CapsLock')) capson();        
    };

    if (e.key != 'CapsLock' && document.getElementsByClassName(key)[0])
        document.getElementsByClassName(key)[0].style.backgroundColor = 'white';

});


container.addEventListener('click', (e) => {
    if (e.getModifierState('CapsLock')) {
        document.getElementsByClassName('CapsLock')[0].style.backgroundColor = 'grey';
        capson();
    }
    else {
        document.getElementsByClassName('CapsLock')[0].style.backgroundColor = 'white';
        capsoff();
    }
})
