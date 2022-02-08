const sample = function () {
  console.log("aa")
}

const Quill = require('quill')
// const DragAndDropModule = require('quill-drag-and-drop-module');

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'super'}],      // superscript/subscript

  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
  [{'header': [1, 2, 3, 4, 5, 6, false]}],

  [{'color': []}],          // dropdown with defaults from theme
  [{'font': []}],
  [{'align': []}],
  ['image']
];

var editor = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions,
  },
  theme: 'snow',
});

editor.getModule("toolbar")
  .addHandler("image", function (file) {
    var data = new FormData();
    data.append('image', image);

    console.log(file)

  });
