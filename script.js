left_color = document.querySelector(".color_left");
right_color = document.querySelector(".color_right");
body = document.querySelector(".body");
css_code = document.querySelector(".curr_css_text");
function Gradient_color(){
    body.style.background = "linear-gradient(to right, " 
    + left_color.value + ", " 
    + right_color.value + ")";
    css_code.textContent = body.style.background;
}
left_color.addEventListener("input", Gradient_color);
right_color.addEventListener("input", Gradient_color);
