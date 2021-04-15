package me.ederign.leet.array;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class SingleNumber136 {

    public int singleNumberHash(int[] nums) {

        Set<Integer> s = new HashSet<>();

        for (int n : nums) {
            if(!s.add(n)){
                s.remove(n);
            }
        }

        return s.iterator().next();
    }

    public int singleNumber(int[] nums) {

        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            if ((i + 1) >= nums.length) {
                return nums[i];
            } else {
                if (nums[i] == nums[i + 1]) {
                    i = i + 1;
                } else {
                    return nums[i];
                }
            }
        }

        return -1;
    }
}
