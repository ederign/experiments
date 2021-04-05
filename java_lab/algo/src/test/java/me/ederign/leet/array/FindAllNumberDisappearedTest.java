package me.ederign.leet.array;

import org.junit.Test;

import static org.junit.Assert.assertTrue;

import java.util.List;

public class FindAllNumberDisappearedTest {

    @Test
    public void FindAllNumberDisappeared() {
        FindAllNumberDisappeared f = new FindAllNumberDisappeared();
        List<Integer> result = f.findDisappearedNumbers(new int[] { 4, 3, 2, 7, 8, 2, 3, 1 });
        assertTrue(result.contains(5));
        assertTrue(result.contains(6));

        result = f.findDisappearedNumbers(new int[] { 1, 1 });
        assertTrue(result.contains(2));
    }

    @Test
    public void FindAllNumberDisappearedElegant() {
        FindAllNumberDisappeared f = new FindAllNumberDisappeared();
        List<Integer> result = f.findDisappearedNumbersElegant(new int[] { 4, 3, 2, 7, 8, 2, 3, 1 });
        assertTrue(result.contains(5));
        assertTrue(result.contains(6));

        result = f.findDisappearedNumbersElegant(new int[] { 1, 1 });
        assertTrue(result.contains(2));
    }
}