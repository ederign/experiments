package me.ederign;

public class Cache {

    public Boolean process(Operation op) {
        System.out.println("Process Cache, thread id " + Thread.currentThread().getId());
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("End Process Cache");
        return true;
    }
}
