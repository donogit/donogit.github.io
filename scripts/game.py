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


    
        
    
    

        
    
        
