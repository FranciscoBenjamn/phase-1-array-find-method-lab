// code your solution here
function superbowlWin(record) {
    const obj = record.find(function (obj) {
        return obj.result === "W"
    })

    if (obj) {
        return obj.year
    }
}
