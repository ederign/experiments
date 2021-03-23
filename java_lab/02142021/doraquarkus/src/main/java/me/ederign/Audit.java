package me.ederign;

public class Audit {

    public Boolean process(Operation op) {
        System.out.println("Process Audit, thread id " + Thread.currentThread().getId());
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("End Process Audit");
        return true;
    }
}
