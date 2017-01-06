(ns backend.game-physics)

(def physics-vector ['dx 'dy])

(defn get-vector-from-positions [[start-pos-x start-pos-y] [target-pos-x target-pos-y]]

  (let [angle (Math/atan2 (- target-pos-x start-pos-x) (- target-pos-y start-pos-y))
        length (Math/sqrt (+ (* (- target-pos-x start-pos-x) (- target-pos-x start-pos-x))
                             (* (- target-pos-y start-pos-y) (- target-pos-y start-pos-y))))]
    [(* (Math/cos angle) length) (* (Math/sin angle) length)]))

(defn normalize-vector [[x y]]

  (let [angle (Math/atan2 x y)]
    [(Math/cos angle) (Math/sin angle)]))

(defn get-unit-velocity-from-positions [[start-pos-x start-pos-y] [target-pos-x target-pos-y]]

  (normalize-vector (get-vector-from-positions [start-pos-x start-pos-y] [target-pos-x target-pos-y])))

(defn get-vector-with-speed [[x y] speed]
  [(* x speed) (* y speed)])

(defn add-vectors [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn accelerate [velocity acceleration]
  (add-vectors velocity acceleration))

(defn subtract-vectors [[x1 y1] [x2 y2]]
  [(- x1 x2) (- y1 y2)])

(def running-speed-coefficient 0.014)

(def dribble-speed-coefficient 0.01)

(def shooting-speed-coefficient 0.1)
