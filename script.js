let data = {    firstNum: "",
                secondNum: "",
                firstSambol: "",
                secondNum: "",
                result: false}
                
function write(str) {
    document.querySelector("#imput").value = str; 
}

function clear(data)
{
    data.firstNum = "";
    data.secondNum = "";
    data.firstSambol = "";
    data.secondNum = "";
    data.result= false;
    
}

function del()
{
    clear(data);
    write("");
}

function getSambol(sambol) {
    if (!data.firstSambol)
        data.firstSambol = sambol;
    else if (data.firstNum)
    {
        data.secondSambol = sambol;
        calculator(data);
    }
}

function getNum(nb) {
    if (!data.firstSambol && data.result == false)
    {   data.firstNum = data.firstNum + nb;
        write(data.firstNum);
    }
    else
    {   data.secondNum = data.secondNum + nb;
        write(data.secondNum);
    }
}   
   
function init(data)
{
    data.secondNum ="";
    data.firstSambol = (data.secondSambol != '=') ? (data.secondSambol) : ("");
    data.secondSambol ="";
}
    
function calculator(data) {
    
    if (data.secondSambol && data.firstSambol != "=" && data.secondNum)
    {
        let str = data.firstNum + data.firstSambol + data.secondNum;
        data.firstNum = eval(str);
        write(data.firstNum);
        init(data);
        data.result = true;
    }
    else{
        clear(data);
        write("Error");
    }
}

function fromKey()
{ 
    document.addEventListener('keyup', (event) => {
        const keyName = event.key;
        if ((keyName >= 0 && keyName <= 9) || keyName === '.')
            getNum(keyName);
        else if (keyName === "/" || keyName === "*" || keyName === "-" || keyName === "+")
            getSambol(keyName);
        else if (keyName === "=" || keyName === "Enter")
            getSambol("=");
        else if (keyName === "Backspace") {
            write("");
            del();
        }
    }, false);
}

function main()
{
    fromKey()
}

main();