(ns frontend.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 :active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
  :game-dimensions
  (fn [db]
    (get-in db [:game :dimensions])))

(re-frame/reg-sub
  :tile-size
  (fn [db]
    (get-in db [:game :tile-size])))

(re-frame/reg-sub
  :buildings
  (fn [db]
    (get-in db [:game :buildings])))

(re-frame/reg-sub
  :building-color
  (fn [db [_ building-type]]
    (get-in db [:game :building-colors building-type])))

(re-frame/reg-sub
  :mode
  (fn [db]
    (:mode db)))

(re-frame/reg-sub
  :new-building
  (fn [db]
    (:new-building db)))
