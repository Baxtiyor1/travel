let elTitle = document.querySelector('#result')

let dollir = 10650.34;
let yevro = 11650.03;

let ticket = 500;
let hotel = 250;
let muzey = 120;

let sum = (ticket + hotel) * dollir + muzey * yevro;

let name = prompt('Ismingizni kiriting');
let izoh = prompt(name + ' Bilet narxi-$500, Mehmonxona narxi-$250, muzey va ko’ngilochar joylar uchun 120 yevro, Xo\'sh siz ketishga tayyormisiz keling tekshirib ko\'ramiz');
let money =Number(prompt(name + " sizga " + sum + ' so\'m kerak bo\'ladi, sizdachi qancha mablag\' bor', -0));

if(sum <= money){
    elTitle.textContent = "Oq yo\'l, maroqli xordiq tilayman " + name
}else{
    elTitle.textContent = name + ' tushkunlikga tushma yanada yaxshiroq mehnat qil hamda o\'ylagan maqsading tomon olg\'a yur!!!'
}