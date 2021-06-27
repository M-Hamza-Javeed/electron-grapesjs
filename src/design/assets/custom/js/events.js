

const Addevents=async()=>{
    editor.on('load',()=>{
        document.getElementById("gjs").addEventListener('scroll',(e)=>{
            editor.refresh()
        })
});
}


export {Addevents}