// AHA MODAL
var aha_modal = document.getElementById("aha_modal");

var aha_btn = document.getElementById("aha_btn");

var aha_close = document.getElementsByClassName("aha_close")[0];

aha_btn.onclick = function(){
    aha_modal.style.display = "block";
}

aha_close.onclick = function(){
    aha_modal.style.display = "none";
}

// NSTEM MODAL
var nstem_modal = document.getElementById("nstem_modal");

var nstem_btn = document.getElementById("nstem_btn");

var nstem_close = document.getElementsByClassName("nstem_close")[0];

nstem_btn.onclick = function(){
    nstem_modal.style.display = "block";
}

nstem_close.onclick = function(){
    nstem_modal.style.display = "none";
}
