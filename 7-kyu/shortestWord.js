// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let words = s.split(' ');
  let short = words[0].length;
  for(let i =0; i<words.length;i++){
    if(words[i].length < short){
      short = words[i].length;
    }
  }
  return short;
}