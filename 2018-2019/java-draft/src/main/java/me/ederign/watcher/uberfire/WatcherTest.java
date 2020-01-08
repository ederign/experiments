//package me.ederign.watcher.uberfire;
//
//import java.io.File;
//import java.io.FileInputStream;
//import java.io.IOException;
//import java.io.ObjectInputStream;
//import java.io.RandomAccessFile;
//import java.nio.channels.FileChannel;
//import java.nio.channels.FileLock;
//import java.nio.file.FileSystems;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.nio.file.StandardWatchEventKinds;
//import java.nio.file.WatchEvent;
//import java.nio.file.WatchKey;
//import java.nio.file.WatchService;
//import java.util.List;
//
//public class WatcherTest {
//
//    public static void main(String[] args) throws IOException, InterruptedException, ClassNotFoundException {
//        WatchService watchService
//                = FileSystems.getDefault().newWatchService();
//
//        Path path = Paths.get("/tmp/teste1/teste");
//
//        path.register(
//                watchService,
//                StandardWatchEventKinds.ENTRY_MODIFY);
//
////        File file = new File("/tmp/lock/tempFile");
////        RandomAccessFile raf = new RandomAccessFile(file,
////                                                    "rw");
////        FileChannel fileChannel = raf.getChannel();
////        FileLock physicalLock = fileChannel.lock();
//
//        WatchKey key;
//        while ((key = watchService.take()) != null) {
//            List<WatchEvent<?>> watchEvents = key.pollEvents();
//            for (WatchEvent<?> event : watchEvents) {
//
//                System.out.println(
//                        "Event kind:" + event.kind()
//                                + ". File affected: " + event.context() + ".");
//
//
//                //lock FILE?
//
//                File file = new File("/tmp/lock/tempFile");
//                RandomAccessFile raf = new RandomAccessFile(file,
//                                                            "rw");
//                FileChannel fileChannel = raf.getChannel();
//                FileLock physicalLock = fileChannel.lock();
//
//                FileInputStream fi = new FileInputStream(file);
//                ObjectInputStream oi = new ObjectInputStream(fi);
//
//                DistributedWatchKey pr1 = (DistributedWatchKey) oi.readObject();
//                org.uberfire.java.nio.file.WatchKey watchKey = pr1.getWatchKey();
//                boolean reset = watchKey.reset();
//                List<org.uberfire.java.nio.file.WatchEvent<?>> test = watchKey.pollEvents();
//                System.out.println(test.size());
//                System.out.println(reset);
//                fi.close();
//                oi.close();
//
//                physicalLock.release();
//            }
//            key.reset();
//            System.out.println();
//        }
//    }
//}
