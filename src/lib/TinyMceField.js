// import { DomHelper, GlobalEvents, RichTextField } from '@bryntum/scheduler';

// export default class TinyMceField extends RichTextField {
//     static $name = 'TinyMceField';
//     static type = 'tinymcefield';

//     tinymce = null;

//     static configurable = {
//         tinyMceConfig   : {},
//         inline          : false,
//         resize          : false,
//         menubar         : false,
//         autoFocus       : true,
//         rootBlock       : 'div',
//         inputAttributes : {
//             tag : 'textarea'
//         }
//     };

//     construct(config = {}) {
//         super.construct(config);

//         const me = this;

//         GlobalEvents.ion({
//             theme   : 'destroyEditor',
//             thisObj : me
//         });

//         me.up(w => w.isPopup)?.ion({
//             hide    : 'destroyEditor',
//             thisObj : me
//         });

//         me.ion({
//             paint   : '_onPaint',
//             thisObj : me
//         });
//     }

//     _onPaint() {
//         const me = this;

//         if (me.editor) {
//             me.destroyEditor();
//         }

//         if (!me.editor) {
//             const html = me.value ?? '';
//             me.input.value = html;

//             globalThis.tinymce.init({
//                 ...me.tinyMceConfig,
//                 apiKey            : me.apiKey,
//                 auto_focus        : me.autoFocus,
//                 inline            : me.inline,
//                 forced_root_block : me.rootBlock,
//                 menubar           : me.menubar,
//                 resize            : me.resize,
//                 height            : me.height,
//                 target            : me.input,
//                 skin              : DomHelper.themeInfo?.name
//                     ?.toLowerCase().endsWith('-dark')
//                     ? 'oxide-dark'
//                     : 'oxide',
//                 ui_mode : 'split',

//                 setup : editor => {
//                     editor.on('init', () => editor.setContent(html, { format : 'html' }));

//                     editor.on('NodeChange', () => {
//                         if (me.isDestroying) return;

//                         const newVal = editor.getContent();
//                         if (newVal !== me.value) {
//                             me.richText = newVal;
//                             me.triggerFieldChange({
//                                 value      : newVal,
//                                 oldValue   : me.value,
//                                 userAction : true
//                             });
//                         }
//                     });

//                     editor.on('blur', () => {
//                         const scheduler = me.up('scheduler');
//                         scheduler.finishEditing();
//                     });
//                 }
//             }).then(editors => (me.editor = editors[0]));
//         }
//     }

//     owns(target) {
//         return super.owns(target) || Boolean(target?.closest('.tox-tinymce'));
//     }

//     destroyEditor() {
//         this.editor?.destroy();
//         this.editor = null;
//     }
// }

// TinyMceField.initClass();