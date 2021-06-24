const layout=()=>{
var config = {
    dimensions: {
        minItemHeight:25,
        minItemWidth: 10,
        headerHeight: 33,
    },
	content: [{
		type: 'column',
		isClosable: false,
		content: [{
        type: 'row',
        content:[
        {
        width: 19,
        type: 'stack',
        content:[{
            isClosable: false,
            type: 'component',
            componentName: 'layouts',
            componentState: { text: 'Commponents' },
            title:'Commponents'
        },{
            isClosable: false,
            type: 'component',
            componentName: 'layouts',
            componentState: { text: 'Overview' },
            title:'Overview'
        }]
        }, 
        {   isClosable: false,
            type: 'column',
            content:[{
            type: 'component',
            componentName: 'layouts',
            componentState: { text: 'Design' },
            title:'Design'
            },
            {
                isClosable: false,
                type: 'component',
                componentName: 'layouts',
                componentState: { text: 'Code' },
                title:'Code',
                height:5
            }
        ]
        },
        {
            width: 18,
            type: 'stack',
            content:[{
                width: 18,
                type: 'stack',
                title:'Setting',
                content:[{
                    isClosable: false,
                    type: 'component',
                    componentName: 'layouts',
                    componentState: { text: 'Properties' },
                    title:'Properties'
                },{
                    isClosable: false,
                    height:30,
                    type: 'component',
                    componentName: 'layouts',
                    componentState: { text: 'Options' },
                    title:'Options'
                }]
                },{
                isClosable: false,
                height:30,
                type: 'component',
                componentName: 'layouts',
                componentState: { text: 'Files' },
                title:'Files'
            }]
            }]
        }]
	}]
};

var myLayout = new window.GoldenLayout(config, $('#layoutContainer'));
myLayout.registerComponent('layouts', function(container, state) {
if(container,state.text=="Design"){
    container.getElement().html('<div id="Toolbar-panel-container" ><div id="Toolbar-panel" ></div><div id="gjs" style="height:0px;width:100%;"></div></div>');
}
if(container,state.text=="Properties"){
    container.getElement().html('<div id="Properties-panel"> </div>');
}
if(container,state.text=="Overview"){
    container.getElement().html('<div id="Overview-layers-panel"> </div>');
}
if(container,state.text=="Options"){
    container.getElement().html('<div id="Options-panel"> </div>');
}
if(container,state.text=="Commponents"){
    container.getElement().html('<div id="Commponents-panel"> </div>');
}
if(container,state.text=="Files"){
    container.getElement().html('<div id="Files-panel"> </div>');
}
if(container,state.text=="Code"){
    container.getElement().html('<div id="Code-panel"> </div>');
}
});

myLayout.on('componentCreated',function(component) {
    component.container.on('resize',function() {
        editor.refresh()
    });
});

window.addEventListener('resize',()=>{
    winlayout.updateSize()
});

window.winlayout=myLayout;
myLayout.init();
}

const getpageid=()=>{
    let pagesid=[]
    editor.Pages.getAll().forEach((e)=>{pagesid.push(e.id)})
    return pagesid
}

const _editor= async()=>{
window.pagename=""

var editor = grapesjs.init({
    showOffsets: 1,
    noticeOnUnload: 0,
    container: '#gjs',
    height: '100%',
    autorender:false,
    pageManager: {
        pages: [
        {
            id: 'index',
        }
    ]
    },
    fromElement: true,
    plugins: ["grapesjs-component-code-editor","gjs-blocks-basic",
    "grapesjs-parser-postcss",'grapesjs-blocks-bootstrap4','grapesjs-custom-code'],
    pluginsOpts: {
    "grapesjs-component-code-editor": {
    appendTo:"#Code-panel",
    editJs: true,
    openState: {
        cv: '50%',
        pn: '100%'
    },
    closedState: {
        cv: '0%',
        pn: '0%',
    },
    },
    'grapesjs-blocks-bootstrap4': {
        blocks: {},
        blockCategories: {},
        labels: {},
        gridDevicesPanel: true,
        formPredefinedActions: [
            {name: 'Contact', value: '/contact'},
            {name: 'landing', value: '/landing'},
        ]
    }
    },
    storageManager: {
        autoload: 0, 
    },
    canvas: {
    styles: [
        "./assets/framework/bootstrap-5.0.2/css/bootstrap.min.css" 
    ],
    scripts: [
        "./assets/framework/bootstrap-5.0.2/js/bootstrap.min.js",        
    ],
    },
    selectorManager: {
    appendTo: '#Properties-panel',
    },
    layerManager: {
        appendTo: '#Overview-layers-panel'
    },
    traitManager: {
        appendTo: '#Options-panel',
    },
    blockManager: {
        appendTo: '#Commponents-panel'
    },
    styleManager : {
    clearProperties:1,
    appendTo:"#Properties-panel",
        sectors: [
        {
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        },{
            name: 'Flex',
            open: false,
            buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
        },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
        },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
        }
        ],
    },
});

