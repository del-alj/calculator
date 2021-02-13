let data = {    firstNum: "",
                secondNum: "",
                firstSambol: "",
                secondNum: ""}

function getSambol(sambol) {
    if (!data.firstSambol)
        data.firstSambol = sambol;
    else if (data.firstNum)
    {
        data.secondSambol = sambol;
        calculator(data);
    }
    console.log(data.secondNum)
}

function getNum(nb) {
    if (!data.firstSambol)
        data.firstNum = data.firstNum + nb;
    else
        data.secondNum = data.secondNum + nb;

}

function clear()
{
    data.firstNum = "";
    data.secondNum = "";
    data.firstSambol = "";
    data.secondNum = "";
}

 function init(data)
 {
    data.secondNum ="";
    data.firstSambol = (data.secondSambol != '=') ? (data.secondSambol) : ("");
    data.secondSambol ="";
 }
function calculator(data) {
    if (data.secondSambol)
    {
        let str = data.firstNum + data.firstSambol + data.secondNum;
        data.firstNum = eval(str);
        console.log(str);
        console.log(data.firstNum);
        
        init(data);
    }
}


// function main()
// {
//     eventTarget.addEventListener("keydown", event => {
//         if (event.isComposing || event.keyCode === 229) {
//           return;
//         }
//         console.log("ok");
//       });
// }
// main();