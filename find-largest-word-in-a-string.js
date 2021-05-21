const str = "The quick brown fox jumped over the lazy dog"

const getLongestWordLengthInTheString = (str) => {
    const strArr = str.split(' ')
    data = {};
    strArr.forEach(word => {
        if (!Object.keys(data).includes(word)) {
            data[word] = word.length;
        }
    })
    let maxlenWord = Object.keys(data)[0];
    let maxLengthOfTheWord = Object.keys(data)[0].length;
    Object.keys(data).forEach(word => {
        if (data[word] > maxLengthOfTheWord) {
            maxLengthOfTheWord = data[word];
            maxlenWord = word;
        }
    })
    return maxLengthOfTheWord;

}
console.log(getLongestWordLengthInTheString(str));
