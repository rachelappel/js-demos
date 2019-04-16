
function compareAbstract() {
    document.getElementById("1").innerText =(false == 'false');
    document.getElementById("2").innerText =(false == '0');
    document.getElementById("3").innerText =(false == undefined);
    document.getElementById("4").innerText =(false == null);
    document.getElementById("5").innerText =(null == undefined);
};
function compareStrict() {
    document.getElementById("11").innerText = (false === 'false');
    document.getElementById("12").innerText = (false === '0');
    document.getElementById("13").innerText = (false === undefined);
    document.getElementById("14").innerText = (false === null);
    document.getElementById("15").innerText = (null === undefined);
};
