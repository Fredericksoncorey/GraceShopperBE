//console.log('hello')

const indexOf = function(needle, word) {
    //loop through to find match
    let match = -1
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === needle[0]) {
            match = i;
            for (let j = 1; j <=needle.lenght; j++) {
                if (word[i+j] === needle[j]) {
                    if (j === needle.length-1) {
                    return match
                    }//return match
                } else { match = -1}
            } 
        }
    }
    return match //index of first match or -1 if no matches
}

// R
// E indexOf('or', 'hello world') 
// A 
// C
// T

console.log(indexOf('or', 'hello world'))