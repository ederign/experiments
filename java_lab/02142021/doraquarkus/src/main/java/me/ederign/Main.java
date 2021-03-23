package me.ederign;

import java.time.Duration;
import java.time.Instant;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {

    Database databaseService  = new Database();
    Audit auditService = new Audit();
    Analytics analyticsService = new Analytics();
    Cache cacheService = new Cache();


    public void process(Operation op){
        databaseService.process(op);
        auditService.process(op);
        analyticsService.process(op);
        cacheService.process(op);
    }


    public void processAsync(Operation op){
        CompletableFuture<Boolean> db =  CompletableFuture.supplyAsync(() -> databaseService.process(op));
        CompletableFuture<Boolean> audit =  CompletableFuture.supplyAsync(() -> auditService.process(op));
        CompletableFuture<Boolean> analytics =  CompletableFuture.supplyAsync(() -> analyticsService.process(op));
        CompletableFuture<Boolean> cache =  CompletableFuture.supplyAsync(() -> cacheService.process(op));

        CompletableFuture.allOf( db, audit, analytics, cache).join();
    }






    public static void main(String[] args) {

        Main m = new Main();

        System.out.println("======= Sync ========");
        Instant start = Instant.now();
        m.process(new Operation());
        Instant finish = Instant.now();
        System.out.println("======== Sync total: " + Duration.between(start, finish).toMillis());


        System.out.println("======= Async ========");
        Instant start1 = Instant.now();
        m.processAsync(new Operation());
        Instant finish1 = Instant.now();
        System.out.println("======== ASync total: " + Duration.between(start1, finish1).toMillis());


    }
}
