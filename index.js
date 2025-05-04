function Encrypt() {
    var text = $("#message").val().toUpperCase();
    var newTxt = "";
    var pass = "";
    var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if ($("#usePassword:checked").length > 0) {
        pass = prompt("Enter a password with no repeating letters").toUpperCase();
        for (var i = 0; i <= pass.length - 1; i++) {
            alpha.splice(alpha.indexOf(pass[i]), 1);
        }
        for (var i = pass.length - 1; i >= 0; i--) {
            alpha.unshift(pass[i]);
        }
        console.log(alpha);
    }
    for (var i = 0; i <= text.length - 1; i++) {
        if (text[i] == " ") {
            newTxt += " ";
        } else {
            var n = alpha.indexOf(text[i]) + 3;
            if (text[i] == "X") {
                n = 0;
            }
            if (text[i] == "Y") {
                n = 1;
            }
            if (text[i] == "Z") {
                n = 2;
            }
            var newAlpha = alpha[n];
            newTxt += newAlpha;
        }
    }
    $("#secretBox").html(newTxt);
}

function Decrypt() {
    var text = $("#message").val().toUpperCase();
    var newTxt = "";
    var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if ($("#usePassword:checked").length > 0) {
        pass = prompt("Enter a password with no repeating letters").toUpperCase();
        for (var i = 0; i <= pass.length - 1; i++) {
            alpha.splice(alpha.indexOf(pass[i]), 1);
        }
        for (var i = pass.length - 1; i >= 0; i--) {
            alpha.unshift(pass[i]);
        }
        console.log(alpha);
    }
    for (var i = 0; i <= text.length - 1; i++) {
        if (text[i] == " ") {
            newTxt += " ";
        } else {
            var n = alpha.indexOf(text[i]) - 3;
            if (text[i] == "A") {
                n = alpha.length - 1;
            }
            if (text[i] == "B") {
                n = alpha.length - 2;
            }
            if (text[i] == "C") {
                n = alpha.length - 3;
            }
            var newAlpha = alpha[n];
            newTxt += newAlpha;
        }
    }
    $("#secretBox").html(newTxt);
}