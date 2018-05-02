/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var should = chai.should();
 
//describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

/*
  it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');

  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
    
  it('has a prefix of 54 and a length of 16', function() {
     detectNetwork('5412345678901234').should.equal('MasterCard');  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
 for (var prefix = 644; prefix <= 649; prefix ++) {
	  (function (prefix){
		  it ('has a prefix of ' + prefix + ' and a length of 16', function(){
			detectNetwork(prefix +'1567890123456').should.equal('Discover');		  
			})
		  it ('has a prefix of ' + prefix + ' and a length of 19', function(){
			detectNetwork(prefix +'1567890123456789').should.equal('Discover');		  
			})
	  })(prefix)
 
  it('has a prefix of 6011 and a length of 16', function(){
	  detectNetwork('6011567890123456').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
	  detectNetwork('6011567890123456789').should.equal('Discover'); 
  });
  it('has a prefix of 65 and a length of 16', function(){
	  detectNetwork('6511567890123456').should.equal('Discover');  
  });
  it('has a prefix of 65 and a length of 19', function(){
	  detectNetwork('6511567890123456000').should.equal('Discover')  
  });
}});
   
describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var cardNumber = '501856789012'
  for (var length = 12; length <= 19; length ++){
	  (function (cardNumber, length){
		  it ('has a prefix of 5018 and a length of ' + length, function(){
			detectNetwork(cardNumber).should.equal('Maestro');		  
			})
	})(cardNumber, length)
	cardNumber = cardNumber + '0'
  }

 var cardNumber = '502056789012'
  for (var length = 12; length <= 19; length ++){
	  (function (cardNumber, length){
		  it ('has a prefix of 5020 and a length of ' + length, function(){
			detectNetwork(cardNumber).should.equal('Maestro');		  
			})
	})(cardNumber, length)
	cardNumber = cardNumber + '0'
  }
  
  var cardNumber = '503856789012'
  for (var length = 12; length <= 19; length ++){
	  (function (cardNumber, length){
		  it ('has a prefix of 5038 and a length of ' + length, function(){
			detectNetwork(cardNumber).should.equal('Maestro');		  
			})
	})(cardNumber, length)
	cardNumber = cardNumber + '0'
  }

 var cardNumber = '630456789012'
  for (var length = 12; length <= 19; length ++){
	  (function (cardNumber, length){
		  it ('has a prefix of 6304 and a length of ' + length, function(){
			detectNetwork(cardNumber).should.equal('Maestro');		  
			})
	})(cardNumber, length)
	cardNumber = cardNumber + '0'
  }
});

describe('should support China UnionPay', function(){
	
	
	function statement(prefix) { 
		var number = prefix.toString() 
		it('has a prefix of ' + prefix + ' and a length of 16', function(){
			while (number.length < 16) {
				number = number + '0' 
			}
			detectNetwork(number).should.equal('China UnionPay')  		
			});
		 
		it('has a prefix of ' + prefix + ' and a length of 17', function(){
			while (number.length < 17) {
				number = number + '0' 
			}
			detectNetwork(number).should.equal('China UnionPay')  		
			});
		
		it('has a prefix of ' + prefix + ' and a length of 18', function(){
			while (number.length < 18) {
				number = number + '0' 
			}
		    detectNetwork(number).should.equal('China UnionPay')  		
				
			});
		
		it('has a prefix of ' + prefix + ' and a length of 19', function(){
			while (number.length < 19) {
				number = number + '0' 
			}			
			detectNetwork(number).should.equal('China UnionPay')  		
		
			});
	   	}
for (prefix = 622126; prefix <= 622925; prefix++) { 
	statement(prefix)}
	   	
for (prefix = 6282; prefix <= 6288; prefix++) { 
	statement(prefix)}		
    
for (prefix = 624; prefix <= 626; prefix++) { 
	statement(prefix)}
 })
 
 
 
describe('should support Switch', function(){
// 	Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.	

	
	
	function statement(prefix) { 
		var number = prefix.toString() 
		it('has a prefix of ' + prefix + ' and a length of 16', function(){
			while (number.length < 16) {
				number = number + '0' 
			}
			detectNetwork(number).should.equal('Switch')  		
			});
		 		
		it('has a prefix of ' + prefix + ' and a length of 18', function(){
			while (number.length < 18) {
				number = number + '0' 
			}
		    detectNetwork(number).should.equal('Switch')  		
				
			});
		
		it('has a prefix of ' + prefix + ' and a length of 19', function(){
			while (number.length < 19) {
				number = number + '0' 
			}			
			detectNetwork(number).should.equal('Switch')  		
		
			});
	   	}
	var arr = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]
	arr.forEach(x => statement(x))
 })
	
			


