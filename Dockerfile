FROM clojure

RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY ./backend/project.clj /usr/src/backend/
RUN lein deps
COPY ./backend /usr/src/backend

RUN mv "$(lein uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" backend.jar
CMD ["java", "-jar", "backend.jar"]

FROM python

WORKDIR /usr/src/frontend/server
COPY ./python/http_server/ /usr/src/frontend/server
COPY ./frontend/resources/public /usr/frontend/server
CMD ["python", "/usr/src/frontend/server/rc.py"]
EXPOSE 8000
