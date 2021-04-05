package me.ederign.leet.array;

import java.util.HashSet;
import java.util.Set;

public class ContainsDuplicate217 {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> numbers = new HashSet<>();
        for (Integer i : nums) {
            if (numbers.contains(i)) {
                return true;
            }
            numbers.add(i);
        }
        return false;
    }
}
