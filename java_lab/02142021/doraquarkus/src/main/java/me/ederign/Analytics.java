package me.ederign;

public class Analytics {

    public boolean process(Operation op) {
        System.out.println("Process Analytics, thread id " + Thread.currentThread().getId());
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("End Process Analytics");
        return true;
    }
}
