/* !!! BEFORE YOU START, CLICK THE FORK BUTTON UP TOP TO CREATE YOUR OWN COPY OF THIS PLUNK !!! */

/**
 * Reverse a string
 * 
 * @param string phrase The string to reverse
 * @return string The reversed string
 */
function reverse(phrase) {
    var result = ""
    for (var i = 0; i < phrase.length; i++) {
        result = phrase[i] + result;
    }
    return result;
}


/**
 * DO NOT EDIT BELOW THIS LINE
 * 
 * These are unit tests that will verify that your function is working as 
 * expected.  If you've written your function correctly, all the tests below
 * should be passing.  If you click on the "Run" button above you will see a
 * report of the what tests are failing/passing.  Once all the tests are
 * passing, please send the link to your Plunk to your mentor for review.
 */
describe('Reverse Function', () => {
  it ('should return the reverse for "Thinkful"', () => {
    expect(reverse('Thinkful')).toEqual('lufknihT');
  });
  
  it ('should return the reverse for "The best error message is the one that never shows up"', () => {
    expect(reverse('The best error message is the one that never shows up')).toEqual('pu swohs reven taht eno eht si egassem rorre tseb ehT');
  });
});