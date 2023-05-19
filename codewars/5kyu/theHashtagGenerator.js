/* Description
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

// My solution
function generateHashtag(str) {
    if (str.trim() === '') {
        return false;
    }

    let words = str.split(' ');
    let changed = words
        .map((v) => {
            let word = v.split('');
            if (word[0]) {
                word[0] = word[0].toUpperCase();
            }
            return word.join('');
        })
        .join('');

    return '#'.length + changed.length > 140 ? false : '#' + changed;
}
  