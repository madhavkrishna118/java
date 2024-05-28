FROM tomcat:9.0-jdk17-corretto
RUN rm -rf /usr/local/tomcat/webapps/ROOT
COPY /root/my-web-application-1.0.0.war /usr/local/tomcat/webapps/ROOT.war
RUN sed -i 's/port="8080"/port="8085"/' /usr/local/tomcat/conf/server.xml
EXPOSE 8085
CMD ["catalina.sh", "run"]
