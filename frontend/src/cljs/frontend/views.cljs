(ns frontend.views
    (:require [re-frame.core :as re-frame]))

;; game controls

(defn game-controls []
  (let [mode (re-frame/subscribe [:mode])]
    [:div {:style {:position "fixed"
                   :top "20px"
                   :left "20px"}}
     [:button {:style {:border "1px solid black"
                       :width "40px"
                       :height "40px"}
               :on-click #(re-frame/dispatch [:inc-tile-size])}
      "+"]
     [:button {:style {:border "1px solid black"
                       :width "40px"
                       :height "40px"}
               :on-click #(re-frame/dispatch [:dec-tile-size])}
      "-"]
     [:button {:style {:border "1px solid black"
                       :width "40px"
                       :height "40px"
                       :background-color (if (= @mode :build)
                                           "green"
                                           "")}
               :on-click #(re-frame/dispatch [:switch-mode (if (= @mode :build)
                                                             :view
                                                             :build)])}
      "build"]]))

;; tile

(defn tile [x-index y-index tile-size mode]
    [:div {:style {:position "absolute"
                   :top (* y-index tile-size)
                   :left (* x-index tile-size)
                   :width tile-size
                   :height tile-size}
           :on-mouse-down #(re-frame/dispatch [:select x-index y-index])
           :on-mouse-over #(re-frame/dispatch [:hover x-index y-index])
           :on-mouse-up   #(re-frame/dispatch [:de-select x-index y-index])}])

;; building

(defn building-disp [[[first-x first-y] [second-x second-y]] type color tile-size]
    [:div {:style {:position "absolute"
                   :top (+ (* first-y tile-size) 1)
                   :left (+ (* first-x tile-size) 1)
                   :width (- (* (- second-x first-x) tile-size) 1)
                   :height (- (* (- second-y first-y) tile-size) 1)
                   :padding "10px"
                   :background-color color
                   :border "1px solid #bbb"}}
          type])

;; game

(defn game []
  (let [game-dimensions (re-frame/subscribe [:game-dimensions])
        tile-size (re-frame/subscribe [:tile-size])
        x-dimension (first @game-dimensions)
        y-dimension (second @game-dimensions)
        buildings (re-frame/subscribe [:buildings])
        new-building (re-frame/subscribe [:new-building])
        mode (re-frame/subscribe [:mode])]
      [:div {:style {:position "absolute"}}
       (doall (for [x (range x-dimension)
                    y (range y-dimension)]
                 ^{:key [x y]} [tile x y @tile-size @mode]))
       (doall (for [building-indexed (map-indexed vector @buildings)
                    :let [index (first building-indexed)
                          building (second building-indexed)
                          type (:type building)
                          corner-points (:corner-points building)]]
                ^{:key index} [building-disp corner-points type "" @tile-size]))
       (if (= (count (:corner-points @new-building)) 2)
         [building-disp (:corner-points @new-building) (:type @new-building) "gray" @tile-size])]))


;; home

(defn home-panel []
  [:div [game]
        [game-controls]])


;; about

(defn about-panel []
  (fn []
    [:div "This is the About Page."
     [:div [:a {:href "#/"} "go to Home Page"]]]))


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [show-panel @active-panel])))
