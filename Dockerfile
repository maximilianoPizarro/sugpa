FROM registry.redhat.io/jboss-webserver-5/jws57-openjdk11-openshift-rhel8
USER root
RUN mkdir -p /workspace/sugpa/src/main/java/com/dgcactysv
ADD src/main/java/com/dgcactysv/hibernate.cfg.xml /workspace/sugpa/src/main/java/com/dgcactysv/hibernate.cfg.xml
ADD target/sugpa-1.0-SNAPSHOT.war /deployments/sugpa.war
USER jboss