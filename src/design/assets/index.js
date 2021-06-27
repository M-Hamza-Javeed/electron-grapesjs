import {layout} from './custom/js/editorlayout.js';
import {_editor} from './custom/js/editor.js';
import {Addevents} from './custom/js/events.js';
import {loadstylesheet} from './custom/js/stylesheet.js';
import {designFiles} from './custom/js/designFiles.js';



window.addEventListener('DOMContentLoaded',async()=>{
    await layout()
    await _editor()
    await designFiles()
    await Addevents()
});



