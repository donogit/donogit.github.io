testDict = null
function leastFrequent(listOfKeys) {
  freq1 = 0;
  freq2 = 0;
  key1 = null;
  key2 = null;
  retVal = null;
 /* key1 = listOfKeys.pop()
  freq1 = testDict [key1]
  key2 = listOfKeys.pop()
  freq2 = testDict [key2]*/
  if (freq1 < freq2) {
  retVal = key1
  } else (freq2 < freq1) {
    retVal = key2
  }
  testDict [retVal] += 1
  return retVal
}
    