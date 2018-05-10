var letter = require('./letter');

var Word = function(words) {
	var self = this;
	this.letters = []; //array of letter instances
	
    this.words = words.split('');
    //console.log(this.words);
    this.words.forEach(function(word){
    	if(word != ' ') {
    		var temp = new letter(word, false);
            self.letters.push(temp);
    	} else {
    		var temp = new letter(word, true);
    		self.letters.push(temp);
    	}
    });

    this.display = function display() {
    	this.letters.forEach(function(lett) {
    		process.stdout.write(lett.switchBlankWithLetter() + " ");
    	});
    	console.log("");
    }

    this.checking = function checking(guess) {
   		var result = false;
    	this.letters.forEach(function(lett) {
    		if(!result) {
    			result = lett.checking(guess);
    		} else {
    			lett.checking(guess);
    		}
    	});
    	return result;
    }

    this.isComplete = function isComplete() {
    	var count = 0;
		this.letters.forEach(function(lett) {
			if(lett.guessed) {
				count++;
			}
    	});
    	return count == this.letters.length;
    }

    this.display();
}

module.exports = Word;