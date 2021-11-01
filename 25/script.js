document.getElementById('submit').addEventListener('click', function() {

  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  document.getElementById('result').style.backgroundColor = random_hex_color_code();
 
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});