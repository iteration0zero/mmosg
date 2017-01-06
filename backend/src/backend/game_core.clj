(ns backend.game-core
  (:require [backend.game-physics :as physics]))

(def player {:pos-x 0
             :pos-y 0
             :velocity-x 0
             :velocity-y 0
             :acceleration-x 0
             :acceleration-y 0})

(def ball {:pos-x 0
             :pos-y 0
             :velocity-x 0
             :velocity-y 0
             :acceleration-x 0
             :acceleration-y 0})

(defn change-acceleration [player [new-acceleration-x new-acceleration-y]]
  {:pos-x (:pos-x player)
   :pos-y (:pos-y player)
   :velocity-x (:velocity-x player)
   :velocity-y (:velocity-y player)
   :acceleration-x new-acceleration-x
   :acceleration-y new-acceleration-y})

(defn accelerate-player [player]
  (let [new-velocity (physics/accelerate [(:velocity-x player) (:velocity-y player)] [(:acceleration-x player) (:acceleration-y player)])]
    {:pos-x (:pos-x player)
     :pos-y (:pos-y player)
     :velocity-x (first new-velocity)
     :velocity-y (second new-velocity)
     :acceleration-x (:acceleration-x player)
     :acceleration-y (:acceleration-y player)}))

(defn apply-velocity [player]
  {:pos-x (+ (:pos-x player) (:velocity-x player))
   :pos-y (+ (:pos-y player) (:velocity-y player))
   :velocity-x (:velocity-x player)
   :velocity-y (:velocity-y player)
   :acceleration-x (:acceleration-x player)
   :acceleration-y (:acceleration-y player)})

(defn move-player [player]
  (apply-velocity (accelerate-player player)))
(def decisions {:run-towards-ball {:is-possible (fn [game player ball] true)
                                   :transformation (fn [game player ball] (let [vector-towards-ball (physics/get-vector-with-speed
                                                                                                                                          (physics/get-unit-velocity-from-positions [(:pos-x player) (:pos-y player)] [(:pos-x ball) (:pos-y ball)])
                                                                                                                                          physics/running-speed-coefficient)]

                                                                                                                      {:player (change-acceleration player vector-towards-ball)
                                                                                                                       :ball ball}))}})

(defn make-decision [game player ball]
  nil)

(defn act [[_ _ game-state] player ball]

  (let [[player-id [player-pos-x player-pos-y player-velocity-x player-velocity-y]] player
        [ball-id [ball-pos-x ball-pos-y ball-velocity-x ball-velocity-y]] [(key (first ball)) (val (first ball))]
        game {:game/state game-state}
        player {:pos-x player-pos-x
                :pos-y player-pos-y
                :velocity-x player-velocity-x
                :velocity-y player-velocity-y}
        ball {:pos-x ball-pos-x
              :pos-y ball-pos-y
              :velocity-x ball-velocity-x
              :velocity-y ball-velocity-y}
        decision :run-towards-ball
        transformation ((get-in decisions [decision :transformation]) game player ball)]

    {:player (move-player (:player transformation))
     :ball (:ball transformation)}))
