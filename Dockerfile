FROM quay.io/wildfly/wildfly-centos7
ADD target/sugpa.war $JBOSS_HOME/standalone/deployments
USER root
RUN /opt/wildfly/bin/add-user.sh admin Admin#70365 --silent
RUN chown -R jboss:root $JBOSS_HOME && chmod -R ug+rwX $JBOSS_HOME
USER jboss
CMD $JBOSS_HOME/bin/openshift-launch.sh
