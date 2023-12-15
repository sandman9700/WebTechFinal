var option = "Variables";
$(document).ready(function () {
$(".list-link").click(function() {
  option = $(this).attr("id");
  updateDisplay();
});


if (option == null) {
  option = "Variables";
  updateDisplay();
}

if (json[option] == null)
  option = "Variables";
updateDisplay();
});


var json = {
    "Variables": {
      "name": "Variables",   
      "desc": ["Variables are Containers for Storing Data.",
               "They are declared using <i>var, let, and const</i>",
               "Both let and const CANNOT be redeclared, and Const cannot be reassigned either.",],
      "example": "Variables.webp",
      "refLink": ["variables", "let", "const"]
    },

    "Functions": {
      "name": "Function",   
      "desc": ["A JavaScript function is a block of code designed to perform a particular task.",
               "This is meant to be a tasked commonly repeated throughout your code",
               "A JavaScript function is executed when it is invoked (called).",
               "A function is defined with the keyword <code class=\"code-display\">function</code> followed by parenthesis <b>()</b>",
               "The parentheses may include parameter names separated by commas: <b>(parameter1, parameter2, ...)</b>",
               "The code to be executed, by the function, is placed inside curly brackets: <b>{}</b>"],
      "example": "Function.webp",
      "refLink": ["function"]
    },

    "Operators": {
      "name": "Operators",   
      "desc": ["Operators can be used for arithmetic/mathematical operations (addition, subtraction, multiplication, division, etc.)",
               "Assignment operators assign values to variables (=, +=).",
               "The <code class=\"code-display\">=</code> operator is used in the definition of variables.",
               "Operators can be used in combining strings together (that is a trick I used in this site)."],
      "refLink": ["operators"]
    },

    "Strings": {
      "name": "Strings",   
      "desc": ["JavaScript strings are for storing and manipulating text.",
               "A JavaScript string is zero or more characters written inside quotes.",
               "If you have quotation marks inside a string you must use an escape character <code class=\"code-display\">\\</code> to prevent confusing your browser when loading your script."],
      "example": "Strings.webp",
      "refLink": ["strings"]
    },

    "Loops": {
      "name": "Loops",   
      "desc": ["Loops can execute a block of code a number of times, and can even involve different values",
        "A <code class=\"code-display\">for</code> loop is the most basic loop and involves 3 parts",
        "The first part is defining a variable commonly <code class=\"code-display\">i</code> to track what iteration of the loop it is on. It is set to zero or one",
        "The second part sets the amount of times the code will be looped using the <code class=\"code-display\">&lt;</code> operator and a number of a numerical variable",
        "The third and final part uses the <code class=\"code-display\">++</code> operator to move on to the next iteration of the loop until it reaches the final iteration."
        ],
      "example": "loop.webp",
      "refLink": ["loop_for"]
    },

    "Conditionals": {
      "name": "If/Else",   
      "desc": ["Conditional statements are used to perform different actions based on different conditions.",
        "Use <code class=\"code-display\">if</code> to specify a block of code to be executed, if a specified condition is true",
        "Use <code class=\"code-display\">else</code> to specify a block of code to be executed, if the same condition is false",
        "Use <code class=\"code-display\">else if</code> to specify a new condition to test, if the first condition is false"
        ],
      "example": "cond.webp",
      "refLink": ["if_else"]
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
      newContent += "<h4 class=\"display-heading\">For more information</h4>"
       for (let i = 0; i <lesson.refLink.length; i++)
       newContent += "<a href=\"https://www.w3schools.com/js/js_" + lesson.refLink[i] + ".asp\" class=\"center\" target=\"_blank\">" + lesson.refLink[i].charAt(0).toUpperCase() + lesson.refLink[i].slice(1).replace(/_/g, " ") +" - W3Schools</a><br>";
      };
    $("#display").html(newContent);
    $(".listCurrent").removeClass("listCurrent");
    $("#" + option).addClass("listCurrent");
  };