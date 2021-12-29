const inst_preview = CodeMirror(document.querySelector(".editor .inst .inst-block .inst-preview"), {
    mode: "xml",
    theme: "gruvbox-dark",
    readOnly: true,
    cursorBlinkRate: -1
});
inst_preview.setSize("100%", "100%");

const console_preview = CodeMirror(document.querySelector(".editor .inst .console-block .console-preview"), {
    mode: "markdown",
    theme: "gruvbox-dark",
    readOnly: false,
    cursorBlinkRate: -1
});
console_preview.setSize("100%", "100%");

const js_editor = CodeMirror(document.querySelector(".editor .code .js .js-code"), {
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript",
    theme: "gruvbox-dark",
});
js_editor.setSize("100%", "100%");

const test_editor = CodeMirror(document.querySelector(".editor .code .test .test-code"), {
    lineNumbers:true,
    tabSize:4,
    mode:"javascript",
    theme: "gruvbox-dark"
});
test_editor.setSize("100%", "100%");