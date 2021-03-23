package me.ederign;

public class Database {

    public User findUser(Long userId) {
        return null;
    }

    public void activateUser(Long userId) {
    }

    public Boolean process(Operation op) {
        System.out.println("Process Database, thread id " + Thread.currentThread().getId());
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("End Database");
        return true;
    }
}
