(ns backend.db-api
   (:require [datomic.api :as d]
             [pneumatic-tubes.core :refer [dispatch]]
             [backend.game-core :as game-core]))

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn init-world [dimension-x dimension-y]
  {:db/id (d/tempid :db.part/user)
   :world/name (uuid)
   :world/dimension-x dimension-x
   :world/dimension-y dimension-y})

(defn new-building [player type x1 y1 x2 y2]
  {:db/id (d/tempid :db.part/user)
   :building/player player
   :building/x1 x1
   :building/y1 y1
   :building/x2 x2
   :building/y2 y2
   :building/type type})

(defn new-base [player x y]
  {:db/id (d/tempid :db.part/user)
   :base/player player
   :base/x x
   :base/y y})

(defn random-base-coords [])

(defn create-game [conn]
  (let [game-id (d/tempid :db.part/user)]
    (d/resolve-tempid (d/db conn) (:tempids @(d/transact conn [[:db/add game-id
                                                                :game/state "created"]])) game-id)))

(defn get-game-data-for-game [conn game-id]
  (let [game-query-data (d/q '[:find ?game-id ?tick ?state
                               :in $ ?game-id
                               :where [(get-else $ ?game-id :game/tick -1) ?tick]
                                      [?game-id :game/state ?state]]
                             (d/db conn)
                             game-id)]

    (first game-query-data)))

(defn get-ball-data-for-game [conn game-id]
  (let [ball-query-data (d/q '[:find ?ball-id
                               :in $ ?game-id
                               :where [?ball-id :ball/game ?game-id]]
                             (d/db conn)
                             game-id)]
    (first ball-query-data)))

(defn get-player-data-for-game [conn game-id]
  (let [player-query-data (d/q '[:find ?player-id
                                 :in $ ?game-id
                                 :where [?player-id :player/game ?game-id]]
                               (d/db conn)
                               game-id)]
    (reduce #(assoc %1 (first %2) (vec (rest %2))) {} player-query-data)))

(defn new-player-state [player-id new-player-data tick-id]
  (let [player-state-id (d/tempid :db.part/user)]
    {:db/id player-state-id
     :player-state/player player-id
     :player-state/pos-x (get-in new-player-data [:player :pos-x])
     :player-state/pos-y (get-in new-player-data [:player :pos-y])
     :player-state/velocity-x (get-in new-player-data [:player :velocity-x])
     :player-state/velocity-y (get-in new-player-data [:player :velocity-y])
     :player-state/tick tick-id}))

(defn new-ball-state [ball-id new-player-data tick-id]
  (let [ball-state-id (d/tempid :db.part/user)]
    {:db/id ball-state-id
     :ball-state/ball ball-id
     :ball-state/pos-x (get-in new-player-data [:ball :pos-x])
     :ball-state/pos-y (get-in new-player-data [:ball :pos-y])
     :ball-state/velocity-x (get-in new-player-data [:ball :velocity-x])
     :ball-state/velocity-y (get-in new-player-data [:ball :velocity-y])
     :ball-state/tick tick-id}))

(defn initial-player-state [game-id player-id tick-id]
  (let [player-state-id (d/tempid :db.part/user)]
    {:db/id player-state-id
     :player-state/tick tick-id
     :player-state/pos-x (double (rand-int 280))
     :player-state/pos-y (double (rand-int 420))
     :player-state/velocity-x (double 0)
     :player-state/velocity-y (double 0)
     :player-state/player player-id}))

(defn initial-ball-state [game-id ball-id tick-id]
  (let [ball-state-id (d/tempid :db.part/user)]
    {:db/id ball-state-id
     :ball-state/tick tick-id
     :ball-state/pos-x (double (rand-int 280))
     :ball-state/pos-y (double (rand-int 420))
     :ball-state/velocity-x (double 0)
     :ball-state/velocity-y (double 0)
     :ball-state/ball ball-id}))

(defn new-tick [conn game]
  (let [tick-id (d/tempid :db.part/user)]
    (d/resolve-tempid (d/db conn)
                      (:tempids @(d/transact conn [{:db/id tick-id
                                                    :tick/game (first game)
                                                    :tick/count (inc (second game))}]))
                      tick-id)))

(defn get-game-fact [game]
  {:db/id (first game)
   :game/tick (inc (second game))})


(defn start-game [conn game-id]
  (let [game    [game-id -1]
        players (get-player-data-for-game conn game-id)
        ball    (get-ball-data-for-game conn game-id)
        tick-id (new-tick conn game)
        facts-to-transact (conj (reduce conj [] (for [player players]
                                                             (initial-player-state (first game) (first player) tick-id))) (get-game-fact game)
                                (initial-ball-state (first game) (first ball) tick-id)
                                {:db/id game-id
                                 :game/state "running"})]
  @(d/transact conn facts-to-transact)))

(defn get-tempid []
  (d/tempid :db.part/user))

(defn new-player [conn game-id player-id]
  {:db/id player-id
   :player/game game-id})

(defn new-ball [conn game-id ball-id]
  {:db/id ball-id
   :ball/game game-id})

(defn create-player [conn game-id]
  (let [player-id (d/tempid :db.part/user)]
    (d/resolve-tempid (d/db conn) (:tempids @(d/transact conn [(new-player conn game-id player-id)])) player-id)))

(defn create-ball [conn game-id]
  (let [ball-id (d/tempid :db.part/user)]
    (d/resolve-tempid (d/db conn) (:tempids @(d/transact conn [(new-ball conn game-id ball-id)])) ball-id)))

(defn find-created-games [conn]
  (d/q '[:find ?id
         :where [?id :game/state _]]
       (d/db conn)))

(defn find-players [conn]
  (d/q '[:find ?id ?player-name
         :where [?id :player/name ?player-name]]
       (d/db conn)))

