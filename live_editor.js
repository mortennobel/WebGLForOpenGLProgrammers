var liveEditorId = 0;

function LiveEditor() {
    var thisObj = this;
    this.height = "300px";

    this.mode = "ace/mode/javascript";
    this.title = "Editor";
    this.data = 'function foo(items) {\n'+
        '       var x = "All this is syntax highlighted";\n'+
        '           return x;\n'+
        '       }<test></test>';
    this.noResult = false;
    this.resultTitle = "Result";
    this.wrapperFunction = function(data, updateContent){
        // replace scrip_t with script - to allow script like tags within script elements
        return data.replace(/scrip_t/g, "script");
    };

    this.build = function(){
        liveEditorId = liveEditorId + 1;
        var id = liveEditorId;
        var data = thisObj.data.trim();

        if (thisObj.noResult){
            document.write('<div class="example-snippet">'+
                '<div class="editor-title">'+thisObj.title+'</div>'+
                '<div id="editor'+id+'" style="height: '+thisObj.height+';"></div>'+
                '   </div>'
                );
        } else {
        document.write('<div class="yui3-g example-snippet">'+
            '<div class="yui3-u-1-2">'+
            '<div class="editor-title">'+thisObj.title+'</div>'+
        '<div id="editor'+id+'" style="height: '+thisObj.height+';"></div>'+
        '   </div>'+
            '   <div class="yui3-u-1-2">'+
                '<div class="editor-title">'+thisObj.resultTitle+'</div>'+
            '       <iframe id="editor-target'+id+'" style="width: 100%;height: '+thisObj.height+';"></iframe>'+
            '   </div>'+
            '</div>');
        }
        var editor = ace.edit("editor"+id);
        editor.getSession().setUseWorker(false);
        editor.getSession().setMode(thisObj.mode);
        editor.getSession().setValue(thisObj.wrapperFunction(data, true).replace(/\u2028/g, ""));
        if (thisObj.noResult){
            return;
        }
        var updateValue = function(e){
            var localS = editor.getSession().getValue();
            document.getElementById('editor-target'+id).src = "data:text/html;charset=utf-8," + encodeURIComponent(thisObj.wrapperFunction(localS, false));
        };

        editor.on("change" , updateValue );
        document.getElementById('editor-target'+id).src = "data:text/html;charset=utf-8," + encodeURIComponent(thisObj.wrapperFunction(data, false));
    };

    return this;
}