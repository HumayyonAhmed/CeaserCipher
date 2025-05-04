function Encrypt() {
    var text = $("#message").val().toUpperCase();
    var newTxt = "";
    var pass = "";
    var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    // Check if the user selected "Use Password"
    if ($("#usePassword:checked").length > 0) {
        pass = prompt("Enter a password with no repeating letters").toUpperCase();
        
        if (pass && pass.length > 0) {
            // Remove repeated letters in the password
            pass = [...new Set(pass.split(''))].join('');
            
            // Modify the alphabet based on the password
            for (var i = 0; i < pass.length; i++) {
                alpha.splice(alpha.indexOf(pass[i]), 1);
            }
            for (var i = pass.length - 1; i >= 0; i--) {
                alpha.unshift(pass[i]);
            }
        } else {
            alert("Password is required.");
            return;
        }
    }
    
    // Encrypt the text
    for (var i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            newTxt += " ";
        } else {
            var index = alpha.indexOf(text[i]);
            if (index !== -1) {
                var n = (index + 3) % 26;  // Shift by 3
                var newAlpha = alpha[n];
                newTxt += newAlpha;
            }
        }
    }
    $("#secretBox").html(newTxt);
}

function Decrypt() {
    var text = $("#message").val().toUpperCase();
    var newTxt = "";
    var pass = "";
    var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    // Check if the user selected "Use Password"
    if ($("#usePassword:checked").length > 0) {
        pass = prompt("Enter a password with no repeating letters").toUpperCase();
        
        if (pass && pass.length > 0) {
            // Remove repeated letters in the password
            pass = [...new Set(pass.split(''))].join('');
            
            // Modify the alphabet based on the password
            for (var i = 0; i < pass.length; i++) {
                alpha.splice(alpha.indexOf(pass[i]), 1);
            }
            for (var i = pass.length - 1; i >= 0; i--) {
                alpha.unshift(pass[i]);
            }
        } else {
            alert("Password is required.");
            return;
        }
    }
    
    // Decrypt the text
    for (var i = 0; i < text.length; i++) {
        if (text[i] == " ") {
            newTxt += " ";
        } else {
            var index = alpha.indexOf(text[i]);
            if (index !== -1) {
                var n = (index - 3 + 26) % 26;  // Reverse shift by 3
                var newAlpha = alpha[n];
                newTxt += newAlpha;
            }
        }
    }
    $("#secretBox").html(newTxt);
}
