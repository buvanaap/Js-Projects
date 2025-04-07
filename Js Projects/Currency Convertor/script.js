fetch('https://api.frankfurter.app/currencies')
    .then(res => res.json())
    .then(data => DisplayDropdown(data))

let select = document.querySelectorAll("select")
console.log(select)
function DisplayDropdown(data) {
    //console.log(Object.entries(data)[0][0])
    let curr = Object.entries(data)

    for (let i = 0; i < curr.length; i++) {
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt

    }
}

let btn = document.querySelector(".convert")
let input = document.getElementById("input")
btn.addEventListener("click", function () {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputvalue = input.value

    if (curr1 ==curr2) {
        alert("Choose different currencies")
    }
    else {
        convert(curr1, curr2, inputvalue)
    }

});
function convert(curr1, curr2, inputvalue) {
    if (!inputvalue || isNaN(inputvalue) || inputvalue <= 0) {
        alert("Enter a valid amount");
        return;
    }

    fetch(`https://api.frankfurter.app/latest?amount=${inputvalue}&from=${curr1}&to=${curr2}`)
        .then((resp) => resp.json())
        .then((data) => {
            document.getElementById('result').value=Object.values(data.rates)[0]
        });
}



