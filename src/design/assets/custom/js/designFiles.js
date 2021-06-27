import {loadstylesheet} from './stylesheet.js';


const Addfileslisners=()=>{
    document.querySelectorAll('.Templates-pages').forEach(async(items)=>{
        items.addEventListener('click',async(e)=>{
            if(e.target.parentElement.classList.contains('Templates-pages')){
                let span=e.target.parentElement.children[0];
                if(span.classList.contains('fa-caret-right')){
                span.classList.remove('fa-caret-right');span.classList.add('fa-caret-down');
                e.target.parentElement.parentElement.querySelector('.File-status').classList.remove('Files-deactive');
            }else{
                span.classList.remove('fa-caret-down');span.classList.add('fa-caret-right');
                e.target.parentElement.parentElement.querySelector('.File-status').classList.add('Files-deactive');
                }
            }
        });
    }); 
    
    
    document.querySelectorAll('.File-name').forEach(async(items)=>{
        items.addEventListener('click',async(e)=>{
            if(e.target.parentElement.classList.contains('File-name')){
                let page=e.target.parentElement.children[1];
                editor.Pages.select(page.textContent);
            }
        });
    });

    document.querySelectorAll('.clone-file').forEach(async(items)=>{
        items.addEventListener('click',async(e)=>{
        let span=e.target.parentElement.parentElement.querySelector('span');let page=(editor.Pages.get(span.textContent))
        pagename=editor.Pages.getSelected().id;editor.Pages.select(page);let comm=editor.getHtml();let style=editor.getCss()
        let pageid=(span.textContent+(editor.Pages.getAll().length))
        editor.Pages.add({id: pageid });editor.Pages.select(pageid);editor.setComponents(comm);editor.setStyle(style)
        editor.Pages.select(pagename);designFiles();Addfileslisners();
    });
    });
    document.querySelectorAll('.rename-file').forEach(async(items)=>{
        items.addEventListener('click',async(e)=>{
            let span=e.target.parentElement.parentElement.querySelector('span')
            if(span.contentEditable == "false"){
                span.contentEditable="true";
                span.classList.add("span-focus")
                window.pagename=span.textContent;
            }else{
                span.contentEditable="false";
                span.classList.remove("span-focus")
                editor.Pages.get(pagename).set('id',span.textContent)
                designFiles();Addfileslisners();
            }
        });
    });
    document.querySelectorAll('.remove-file').forEach(async(items)=>{
        items.addEventListener('click',async(e)=>{
            let span=e.target.parentElement.parentElement.querySelector('span')
            window.pagename=span.textContent
            editor.Pages.remove(span.textContent)
            designFiles();Addfileslisners();
        });
    });
}

const HeaderName=(name,filestatus)=>{
return ('<div class="Files"><div class="Templates-pages"><i class="fa fa-caret-right"></i>\
<span>'+name+'</span></div><div class="File-status '+filestatus+'">')
}

const Icons=()=>{
return ('<div><i class="clone-file fa fa-clone"></i>\
<i class="rename-file fa fa-pencil-square-o"></i><i class="remove-file fa fa-trash"></i></div></div>')
}



const CssFiles=(_cssfiles)=>{
    let Filedeactive="";let Files="";
    if(pagename==""){Filedeactive="Files-deactive"}

    _cssfiles.forEach((e)=>{
        Files+='<div class="File-name"><div class="File-name File-name-in"><i class="fa fa-css3"></i>\
        <span contenteditable="false">'+e+'</span></div>'+Icons()
    })
    
    return (HeaderName('Css',Filedeactive)+Files+'</div></div>')
}

const Files=(_htmlfiles)=>{
    let Filedeactive="";let Files="";if(pagename==""){Filedeactive="Files-deactive"}
    _htmlfiles.forEach((e)=>{
        Files+='<div class="File-name"><div class="File-name File-name-in"><i class="fa fa-html5"></i>\
        <span contenteditable="false" >'+e+'</span></div>'+Icons()
    })
    return (HeaderName('Pages',Filedeactive)+Files+'</div></div>')
}

const Images=(_htmlfiles)=>{
    let Filedeactive="";let Files="";if(pagename==""){Filedeactive="Files-deactive"}
    _htmlfiles.forEach((e)=>{
        Files+='<div class="File-name"><div class="File-name File-name-in"><i class="fa fa-file-image-o"></i>\
        <span contenteditable="false" >'+e+'</span></div>'+Icons()
    })
    return (HeaderName('Images',Filedeactive)+Files+'</div></div>')
}

const Fonts=(_htmlfiles)=>{
    let Filedeactive="";let Files="";if(pagename==""){Filedeactive="Files-deactive"}
    _htmlfiles.forEach((e)=>{
        Files+='<div class="File-name"><div class="File-name File-name-in"><i class="fa fa-font"></i>\
        <span contenteditable="false" >'+e+'</span></div>'+Icons()
    })
    return (HeaderName('Fonts',Filedeactive)+Files+'</div></div>')
}



const Filespanels=(_htmlfiles,_cssfile)=>{ 
let template='<div class="Templates-Container">'+Files(_htmlfiles)+
CssFiles(_cssfile)+Images(_htmlfiles)+Fonts(_htmlfiles)+'</div></div>';
document.querySelector('#Files-panel').innerHTML=template;
}


const getpageid=()=>{let pagesid=[];editor.Pages.getAll().forEach((e)=>{pagesid.push(e.id)});return pagesid}


const cssFilesName=()=>{
    let _cssFiles=[];
    if(editor.Canvas.getFrameEl().contentWindow){
    [...editor.Canvas.getFrameEl().contentWindow.document.styleSheets].forEach((styleSheet)=>{
        if(styleSheet.href){
            let style=styleSheet.href.split('/')
            if(style[style.length-1]!="editorstyle10l4k54252d.css"){
                _cssFiles.push(style[style.length-1])
            }
        }
    });
}
    return _cssFiles;
}



const delay = ms => new Promise(res => setTimeout(res, ms));
const designFiles=async()=>{
    let pageid = getpageid()
    await delay(1000)
    let cssfiles = await cssFilesName()
    await Filespanels(pageid,cssfiles)
    await Addfileslisners()
    await loadstylesheet()
}

document.querySelector('.create-page').addEventListener('click',(e)=>{ 
    pagename=editor.Pages.getSelected().id;
    editor.Pages.add({id: ('newpage'+(editor.Pages.getAll().length)) });
    designFiles();Addfileslisners()
});


export {designFiles}
