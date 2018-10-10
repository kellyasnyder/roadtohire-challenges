// Consider a staircase of size n = 4:
 
//    #
//   ##
//  ###
// ####

// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. 
// The last line is not preceded by any spaces.
 
// Write a program that prints a staircase of size n.
 
// INPUT FORMAT
// A single integer, n, denoting the size of the staircase.
 
// OUTPUT FORMAT
// Print a staircase of size  using # symbols and spaces.
// Note: The last line must have 0 spaces in it.
 
// SAMPLE INPUT
// stairs(6);
 
// Sample Output
 
//      #
//     ##
//    ###
//   ####
//  #####
// ######


function stairs(n) {
    var s = '';
    for (var i = 1; i <= n; i++) {
        s += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
    }
    console.log(s);
}

stairs(6);