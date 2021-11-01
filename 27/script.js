document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;

  function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var substr = "";
    var longest_substring = "";
    var hash = {};
  
    for (var i = 0; i < chars.length; i++) {
      curr_char = chars[i];
      if (!hash[chars[i]]) { 
        substr += curr_char; 
        hash[chars[i]] = {index:i};
      } else {
        if(longest_substring.length <= substr.length) {
          longest_substring = substr;
        }
        var prev_dupeIndex = hash[curr_char].index;
        var substr_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
        substr = substr_FromPrevDupe + curr_char;
        hash = {};      
        for (var j = prev_dupeIndex + 1; j <= i; j++) {
          hash[input.charAt(j)] = {index:j};
        }
      }
    }
    return longest_substring.length > substr.length ? longest_substring : substr;
  }
  
  document.getElementById('result').innerHTML = longest_substring_without_repeating_characters(str);
 
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});