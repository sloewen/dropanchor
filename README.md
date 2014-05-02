
createAnchorsAndGoToThem.init([], []);

init function takes two arguments as arrays, what tags you want to drop an anchor on and a blacklist of pages. 

blacklist now takes wildcards at the end of urls. For instance:

www.example.com/content/*

would block

www.example.com/content/5483074

from the effect of the script.
