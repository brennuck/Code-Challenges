// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function almostIncreasingSequence(sequence) {
    let count = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) { // if [current index] is less than or equal to the index behind it
            count++; // add to count || return true
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                // if the current index is less than or equal to the index 2 down AND the index in front of current is less than or equal to the index behind
                return false; // return false
            }
        }
    }
    return count <= 1; // return count if it is greater or equal to 1
}