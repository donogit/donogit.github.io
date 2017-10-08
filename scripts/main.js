//a program to make a taboo game
var tabooDict = new Map();
var init = -1;
var button = document.querySelector('#button');
var input = document.querySelector('#input');


button.focus();

function leastFrequentOfTwo(keyArray) {
  var key1 = keyArray.pop(),
      freq1 = tabooDict[key1],
      key2 = keyArray.pop(),
      freq2 = tabooDict[key2],
      
      returnedValue = null;
  
  if (freq1<freq2) {
    returnedValue = key1;
  }
  else {
    returnedValue = key2;
  }
  
  tabooDict[returnedValue] += 1;
  return returnedValue;
}

//i dont know how to english but this increases the count of relations for both dict elements

function relate(prevDict, prevKey, itemDict, itemKey) {
  if (prevDict.has(prevKey)) {
    prevDict[itemKey] += 1
    itemDict[prevKey] += 1
  }
  else {
    prevDict[itemKey] = 1
    itemDict[prevKey] = 1 
  }

}


function initialize() {
  alert('add ten words')
  var prev = ""
  var related2 = ""
    for(var i = 10; i > 0; i--) {
      var item = prompt("please enter a word" + related2 + ". you have " + i + " words left", "my hometown")
      tabooDict[item] = new Map()
      if (i !== 10) {
        relate(tabooDict[prev], prev, tabooDict[item], item)
      }
      prev = item
      related2 = " related to " + prev
      
    }
  alert('u done good')
}

button.addEventListener('click', initialize);


/*
from random import shuffle
testDict = {}
init = -1

def leastFrequent(listOfKeys):
    key1 = listOfKeys.pop()
    freq1 = testDict [key1]
    key2 = listOfKeys.pop()
    freq2 = testDict [key2]

    retVal = None
    
    if freq1 < freq2:
        retVal = key1
    if freq2 < freq1:
        retVal = key2
    else:
        retVal = key2
    testDict [retVal] += 1
    return retVal
    
while True:
    if init == -1:
        text = "welcome to the game. enter a word. press q to quit, or press r to reset. \n"
    else:
        possible = list(testDict.keys())
        shuffle(possible)
        if init == 0:
            text = 'enter a word related to ' + possible.pop() + '\n' #can maybe be optimized with try
        else:
            text = 'enter a word related to ' + leastFrequent(possible) + '\n'
    gameInput = input(text).lower()
    if gameInput == 'q':
        print(testDict)
        break
    if gameInput == 'r':
        testDict = {}
        init = -1
        continue
    if gameInput in testDict:
        testDict [gameInput] += 1
    else:
        testDict [gameInput] = 1
    if init < 1:
        init += 1


    
        
    
    

        
    
        
*/
