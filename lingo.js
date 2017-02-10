var words = words[Math.floor(Math.random()*words.length)];
var right = document.getElementsByClassName('main');
   	console.log(words);
        for (var i = 0, len = right.length; i < len; i ++) {
            right[i].value = words[0];
            console.log(right[i]);
   }
