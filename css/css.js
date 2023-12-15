var option = "ClassID";
$(document).ready(function () {
$(".list-link").click(function() {
  option = $(this).attr("id");
  updateDisplay();
});


if (option == null) {
  option = "ClassID";
  updateDisplay();
}

if (json[option] == null)
  option = "ClassID";
updateDisplay();
});

// This code is for the dropdown
$("#More").click(function() {
  if (option == "More") {
    if ($(this).hasClass("dropped")) hide("#More");
    else drop("#More");
  }
});

if (option == "More" || $("#" + option).hasClass("non-main")) 
drop("#More");

function drop(id) {
  $(id).find(".dropdown").removeClass("bi-caret-down-fill");
  $(id).find(".dropdown").addClass("bi-caret-up-fill");
  if (id == "#More") 
    $(".non-main").css("display", "block");
  $(id).addClass("dropped");
}

function hide(id) {
  $(id).find(".dropdown").removeClass("bi-caret-up-fill");
  $(id).find(".dropdown").addClass("bi-caret-down-fill");
  if (id == "#More") 
    $(".non-main").css("display", "none");
  $(id).removeClass("dropped");
}

var json = {
    "ClassID": {
      "name": "Classes and IDs",   
      "desc": ["The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.",
               "The id attribute is often used to point to a id name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific id name.",
               "The difference between a class and an id is tha an id can only be used once in an HTML while classes can be repeated as many times as you want.",
               "An id is selected with a <b>#</b>",
               "A class is selected with a <b>.</b>"],
      "example": "ClassID.webp"
    },

    "Selectors": {
      "name": "Selectors",   
      "desc": ["CSS selectors are used to find (or select) the HTML elements you want to style."],
      "example": "selectors.webp",
      "refLink": "css/css_  selectors.asp"
    },

    "Prop": {
      "name": "Properties",   
      "desc": ["CSS properties are what style their selected element/class/id.",
               "They can do many things like changing the shape and size of something or choosing its color."],
      "example": "prop.webp",
      "refLink": "cssref/   index.php"
    },

    "Div": {
      "name": "Div",   
      "desc": ["The &lt;div&gt; element is used as a container for other HTML elements.",
               "It is used in css for many utilities like layout."],
      "example": "div.webp",
      "refLink": "html/html_div.asp"
    },

    "Box": {
      "name": "Box Model",   
      "desc": ["In CSS, the term <i>box model</i> is used when talking about design and layout.",
               "The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins."],
      "example": "boxModel.png",
      "refLink": "css/css_ boxmodel.asp"
    }
  };



function updateDisplay() {
  var lesson = json[option];
  var newContent = "";
 
  if (lesson.name != null)
    newContent += "<h2 class=\"display-title\">" + lesson.name + "</h2>";
    if (lesson.desc != null) {
      for (let i = 0; i <lesson.desc.length; i++)
        newContent += "<li>" + lesson.desc[i] + "</li>";
      newContent += "</ul>"
    };
  if (lesson.example != null)
    newContent += "<h4 class=\"display-heading\">Example</h4><div class='display-img'><img src=\"Assets/" + lesson.example + "\"alt=\"image\"></div>";
  if (lesson.refLink != null) {
      newContent += "<h4 class=\"display-heading\">For more information</h4><a href=\"https://www.w3schools.com/" + lesson.refLink + "\" class=\"center\" target=\"_blank\">" + lesson.refLink.charAt(10).toUpperCase() + lesson.refLink.slice(11, -4) + " - W3Schools</a><br/>";
  };
    $("#display").html(newContent);
    $(".listCurrent").removeClass("listCurrent");
    $("#" + option).addClass("listCurrent");
  };