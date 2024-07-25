var firstPalindrome = function(words) {
    let res = []
    for (let x = 0; x < words.length; x++) {
        if ( words[x] == words[x].split('').reverse('').join('')) {
            res.push(words[x])
        }
    }
    if (res.length <= 0 ) return "";
    return res[0]
};