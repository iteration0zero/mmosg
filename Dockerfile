FROM clojure

RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY ./backend/project.clj /usr/src/backend/
RUN lein deps
COPY ./backend /usr/src/backend

RUN mv "$(lein uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" backend.jar
CMD ["java", "-jar", "backend.jar"]

RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend
COPY ./frontend/project.clj /usr/src/frontend
RUN lein deps
COPY ./frontend /usr/src/frontend

RUN lein clean
CMD ["lein", "cljsbuild", "once", "min"]

FROM python

WORKDIR /usr/frontend/resources/public
COPY ./python/http_server/ /usr/frontend/resources/public
CMD ["python", "/usr/frontend/resources/public/rc.py"]
EXPOSE 8000
