package me.ederign.chapter2;

import java.util.concurrent.TimeUnit;

import twitter4j.StallWarning;
import twitter4j.Status;
import twitter4j.StatusDeletionNotice;
import twitter4j.TwitterStream;
import twitter4j.TwitterStreamFactory;

public class TwitterHelloWorld {

    public static void main(String[] args) throws InterruptedException {

        TwitterStream twitterStream = new TwitterStreamFactory().getInstance();
        twitterStream.addListener(new twitter4j.StatusListener() {
            public void onStatus(Status status) {
                System.out.println("Status: {} " + status);
            }

            public void onDeletionNotice(StatusDeletionNotice statusDeletionNotice) {

            }

            public void onTrackLimitationNotice(int i) {

            }

            public void onScrubGeo(long l,
                                   long l1) {

            }

            public void onStallWarning(StallWarning stallWarning) {

            }

            public void onException(Exception e) {

            }
        });
        twitterStream.sample();
        TimeUnit.SECONDS.sleep(10);
        twitterStream.shutdown();
    }
}
