package me.ederign.leet.array;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class MissingNumber268Test {

    @Test
    public void missingNumber() {
        MissingNumber268 m = new MissingNumber268();

        assertEquals(2, m.missingNumber(new int[] { 3, 0, 1 }));
        assertEquals(2, m.missingNumber(new int[] { 0, 1 }));
        assertEquals(8, m.missingNumber(new int[] { 9, 6, 4, 2, 3, 5, 7, 0, 1 }));
        assertEquals(1, m.missingNumber(new int[] { 0 }));
    }
}
