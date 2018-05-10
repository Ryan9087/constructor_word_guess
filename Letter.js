
function Letter(lettersToGuess, guessed) {
   this.lettersToGuess = lettersToGuess;
   this.guessed = guessed;

   this.switchBlankWithLetter = function() {
      if(this.guessed) {
          return this.lettersToGuess;
      }
      return '_';
    };
      this.checking = function(letter) {
         if(!this.guessed) {

             this.guessed = this.lettersToGuess == letter ? true : false;
             return this.guessed;
         } 
         this.switchBlankWithLetter();
         return false;
    };


   }

module.exports = Letter;