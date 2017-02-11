package me.ederign.chapter2;

import rx.Observable;

public class RxHelloWorld {

    public static void main(String[] args) {

        Observable.create(s -> {
            s.onNext("Hello");
            s.onCompleted();
        }).subscribe(hello -> System.out.println(hello));
    }
}
