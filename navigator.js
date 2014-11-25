var pages = [
    "01html.html",
    "02css.html",
    "03javascript-fundamentals.html",
    "04javascript-variables-and-types.html",
    "05javascript-functions.html",
    "06javascript-objects.html",
    "07javascript-arrays.html",
    "08webgl.html",
    "09webgl-geometry-data.html",
    "10webgl-shaders.html",
    "11webgl-textures.html",
    "12webgl-libraries.html",
    "13webgl-debugging.html",
    "14webgl-frameworks.html"
];

var pageTitles = [
    "HTML",
    "CSS",
    "JavaScript fundamentals",
    "JavaScript variables and types",
    "JavaScript functions",
    "JavaScript objects",
    "JavaScript arrays and typed arrays",
    "WebGL getting started",
    "WebGL geometry data",
    "WebGL shaders",
    "WebGL textures",
    "WebGL libraries",
    "WebGL debugging",
    "WebGL frameworks"
];

function insertNavigator(){
    var loc = location.href.toString();
    var filename = loc.substring(loc.lastIndexOf('/')+1);
    var index = pages.indexOf(filename);
    if (index==0){
        document.write("<button class='yui3-button' onclick='document.location.href=\"index.html\";'>Index &lt;</button>");
    }
    if (index>0){
        document.write("<button class='yui3-button' onclick='document.location.href=\""+pages[index-1]+"\";'>"+pageTitles[index-1]+" &lt;</button>");
    }
    if (index < pages.length-1){
        document.write("<button class='yui3-button' onclick='document.location.href=\""+pages[index+1]+"\";'>&gt; "+pageTitles[index+1]+"</button>");
    }
}

// from http://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
function hasWebGLSupport(){
    if (!window.WebGLRenderingContext) {
        // Browser has no idea what WebGL is. Suggest they
        // get a new browser by presenting the user with link to
        // http://get.webgl.org
        return false;
    }
    document.write("<canvas id='webgl-test' width='1' height='1'></canvas>");
    var canvas = document.getElementById('webgl-test');
    var gl = canvas.getContext("experimental-webgl") || canvas.getContext("webgl");
    if (!gl) {
        // Browser could not initialize WebGL. User probably needs to
        // update their drivers or get a new browser. Present a link to
        // http://get.webgl.org/troubleshooting
        return false;
    }
    return true;
}

function insertPageTitle(){
    document.write("<h1>WebGL for OpenGL Programmers</h1>");
    if (!hasWebGLSupport()) {
        document.write("<p class='warning'>Your browser does not seem to support WebGL. Try upgrading your webbrowser and/or your graphics card driver.</p>");
    }
    var loc = location.href.toString();
    var filename = loc.substring(loc.lastIndexOf('/')+1);
    var index = pages.indexOf(filename);
    if (index>=0){
        document.write('<h2>'+pageTitles[index]+'</h2>');
    }
}

function insertMenu(){
    document.write("<ul>");
    for (var i=0;i<pages.length;i++){
        document.write('<li><a href="'+pages[i]+'">'+pageTitles[i]+'</a></li>');
    }
    document.write("</ul>");
}