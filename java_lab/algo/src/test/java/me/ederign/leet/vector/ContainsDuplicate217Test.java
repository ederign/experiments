package me.ederign.leet.vector;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import me.ederign.leet.vetor.ContainsDuplicate217;
import org.junit.Test;

public class ContainsDuplicate217Test {

    @Test
    public void test() {
        ContainsDuplicate217 c = new ContainsDuplicate217();
        assertTrue(c.containsDuplicate(new int[] { 1, 2, 3, 1 }));
        assertFalse(c.containsDuplicate(new int[] { 1, 2, 3, 4 }));
        assertTrue(c.containsDuplicate(new int[] { 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 }));
    }
}
