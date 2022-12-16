class InputController {
    xValue = document.getElementById("x_value").value;

    yValue = $("input[name='y_value']:checked").val();
    rValue = document.querySelector('input[name="r_value"]:checked').value;
}

let controller;

function validateAllValues() {
    controller = new InputController();
    let xV = controller.xValue;

    if (isNaN(parseFloat(xV)) || !(-3 <= parseFloat(xV) && parseFloat(xV) <= 3)) {
        $("#x_error").html("Please select an integer in the interval [-3;3] as the parameter X!");
        return false;
    } else {
        document.getElementById('x_error').innerHTML = "";
    }
    return true;

}