editor.addComponents(
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">\
    <div class="container-fluid">\
        <a class="navbar-brand" href="#">Navbar</a>\
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" \
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"\
        aria-expanded="false" aria-label="Toggle navigation">\
    <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbarSupportedContent">\
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">\
            <li class="nav-item">\
    <a class="nav-link active" aria-current="page" href="#">Home</a>\
            </li>\
            <li class="nav-item">\
    <a class="nav-link" href="#">Link</a>\
            </li>\
            <li class="nav-item dropdown">\
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" \
    role="button" data-bs-toggle="dropdown" aria-expanded="false">\
                Dropdown\
    </a>\
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\
                <li><a class="dropdown-item" href="#">Action</a></li>\
                <li><a class="dropdown-item" href="#">Another action</a></li>\
                <li><hr class="dropdown-divider"></li>\
                <li><a class="dropdown-item" href="#">Something else here</a></li>\
    </ul>\
            </li>\
            <li class="nav-item">\
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\
            </li>\
    </ul>\
    <form class="d-flex">\
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">\
            <button class="btn btn-outline-success" type="submit">Search</button>\
    </form>\
        </div>\
    </div>\
    </nav>'
    );

editor.getConfig().showDevices = 0;
editor.Panels.addPanel({ id: "devices-c",appendTo:'#Toolbar-panel' }).get("buttons").add([
{ id: "set-device-desktop", command: { run(e) { e.setDevice('Desktop');editor.refresh(); }, stop() {}}, className: "fa fa-desktop",},
{ id: "set-device-tablet", command: { run(e) { e.setDevice('Tablet');editor.refresh(); }, stop() {}}, className: "fa fa-tablet",active: 1},
{ id: "set-device-mobile", command: { run(e) { e.setDevice('Mobile portrait');editor.refresh(); }, stop() {}}, className: "fa fa-mobile" }
]);

const panelManager=editor.Panels;
panelManager.removePanel('options');
panelManager.removePanel('views');


var blockManager = editor.BlockManager;
blockManager.add('my-first-block', {label: 'Simple block',content: '<div class="my-block">This is a simple block</div>'});
blockManager.add('some-block-id', {
    label: `<div><img src="https://picsum.photos/70/70"/><div class="my-label-block">Label block</div></div>`,content: '<div>...</div>',
    render: ({ el }) => {const btn = document.createElement('button');btn.innerHTML = 'Click me';btn.addEventListener('click', () => alert('Do something'));el.appendChild(btn);},
});


let editoroptions=editor.Panels.addPanel({ id: "options",appendTo:'#Toolbar-panel'}).get("buttons")
editoroptions.add([
    {id: "publish-html", command: { run(e) {editor.runCommand('export-template');}, 
    stop(e) {editor.stopCommand("export-template");}},className: 'fa fa-code'},
    {id: "commponents-visibility", command: { run(e) {editor.runCommand('sw-visibility');}, 
    stop(e) {editor.stopCommand('sw-visibility');}},className: 'fa fa-square-o'},
    {id: "position-translate", command: { run(e) {
        if (typeof(e.editor.getSelected()) != 'undefined'){e.editor.getSelected().setDragMode('translate');}
    }, stop(e) {if (typeof(e.editor.getSelected()) != 'undefined'){e.editor.getSelected().setDragMode('')}}}
    ,className:"fa fa-hand-rock-o"},
    {id: "position-absolute", command: { run(e) {
        if (typeof(e.editor.getSelected()) != 'undefined'){e.editor.getSelected().setDragMode('absolute');}
    }, stop(e) {if (typeof(e.editor.getSelected()) != 'undefined'){e.editor.getSelected().setDragMode('')}}}
    ,className:"fa fa fa-arrows"},
])

editoroptions.add([
    {
        className: "fa fa-file-code-o",
        id: "open-code",
        command: {
            run: function(editor) {
                document.getElementById("Code-panel").style.display='block';
                editor.runCommand('open-code')
            },
            stop: function(editor) { 
                document.getElementById("Code-panel").style.display='none';
            }
        },
        active:1
    }
]);  


