(ns backend.db-core
  (:require [datomic.api :as d]))

(defn startup-in-memory-db []
  (let [uri "datomic:mem://mmosg-db"]
    (d/delete-database uri)
    (d/create-database uri)
    (let [conn (d/connect uri)
          schema (load-file "resources/datomic/schema.edn")]
      @(d/transact conn schema)
      conn)))
