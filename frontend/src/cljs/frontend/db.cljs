(ns frontend.db)

(def default-db
  {:game {:dimensions [50 50]
          :tile-size 50
          :buildings [{:type :type-1
                       :corner-points [[10 10] [15 20]]}
                      {:type :type-2
                       :corner-points [[5 2] [7 7]]}]
          :new-building {:type :type-1
                         :corner-points []}
          :building-colors {:type-1 "green"
                            :type-2 "blue"
                            :type-3 "red"}}
   :mode :view
   :modes {:view #{:build}
           :build #{:view :new-building}
           :new-building #{:view}}})
