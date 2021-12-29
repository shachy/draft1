const tests = [
`function test_q_sum() {
    if(!assert(sum(2, 3), 5)) { return false; }
    if(!assert(sum(5, 5), 10)) { return false; }
    if(!assert(sum(1295876, 1387), 1297263)) { return false; }
    return true;
}`,
`function test_q_hello_world() {
    if(!assert(hello_world(), "Hello World!")) { return false; }
    return true;
}`,
`function test_q_largest_pair_sum() {
    if(!assert(largest_pair_sum([10,14,2,23,19]), 42)) { return false; }
    if(!assert(largest_pair_sum([-100,-29,-24,-19,19]), 0)) { return false; }
    if(!assert(largest_pair_sum([1,2,3,4,6,-1,2]), 10)) { return false; }
    if(!assert(largest_pair_sum([-10, -8, -16, -18, -19]), -18)) { return false; }
    return true;
}`
]

const test_function = [
    `test_q_sum();`,
    `test_q_hello_world();`,
    `test_q_largest_pair_sum();`
]

// function tests {}
// if(!assert()) { return false; }