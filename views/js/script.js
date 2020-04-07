const word = Qs.parse(location.search,{
    ignoreQueryPrefix: true
});
const w = word.search;
console.log(word.search);
const wordPrint = document.getElementById('word');
wordPrint.innerHTML = word.search;