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
    document.write('<a href="http://mortennobel.github.io/WebGLForOpenGLProgrammers/"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>');
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