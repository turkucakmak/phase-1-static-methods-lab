class Formatter {
  //add static methods here
  static capitalize(string){
    this.string = string[0].toUpperCase() + string.slice(1);
    return this.string;
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g,"");
  }

  static titleize(sentence) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      const words = sentence.split(' ');
      const titleizedWords = [];
      
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (i === 0 || !smallWords.includes(word)) {
          titleizedWords.push(word[0].toUpperCase() + word.slice(1));
        } else {
          titleizedWords.push(word);
        }
      }
      
      return titleizedWords.join(' ');
      
    }

}

console.log(Formatter.capitalize("merhaba"));
console.log(Formatter.titleize("She have the big price and a small one"));