editor.on('component:drag:end',(e)=>{
    if(e.target.attributes.dmode==""){
        e.target.setDragMode('');
        e.target.setStyle('top','0px');
        e.target.setStyle('left','0px');
        e.target.setStyle('position','relative');
    }
});

editor.on('component:selected', (e) => {
    
    if(e.attributes.dmode=="translate"){
        editor.Panels.getButton('options','position-translate').attributes.active=true
        editor.Panels.render()
    }
    else if(e.attributes.dmode!="translate") {
        editor.Panels.getButton('options','position-translate').attributes.active=false
        editor.Panels.render()
    }
    
    if(e.attributes.dmode=="absolute") {
        editor.Panels.getButton('options','position-absolute').attributes.active=true
        editor.Panels.render()
    }
    else if(e.attributes.dmode!="absolute") {
        editor.Panels.getButton('options','position-absolute').attributes.active=false
        editor.Panels.render()
    }
});

const Files=()=>{
    let Filedeactive=""
    if(pagename==""){Filedeactive="Files-deactive"}
    let Files="";str1='<div class="Files"><div class="Templates-pages"><i class="fa fa-caret-right"></i><span>Pages</span></div><div class="File-status '+Filedeactive+'">'
    getpageid().forEach((e)=>{
        Files+='<div class="File-name"><div class="File-name File-name-in"><i class="fa fa-html5"></i><span contenteditable="false" >'+e+'</span></div><i class="clone-file fa fa-clone"></i><i class="rename-file fa fa-pencil-square-o"></i><i class="remove-file fa fa-trash"></i></div>'
    })
    return (str1+Files+'</div></div>')
}

window.Filespanels=()=>{
    return ('<div class="Templates-Container">'+Files()+'</div></div>')
}

const appendcontent=()=>{
    document.querySelector('#Files-panel').innerHTML=Filespanels()
}

window.Filepanel=()=>{
    appendcontent()
}

editor.on('load',()=>{
Filespanels()
Filepanel()
});

editor.render();
window.editor=editor;
}

const Addevents=async()=>{
    editor.on('load',()=>{

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
            let span=e.target.parentElement.querySelector('span');let page=(editor.Pages.get(span.textContent))
            pagename=editor.Pages.getSelected().id;editor.Pages.select(page);let comm=editor.getHtml();let style=editor.getCss()
            let pageid=(span.textContent+(editor.Pages.getAll().length))
            editor.Pages.add({id: pageid });editor.Pages.select(pageid);editor.setComponents(comm);editor.setStyle(style)
            editor.Pages.select(pagename);Filepanel();Addfileslisners(); 
        });
        });
        document.querySelectorAll('.rename-file').forEach(async(items)=>{
            items.addEventListener('click',async(e)=>{
                let span=e.target.parentElement.querySelector('span')
                if(span.contentEditable == "false"){
                    span.contentEditable="true";
                    span.classList.add("span-focus")
                    window.pagename=span.textContent;
                }else{
                    span.contentEditable="false";
                    span.classList.remove("span-focus")
                    editor.Pages.get(pagename).set('id',span.textContent)
                    Filepanel();Addfileslisners();
                }
            });
        });
        document.querySelectorAll('.remove-file').forEach(async(items)=>{
            items.addEventListener('click',async(e)=>{
                let span=e.target.parentElement.querySelector('span')
                window.pagename=span.textContent
                editor.Pages.remove(span.textContent)
                Filepanel();Addfileslisners();
            });
        });
    }


        document.querySelector('.create-page').addEventListener('click',(e)=>{ 
            pagename=editor.Pages.getSelected().id;
            editor.Pages.add({id: ('newpage'+(editor.Pages.getAll().length)) });
            Filepanel();Addfileslisners()
        });

        document.getElementById("gjs").addEventListener('scroll',(e)=>{
            editor.refresh()
        })

        Addfileslisners()
    });
}

const delay = ms => new Promise(res => setTimeout(res, ms));
window.addEventListener('DOMContentLoaded',async()=>{
    await layout()
    await _editor()
    await Addevents()
});


let wrap = document.querySelector(".wrap");
window.addEventListener("contextmenu", event => {
if(event.button == 2) {
    wrap.classList.toggle("display");
    wrap.style.left = (event.pageX - 4) + "px";
    wrap.style.top = (event.pageY - 4) + "px";
}
event.preventDefault();
})
window.addEventListener("click", event => {
if(wrap.classList.contains("display")) {wrap.classList.remove("display");}
})
