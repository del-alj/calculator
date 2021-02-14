let data = {    firstNum: "",
                secondNum: "",
                firstSambol: "",
                secondNum: "",
                result: false}

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
        data.firstNum = data.firstNum + nb;
    else
        data.secondNum = data.secondNum + nb;
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
        console.log(str + " = " + data.firstNum);
        init(data);
        data.result = true;
    }
    else{
        clear(data);
        console.log("Error");
    }
}

function fromKey()
{ 
    document.addEventListener('keypress', (event) => {
        const keyName = event.key;
        if (keyName >= 0 && keyName <= 9)
            getNum(keyName);
        else if (keyName === "/" || keyName === "*" || keyName === "-" || keyName === "+")
            getSambol(keyName);
        else if (keyName === "=" || keyName === "Enter")
            getSambol("=");
        else if (keyName === '.')
        {
            // console.log(".");
        }
      }, false);
}

function main()
{
    fromKey()
}

main();