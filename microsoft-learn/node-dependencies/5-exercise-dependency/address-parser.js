/* 
This function takes a string and parses out information about what a customer orders, 
where it should be delivered, and how it will be paid for.
*/
exports.parse = function parseOrder(order) {
    const match = order.match(/order:\s(?<order>\w+\s\w+).*address:\s(?<address>\w+\s\w+\s\w+).*payment info:\s(?<payment>\w+)/)
    return match.groups;
}