(defn is-over [conn game-id]
  (true? (= (first (d/q '[:find ?game-state
                          :in $ ?game-id
                          :where [?game-id :game/state ?game-state]])))))



(defn get-player-data-for-tick [conn game-id tick]
  (let [player-query-data-for-tick (d/q '[:find ?player-id ?pos-x ?pos-y ?velocity-x ?velocity-y
                                 :in $ ?game-id ?tick
                                 :where [?player-id :player/game ?game-id]
                                        [?player-state-id :player-state/player ?player-id]
                                        [?player-state-id :player-state/tick ?tick-id]
                                        [?tick-id :tick/count ?tick]
                                        [?tick-id :tick/game ?game-id]
                                        [?player-state-id :player-state/pos-x ?pos-x]
                                        [?player-state-id :player-state/pos-y ?pos-y]
                                        [?player-state-id :player-state/velocity-x ?velocity-x]
                                        [?player-state-id :player-state/velocity-y ?velocity-y]]
                              (d/db conn)
                              game-id
                              tick)]

    {tick (reduce #(assoc %1 (first %2) (vec (rest %2))) {} player-query-data-for-tick)}))

(defn get-ball-data-for-tick [conn game-id tick]
  (let [ball-query-data-for-tick (d/q '[:find ?ball-id ?pos-x ?pos-y ?velocity-x ?velocity-y
                                 :in $ ?game-id ?tick
                                 :where [?ball-id :ball/game ?game-id]
                                        [?ball-state-id :ball-state/ball ?ball-id]
                                        [?ball-state-id :ball-state/tick ?tick-id]
                                        [?tick-id :tick/count ?tick]
                                        [?tick-id :tick/game ?game-id]
                                        [?ball-state-id :ball-state/pos-x ?pos-x]
                                        [?ball-state-id :ball-state/pos-y ?pos-y]
                                        [?ball-state-id :ball-state/velocity-x ?velocity-x]
                                        [?ball-state-id :ball-state/velocity-y ?velocity-y]]
                              (d/db conn)
                              game-id
                              tick)]

    {tick (reduce #(assoc %1 (first %2) (vec (rest %2))) {} ball-query-data-for-tick)}))

(defn get-all-ticks-for-game [conn game-id]
  (let [curtick (second (get-game-data-for-game conn game-id))]

    (if (>= curtick 0)
      (reduce #(assoc %1 (first %2) (second %2))
              {}
              (for [tick (range (inc curtick))]
                 (conj [] tick (merge (val (first (get-player-data-for-tick conn game-id tick)))
                                      (val (first (get-ball-data-for-tick conn game-id tick)))))))
      nil)))

(defn simulate-tick [conn tx game-id]

  (let [game    (get-game-data-for-game conn game-id)
        players (val (first (get-player-data-for-tick conn game-id (second game))))
        ball    (val (first (get-ball-data-for-tick conn game-id (second game))))
        tick-id (new-tick conn game)
        facts-to-transact (conj (reduce #(apply conj %1 %2) [] (for [player players]
                                                   (let [new-player-data (game-core/act game player ball)]
                                                       (list (new-player-state (key player) new-player-data tick-id)
                                                             (new-ball-state (key (first ball)) new-player-data tick-id))))) (get-game-fact game))]

    @(d/transact conn facts-to-transact)

    (let [curtick (second (get-game-data-for-game conn game-id))]
      (println "finished simulating tick " curtick))))
