function reverseString(str) {
  var myArray = str.split("");
  myArray = myArray.reverse();
  str = myArray.join("");
  return str;
}

function factorialize(num) {
    if (num==0) {
      return 1;
    } else
      for (i=(num-1); i>0; i--) {
        num = num*i;
      }
    return num;
  }
}

function palindrome(str) {
  // Good luck!
  var re = /[^A-Za-z0-9]/g;
  var newStr = str.replace(re, "");
  var myArray = newStr.split("");
  var myArray1;
  var myArray2;
  if ((myArray.length % 2) === 1 ) {
    myArray1 = myArray.slice(0, ((myArray.length)+1)/2);
    myArray2 = myArray.slice((myArray.length)/2, (myArray.length));
  } else {
  	myArray1 = myArray.slice(0, ((myArray.length))/2);
    myArray2 = myArray.slice((myArray.length)/2, (myArray.length));
  }
    myArray2 = myArray2.reverse();
    var myStr1 = myArray1.join("");
    myStr1 = myStr1.toLowerCase();
    var myStr2 = myArray2.join("");
    myStr2 = myStr2.toLowerCase();
    if (myStr1 === myStr2) {
      return true;
    }
    else return false;
}
//Much better!!!
function palindrome(str) {
  // Good luck!
  var re = /[^A-Za-z0-9]/g;
  var newStr = str.replace(re, "");
  var myArray = newStr.split("");
  var myArrayRev = myArray.slice().reverse();
  return (myArray.join().toLowerCase() === myArrayRev.join().toLowerCase());
}

function findLongestWord(str) {
  var myArray = str.split(" ");
  var myL = [];
  for (i=0; i<myArray.length; i++) {
	myL[i] = myArray[i].length;
  }
  myL.sort(function(a, b){return b-a;});
  return(myL[0]);
}

function titleCase(str) {
  var myArray = str.split(" ");
  for (i=0; i<myArray.length; i++) {
  	myArray[i] = myArray[i].toLowerCase();
  	var myArray2 = myArray[i].split("");
  	myArray2[0] = myArray2[0].toUpperCase();
  	myArray[i] = myArray2.join("");
  }
    var res = myArray.join(" ");
    return res;
}

function largestOfFour(arr) {
  // You can do this!
  var myArr = [];
  var mySort = [];
  for (i=0; i<arr.length; i++) {
  	mySort = arr[i].sort(function(a, b){return a-b;});
  	myArr[i] = mySort[mySort.length-1];
  }
  return myArr;
}

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetL = target.length;
  var myEnd = str.substr(str.length-targetL,targetL);
  if (myEnd === target) {
  	return true;
  } else
    return false;
}

function repeatStringNumTimes(str, num) {
  // repeat after me
  var mystr = "";
  for (i=0; i<num; i++) {
  	mystr = mystr.concat(str);
  }
  return mystr;
}

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var myStr = "";
  if (str.length > num) {
    if (num>3) {
  	   myStr = str.slice(0, num-3) + "...";
       return myStr;
     } else {
  	    myStr = str.slice(0, num) + "...";
        return myStr;
      }
  } else if (str.length <= num) {
  	return str;
    }
}

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var numEl = Math.floor(arr.length / size);
  var rem = arr.length % size;
  var myArray = [];
  var i=0;
  var k=0;
  while (k<numEl) {
  		if (i===0) {
      	myArray.push(arr.slice(i, i*numEl+size));
      } else {
      	myArray.push(arr.slice(i, i+size));
      }
  	  i += size;
      k++;
  }
	if (rem !== 0) {
  	myArray.push(arr.slice(arr.length-rem, arr.length));
  }
  return myArray;
}

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  for (i=0; i<howMany; i++) {
  	arr.shift();
  }
 return arr;
}

function mutation(arr) {
  var str = arr[0].toLowerCase();
  var comp = arr[1].toLowerCase().split("");
  var compBool = [];
  for (i=0; i<comp.length; i++) {
  	compBool[i] = str.indexOf(comp[i]);
    if (compBool[i]<0) {
    	return false;
    }
  }
  return true;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var myArray = [];
  for (i=0; i<arr.length; i++) {
  	if (arr[i]) {
    	myArray.push(arr[i]);
    }
  }
  return myArray;
}

function destroyer(arr) {
  // Remove all the values
 var myArg = Array.from(arguments);
 var nArg = myArg.length-1;
 var filtered = myArg[0];
 myArg.shift();
 var k = 0;
 function seekAndDestroy(value) {
   if (k<myArg.length) {
      if (value != myArg[k]) {
        return value;
      }
 	  }
  }
 for (i=0; i<nArg; i++) {
  filtered = filtered.filter(seekAndDestroy);
  k++;
 }
 return filtered;
}

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a, b){return a-b;});
  var ind = arr.findIndex(function(value){return (value == num);});
  return ind;
}


function rot13(str) { // LBH QVQ VG!
  var myArray = str.split("");
  var ind = [];
  var myArrayDec = [];
  for (i=0; i<myArray.length; i++) {
  	ind[i] = myArray[i].charCodeAt(0);
  }
  for (i=0; i<myArray.length; i++) {
  	if ((ind[i]>64) && (ind[i]<91)) {
    	if (ind[i]>77) {
      	ind[i] = ind[i] - 13;
        }
      	else {
      		ind[i] = 90 - (13 - (ind[i]-64));
      	}
    	}
    else {
    	if ((ind[i]>96) && (ind[i]<123)) {
    			if (ind[i]>109) {
          	ind[i] = ind[i] - 13;
           }
      			else {
            	ind[i] = 122 - (13 - (ind[i]-96));
            }
    		}
        else {
        	ind[i] = ind[i];
        }
  	}
     myArrayDec[i] = String.fromCharCode(ind[i]);
  }
  var myStr = myArrayDec.join("");
  return myStr;
}
