package me.ederign.grokking;

import java.util.List;

public class BinarySearch {

    //[1 , 2, 3, 4, 5] 3
    public int binarySearch(int[] array, int item) {
        int low = 0;
        int high = array.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            if (array[mid] == item) {
                return item;
            } else if (array[mid] > item) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    }
}
