const palindromes = function(string) {
    var newString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (newString.split("").reverse().join("") == newString);
//     if (newString === string){
//         return true;
//     } else {
//         return false;
//     }

}

// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };

module.exports = palindromes
