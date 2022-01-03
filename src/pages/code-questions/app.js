let random_question = 0;

function gen_question() {
    random_question = rand(0, questions.length-1);
    js_editor.setValue(questions[random_question]);
    test_editor.setValue(tests[random_question]);
    inst_preview.setValue(inst[random_question]);
}

function validate_code() {
    const attempt_btn = document.getElementById("attempt");
    const submit_btn = document.getElementById("submit");
    let solution_w = false;

    let code = 
`
${assert}
${js_editor.getValue()}
${tests[random_question]}
${test_function[random_question]}
`;

    try {
        solution_w = eval(code);
    } catch (e) {
        console_preview.setValue(`${console_preview.getValue()}\n${e.toString()}`);
        solution_w = false;
    }
    if(!solution_w) {
        console_preview.setValue(`${console_preview.getValue()}\nSolution Failed.`)
        attempt_btn.style.color = "#cc241d";
        attempt_btn.style.borderColor = "#cc241d";

        submit_btn.style.backgroundColor = "#cc241d"
        submit_btn.style.borderColor = "#cc241d";
    } else {
        console_preview.setValue(`${console_preview.getValue()}\nSolution Succeed!`)
        attempt_btn.style.color = "#b8bb26";
        attempt_btn.style.borderColor = "#b8bb26";

        submit_btn.style.backgroundColor = "#b8bb26"
        submit_btn.style.borderColor = "#b8bb26";
    }
}

function reset() {
    js_editor.setValue(questions[random_question]);
    test_editor.setValue(tests[random_question]);
    console_preview.setValue("");
}