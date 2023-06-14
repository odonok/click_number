import "./styles.css";

for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;
  var height = 10;
  var width = 10;
  var fontsize = 12;

  height = height + Math.floor(Math.random() * 100);
  width = height;
  if (width > 30 && width < 50) {
    fontsize = 24;
  } else if (width >= 50) {
    fontsize = 44;
  }

  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);

  var backcolor = "#";
  for (var i = 0; i < 6; i++) {
    backcolor += ((16 * Math.random()) | 0).toString(16);
  }
  var fontcolor = "#";
  do {
    for (i = 0; i < 6; i++) {
      fontcolor += ((16 * Math.random()) | 0).toString(16);
    }
  } while (fontcolor === backcolor);

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
  document.getElementById(num).style.height = height + "px";
  document.getElementById(num).style.width = width + "px";
  document.getElementById(num).style.fontSize = fontsize + "px";
  document.getElementById(num).style.background = backcolor;
  document.getElementById(num).style.color = fontcolor;
}

var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};
