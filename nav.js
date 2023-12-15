var nav = "" + 
"<nav class=\"navbar navbar-expand-custom\">" + 
"            <div class=\"container-fluid\">" + 
"                <div class=\"navigator\" id=\"home\">" + 
"                    <a href=\"../home/index.html\" class=\"nav-link nomargin\">" + 
"                        <img src=\"../Assets/icon.webp\" id=\"home-logo\" alt=\"home_link\">" + 
"                    </a>" + 
"                </div>" + 
"                <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsible\">" + 
"                    <span class=\"bi bi-list\"></span>" + 
"                  </button>" + 
"                  <div class=\"collapse navbar-collapse\" id=\"collapsible\">" + 
"                    <ul class=\"navbar-nav\">" + 
"                        <li class=\"nav-item navigator\" id=\"start\">" + 
"                            <a class=\"nav-link\" href=\"../start/index.html\">" + 
"                                <img src=\"../Assets/misc.webp\" class=\"img-fluid barImg\" alt=\"start_link\">" + 
"                                <br class=\"nav-text-break\">" + 
"                                Getting Started" + 
"                            </a>" + 
"                        </li>" +
"                        <li class=\"nav-item navigator\" id=\"html\">" + 
"                            <a class=\"nav-link\" href=\" ../html/index.html\">" + 
"                                <img src=\"../Assets/html.webp\" class=\"img-fluid barImg\" alt=\"html_link\">" + 
"                                <br class=\"nav-text-break\">" + 
"                                 HTML" + 
"                            </a>" + 
"                        </li>" + 
"                        <li class=\"nav-item navigator\" id=\"css\">" + 
"                            <a class=\"nav-link\" href=\"../css/index.html\">" + 
"                                <img src=\"../Assets/css.webp\" class=\"img-fluid barImg\" alt=\"css_link\">" + 
"                                <br class=\"nav-text-break\">" + 
"                                CSS" + 
"                            </a>" + 
"                        </li>" + 
"                        <li class=\"nav-item navigator\" id=\"js\">" + 
"                            <a class=\"nav-link\" href=\"../js/index.html\">" + 
"                                <img src=\"../Assets/js.webp\" class=\"img-fluid barImg\" alt=\"js_link\">" + 
"                                <br class=\"nav-text-break\">" + 
"                                JavaScript" + 
"                            </a>" + 
"                        </li>" + 
"        </nav>" 
"";
$('#header').html(nav);
//All navbar icons modified from bootstrap icons. Logo icon was made in photopea.