package me.ederign.grokking;

import java.util.List;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

public class BinarySearchTest {


    @Test
    public void binarySearchTest(){

        var binarySearch = new BinarySearch();

        int[] list = {1, 2, 3, 4, 5, 6};

        assertEquals(-1, binarySearch.binarySearch(list, 10));
        assertEquals(1, binarySearch.binarySearch(list, 1));
        assertEquals(2, binarySearch.binarySearch(list, 2));
        assertEquals(3, binarySearch.binarySearch(list, 3));
        assertEquals(4, binarySearch.binarySearch(list, 4));
        assertEquals(5, binarySearch.binarySearch(list, 5));
        assertEquals(6, binarySearch.binarySearch(list, 6));

    }
}