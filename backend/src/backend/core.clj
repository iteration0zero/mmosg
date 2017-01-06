(ns backend.core
    (:gen-class)
    (:use org.httpkit.server) (:use clojure.pprint)
    (:require [backend.db-core :as db-core]
              [backend.db-api :as db-api]
              [datomic.api :as d]
              [pneumatic-tubes.core :refer [receiver transmitter dispatch]]
              [pneumatic-tubes.httpkit :refer [websocket-handler]]))

(def conn nil)

(def tx (transmitter))

(def rx (receiver {:register     (fn [tube [_ username pw token]])
                   :login        (fn [tube [_ username pw]])
                   :new-building (fn [tube [_ type x1 y1 x2 y2]]
                                    )}))

(def handler (websocket-handler rx))

(defn -main [& args]
  (println "MMOSG: BACKEND START")
  (let [conn (db-core/startup-in-memory-db)]
    (def conn conn))
  (run-server handler {:port 8090}))
