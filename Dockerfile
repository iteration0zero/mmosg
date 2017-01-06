FROM clojure
RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend
COPY ./backend/project.clj /usr/src/backend/
RUN lein deps
COPY ./backend /usr/src/backend

RUN mv "$(lein uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" backend.jar
CMD ["java", "-jar", "backend.jar"]

FROM python
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend
COPY ./python/http_server/ /usr/src/frontend/
COPY ./frontend/resources/public/ /usr/src/frontend/
CMD [ "python", "/usr/src/frontend/rc.py" ]
EXPOSE 8000
