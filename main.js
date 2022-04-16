const solution = (str, end) =>{
    let result = str.substring(str.length - end.length)
    if (result.toLowerCase() === end.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

function solution(str, ending){
    let i = str.length - ending.length;
    let endOfLine = str.substring(i);
    if (endOfLine === ending) {
      return true;
    }
    return false;
  }

  const solution = (str, ending) => str.endsWith(ending);


/*  7 kyu String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false