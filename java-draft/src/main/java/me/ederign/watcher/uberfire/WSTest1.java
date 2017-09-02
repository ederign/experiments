//package me.ederign.watcher.uberfire;
//
//import java.io.File;
//import java.io.FileOutputStream;
//import java.io.ObjectOutputStream;
//import java.io.RandomAccessFile;
//import java.nio.channels.FileChannel;
//import java.nio.channels.FileLock;
//import java.util.ArrayList;
//import java.util.List;
//
//import org.uberfire.java.nio.IOException;
//import org.uberfire.java.nio.file.ClosedWatchServiceException;
//import org.uberfire.java.nio.file.WatchEvent;
//import org.uberfire.java.nio.file.WatchKey;
//import org.uberfire.java.nio.file.WatchService;
//import org.uberfire.java.nio.file.Watchable;
//
//public class WSTest1 {
//
//    public static void main(String[] args) throws Exception {
//
//        File file = new File("/tmp/lock/tempFile");
//        RandomAccessFile raf = new RandomAccessFile(file,
//                                                    "rw");
//        FileChannel fileChannel = raf.getChannel();
//        FileLock physicalLock = fileChannel.lock();
//
//        FileOutputStream f = new FileOutputStream(file);
//
//        ObjectOutputStream o = new ObjectOutputStream(f);
//
//        DistributedWatchKey ds = new DistributedWatchKey(System.identityHashCode(new String("Eder")),
//                                                         new WatchKey() {
//
//                                                             @Override
//                                                             public boolean isValid() {
//                                                                 return true;
//                                                             }
//
//                                                             @Override
//                                                             public List<WatchEvent<?>> pollEvents() {
//                                                                 ArrayList<WatchEvent<?>> watchEvents = new ArrayList<>();
//                                                                 watchEvents.add(new WatchEvent<Object>() {
//                                                                     @Override
//                                                                     public Kind<Object> kind() {
//                                                                         return null;
//                                                                     }
//
//                                                                     @Override
//                                                                     public int count() {
//                                                                         return 3;
//                                                                     }
//
//                                                                     @Override
//                                                                     public Object context() {
//                                                                         return null;
//                                                                     }
//                                                                 });
//                                                                 return watchEvents;
//                                                             }
//
//                                                             @Override
//                                                             public boolean reset() {
//                                                                 return true;
//                                                             }
//
//                                                             @Override
//                                                             public void cancel() {
//
//                                                             }
//
//                                                             @Override
//                                                             public Watchable watchable() {
//                                                                 return new Watchable() {
//                                                                     @Override
//                                                                     public WatchKey register(WatchService watcher,
//                                                                                              WatchEvent.Kind<?>[] events,
//                                                                                              WatchEvent.Modifier... modifiers) throws UnsupportedOperationException, IllegalArgumentException, ClosedWatchServiceException, IOException, SecurityException {
//                                                                         return null;
//                                                                     }
//
//                                                                     @Override
//                                                                     public WatchKey register(WatchService watcher,
//                                                                                              WatchEvent.Kind<?>... events) throws UnsupportedOperationException, IllegalArgumentException, ClosedWatchServiceException, IOException, SecurityException {
//                                                                         return null;
//                                                                     }
//                                                                 };
//                                                             }
//                                                         });
//        o.writeObject(ds);
//
////        o.close();
////        f.close();
//
//
//
////
////        FileInputStream fi = new FileInputStream(file);
////        ObjectInputStream oi = new ObjectInputStream(fi);
////
////        DistributedWatchKey pr1 = (DistributedWatchKey) oi.readObject();
////        WatchKey watchKey = pr1.getWatchKey();
////        boolean reset = watchKey.reset();
////        List<WatchEvent<?>> watchEvents = watchKey.pollEvents();
////        fi.close();
////        oi.close();
//
//        physicalLock.release();
//        fileChannel.close();
//    }
//}
