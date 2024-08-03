         let btn = document.getElementById("convert");
        let res = document.getElementById("result");
        let unit = document.getElementById("type");
        btn.addEventListener("click", () => {
            let degree = document.getElementById("degrees");
            if (degree.value != "") {
                if (unit.value === "Fahrenheit") {
                    res.innerHTML = `${eval(32 + degree.value * (9 / 5))} Degree ${unit.value}`;
                }
                else if (unit.value === "Kelvin") {
                    let val = parseFloat(degree.value);
                    res.innerHTML = `${eval(val + 273.15)} ${unit.value}`;
                }
                else if (unit.value === "Celsius") {
                    res.innerHTML = `${degree.value} Degree ${unit.value}`;
                }
            }
            else {
                alert("Please enter a value in Celsius first")
            }
        });