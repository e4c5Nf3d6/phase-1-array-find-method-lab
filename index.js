function superbowlWin(array) {
    let win = array.find(game => game.result === "W");
    if (win === undefined) {
        return undefined
    } else {
        return win.year
    }
}