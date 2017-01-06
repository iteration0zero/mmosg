FROM clojure
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY ./backend/project.clj /usr/src/backend/
RUN lein deps
COPY ./backend /usr/src/backend

RUN mv "$(lein uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" backend.jar
CMD ["java", "-jar", "backend.jar"]

FROM python:2-onbuild
CMD [ "python", "./python/http_server/rc.py" ]
EXPOSE 8000
