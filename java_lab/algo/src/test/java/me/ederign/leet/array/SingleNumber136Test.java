package me.ederign.leet.array;

import org.junit.Test;

import static org.junit.Assert.*;

public class SingleNumber136Test {

    @Test
    public void singleNumber() {
        SingleNumber136 s = new SingleNumber136();
        assertEquals(1, s.singleNumber(new int[]{1}));
        assertEquals(1, s.singleNumber(new int[]{2, 2, 1}));
        assertEquals(4, s.singleNumber(new int[]{4,1,2,1,2}));


        assertEquals(1, s.singleNumberHash(new int[]{1}));
        assertEquals(1, s.singleNumberHash(new int[]{2, 2, 1}));
        assertEquals(4, s.singleNumberHash(new int[]{4,1,2,1,2}));
    }
}