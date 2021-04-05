package me.ederign.leet.array;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class FindAllNumberDisappeared {

    public List<Integer> findDisappearedNumbers(int[] nums) {
        Set<Integer> numbers = new HashSet<>();
        List<Integer> missing = new ArrayList<>();
        // [4,3,2,7,8,2,3,1]
        // [1, 2, 3, 4, 7, 8]

        for (int i : nums) {
            numbers.add(i);
        }
        for (int i = 1; i < nums.length + 1; i++) {
            if (!numbers.contains(i)) {
                missing.add(i);
            }
        }

        return missing;
    }

    public List<Integer> findDisappearedNumbersElegant(int[] nums) {
        List<Integer> missing = new ArrayList<>();
        // [4,3,2,7,8,2,3,1]

        for (int i = 0; i < nums.length; i++) {
            int index = Math.abs(nums[i]) - 1;
            if (nums[index] > 0) {
                nums[index] = nums[index] * -1;
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                missing.add(i + 1);
            }
        }

        return missing;
    }
}
