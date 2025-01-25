FROM amazoncorretto:17-alpine-jdk
COPY target/config-server-1.jar  config-server.jar
ENTRYPOINT ["java","-jar","/config-server.jar"]