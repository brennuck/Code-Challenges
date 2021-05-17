// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    
    merged = nums1.concat(nums2)
    
    merged.sort(function(a, b) {
        return a - b
    })
    
    for (let i = 0; i < merged.length; i++) {
        if (merged.length > 2) {
            merged.shift();
            merged.pop();
        }
        
        if (merged.length === 2) {
            return (merged[0] + merged[1]) / 2
        }
        
    }
    
    return merged
};