
// css_composer -> model -> CssRule

    SelectorExist(StyleSheet,sel,properties){
        let selproperties=[]
        if (StyleSheet) {
        if(properties!=""){
        StyleSheet.forEach(items => {
            items.forEach((item)=>{
            if (item[0].indexOf(sel)>-1){
                if(item[1]!=""){selproperties.push(item[1])}
            }
            })
        });
        }
    }
        return Array.from(new Set(selproperties.flat()))
    },

    getNode(sel, properties) {
        var StyleSheet = JSON.parse(localStorage.getItem('CssRules'));
        var SameProperties = [];var StyleNode = [];
        properties.split(';').forEach(e => { if (e.split(':') != '') { SameProperties.push(e.split(':')); }});
        if (StyleSheet) {
        let Nodeproperties=this.SelectorExist(StyleSheet,sel,properties)
        SameProperties.forEach((StyleItem)=>{
            if(Nodeproperties.indexOf(StyleItem[0])>-1)
            {
            StyleNode.push(StyleItem.join(':') + ' !important');
            }
            else{
            StyleNode.push(StyleItem.join(':'));
            }
        });
        }
        if(StyleNode.length>0){
        return StyleNode.join(';');
        }
        else{
        return properties;
        }
    },



getDeclaration(opts = {}) {
    let result = '';
    const selectors = this.selectorsToString(opts);
    const singleAtRule = this.get('singleAtRule');
    const style = this.getNode(selectors, this.styleToString(opts));

    if ((selectors || singleAtRule) && style) {
    result = singleAtRule ? style : `${selectors}{${style}}`;
    }

    return result;
}


// Inside commands -> views -> SelectCommponents.js 
updateToolbarPos(pos) {
    const unit = 'px';
    const { style } = this.canvas.getToolbarEl();
    style.top = `${pos.top}${unit}`;
    style.left = `0px`;
    style.opacity = '';
}