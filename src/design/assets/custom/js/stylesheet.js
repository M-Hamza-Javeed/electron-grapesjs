const cssRuleReader=(nodes)=>{
    let cssRule=[];let node=[];let Nstylenode=[];
    for(var i in nodes){
        if(nodes[i].type === 1){
        if(typeof(nodes[i]) != "undefined" ){
            var beforeSplit =nodes[i].style.cssText.split(';')
            for(var j=0;j<beforeSplit.length;j++){
            Nstylenode.push(beforeSplit[j].split(':')[0].trim().toString());
            }
            cssRule.push([nodes[i].selectorText.trim(),Nstylenode])
            node=[];Nstylenode=[];
            }
        }
    }
    return cssRule;  
}



async function loadstylesheet(){
    let doc=editor.Canvas.getFrameEl().contentWindow.document;let styleSheets=[];let Rules=[];

    [...doc.styleSheets].forEach((item)=>{
        if (item.href){
            if(item.href.indexOf(window.location.origin)=== 0){
                let style=item.href.split('/')
                if(style[style.length-1]!="editorstyle10l4k54252d.css"){
                    styleSheets.push(item)
                }
            }
        }
    });

    styleSheets.forEach((item)=>{
    Rules.push(cssRuleReader(item.cssRules));
    });
    await localStorage.setItem("CssRules",JSON.stringify(Rules))
}

export {loadstylesheet}

