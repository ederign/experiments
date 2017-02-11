package me.ederign.chapter2;

import rx.Observable;
import rx.subjects.PublishSubject;
import twitter4j.StallWarning;
import twitter4j.Status;
import twitter4j.StatusDeletionNotice;
import twitter4j.StatusListener;
import twitter4j.TwitterStream;
import twitter4j.TwitterStreamFactory;

public class TwitterSubject {

    private final PublishSubject<Status> subject = PublishSubject.create();

    public TwitterSubject() {
        TwitterStream t = new TwitterStreamFactory().getInstance();
        t.addListener(new StatusListener() {
            public void onStatus(Status status) {
                subject.onNext(status);
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
                subject.onError(e);
            }
        });
        t.sample();
    }

    public Observable<Status> observe(){
        return subject;
    }

}
