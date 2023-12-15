var option = "Skeleton";
$(document).ready(function () {
$(".list-link").click(function() {
  option = $(this).attr("id");
  updateDisplay();
});


if (option == null) {
  option = "Skeleton";
  updateDisplay();
}

if (json[option] == null)
  option = "Skeleton";
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
    "Skeleton": {
      "name": "Skeleton Code",   
      "desc": ["Skeleton code is a template",
               "It is necessary to have a functioning HTML",
              "It makes the web browser view the file as a website using metadata."],
      "example": "skeleton.webp"
    },

    "Tags": {
      "name": "Elements/Tags",   
      "desc": ["An HTML element is defined by a start tag, some content, and an end tag.",
               "The HTML element is everything from the start tag to the end tag",
               "Elements impart special properties onto their contents"],
      "example": "tags.webp",
      "refLink": ["html_elements"]
    },

    "Text": {
      "name": "Text",   
      "desc": ["HTML headings are titles or subtitles that you want to display on a webpage.",
               "Headings decrease in size with h1 being the biggest and h6 being the smallest",
               "A paragraph always starts on a new line, and is usually a block of text.",],
      "example": "text.webp",
      "refLink": [
                "html_headings",
                "html_paragraphs"
                 ],
    },

    "Links": {
      "name": "Links",   
      "desc": ["The HTML &lt;a&gt; tag defines a hyperlink.",
               "The most important attribute of the &lt;a&gt; element is the href attribute, which indicates the link's destination.",
               "Clicking on the link text, will send the reader to the specified URL address."],
      "example": "links.webp",
      "refLink": ["html_links"]
    },

    "Images": {
      "name": "Images",   
      "desc": ["The HTML &lt;img&gt; tag is used to embed an image in a web page.",
               "The <img> tag has two required attributes:<br>src - Specifies the path to the image<br>alt - Specifies an alternate text for the image",],
      "example": "images.webp",
      "refLink": ["html_images"]
    },

    "More": {
      "name": "More Methods",
      "desc": ["These are addtional methods in HTML Programming"]
    },
    "Table": {
      "name": "Tables",   
      "desc": ["Tables are made of many nested elements that arrange data in rows and Columns."],
      "example": "table.webp",
      "refLink": ["html_tables"]
    },

    "Attributes": {
      "name": "Attributes",   
      "desc": ["All HTML elements can have attributes",
               "Attributes provide additional information about elements",
               "Attributes are always specified in the start tag",
               "Attributes usually come in name/value pairs like: name=&quot;value&quot;",],
      "example": "attr.webp",
      "refLink": ["html_attributes"]
    },

    "Comments": {
      "name": "Comments",   
      "desc": ["HTML comments are not displayed in the browser, but they can help document your HTML source code.",
               "They can also hide content."],
      "example": "comment.webp",
      "refLink": ["html_comments"]
    },

    "Connections": {
      "name": "Connections",   
      "desc": ["The &lt;link&gt; tag is for linking a <i>.css</i> file to your HTML; allowing CSS to be used.", "The &ltstyle&gt; element can link a <i>.js</i> file to your HTML; allowing JavaScript to be used."],
      "example": "connect.webp",
      "refLink": ["html_cSS",
                  "html_scripts"]
    }
  };



function updateDisplay() {
  var lesson = json[option];
  var newContent = "";
 
  if (lesson.name != null)
    newContent += "<h2 class=\"display-title\">" + lesson.name + "</h2><ul>";
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
      newContent += "<a href=\"https://www.w3schools.com/html/" + lesson.refLink[i] + ".asp\" class=\"center\" target=\"_blank\">" + lesson.refLink[i].charAt(5).toUpperCase() + lesson.refLink[i].replace(/html_/g, "").slice(1) +" - W3Schools</a><br>";
  //newContent += "</ul>"
  };
    $("#display").html(newContent);
    $(".listCurrent").removeClass("listCurrent");
    $("#" + option).addClass("listCurrent");
  };