// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    
    if (ruleKey === "type") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] === ruleValue) {
                count += 1
            }
        }
    }
    
    if (ruleKey === "color") {
        for (let i = 0; i < items.length; i++) {``
            if (items[i][1] === ruleValue) {
                count += 1
            }
        }
    }
    
    if (ruleKey === "name") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][2] === ruleValue) {
                count += 1
            }
        }
    }
    
    return count;
};