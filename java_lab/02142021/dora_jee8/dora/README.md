# Build
mvn clean package && docker build -t com.airhacks/dora .

# RUN

docker rm -f dora || true && docker run -d -p 8080:8080 -p 4848:4848 --name dora com.airhacks/dora 

# System Test

Switch to the "-st" module and perform:

mvn compile failsafe:integration-test