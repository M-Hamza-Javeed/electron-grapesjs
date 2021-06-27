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


export {layout}