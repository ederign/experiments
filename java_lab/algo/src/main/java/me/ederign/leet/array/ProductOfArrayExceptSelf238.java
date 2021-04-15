package me.ederign.leet.array;

import java.util.Arrays;

public class ProductOfArrayExceptSelf238 {

    //keep working on
    public int[] productExceptSelf(int[] nums) {

        int prod = 0;
        boolean prodHasZero = false;

        for (int n : nums) {
            if (n == 0) {
                prodHasZero = true;
            } else {
                if(prod == 0){
                    prod = 1;
                }
                prod = prod * n;
            }
        }
        if (!prodHasZero) {
            for (int i = 0; i < nums.length; i++) {
                nums[i] = prod / nums[i];
            }
        } else {
            for (int i = 0; i < nums.length; i++) {
                if (nums[i] == 0) {
                    nums[i] = prod;
                } else {
                    nums[i] = 0;
                }
            }
        }
        return nums;
    }

    public static void main(String[] args) {

        ProductOfArrayExceptSelf238 p = new ProductOfArrayExceptSelf238();
        var a = p.productExceptSelf(new int[]{1, 2, 3, 4});
        var b = p.productExceptSelf(new int[]{-1, 1, 0, -3, 3});
        var c = p.productExceptSelf(new int[]{0, 0});
        System.out.println("");
    }
}
