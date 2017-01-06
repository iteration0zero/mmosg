(ns frontend.events
    (:require [re-frame.core :as re-frame]
              [frontend.db :as db]
              [re-frisk.core :refer [add-data add-in-data]]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
  :inc-tile-size
  (fn [db]
    (update-in db [:game :tile-size] inc)))

(re-frame/reg-event-db
  :dec-tile-size
  (fn [db]
    (update-in db [:game :tile-size] dec)))

(re-frame/reg-event-db
  :switch-mode
  (fn [db [_ new-mode]]
    (if (contains? ((:modes db) (:mode db)) new-mode)
      (assoc db :mode new-mode)
      db)))

(re-frame/reg-event-db
  :add-new-building-to-buildings
  (fn [db]
    (update-in db [:game :buildings] #(conj % (get-in db [:game :new-building])))))

(re-frame/reg-event-db
  :update-new-building
  (fn [db [_ x-index y-index]]
    ;;(when (not (zero? (count (get-in db [:game :new-building :corner-points]))))
    ;;  (re-frame/dispatch [:add-new-building-to-buildings])
    ;;  (re-frame/dispatch [:reset-new-building]))
    (let [corner-points-vec [:game :new-building :corner-points]]
      (assoc-in db (vec (conj corner-points-vec (min (count (get-in db corner-points-vec)) 1))) [x-index y-index]))))


(re-frame/reg-event-db
  :reset-new-building
  (fn [db]
    (assoc-in db [:game :new-building :corner-points] [])))

(re-frame/reg-event-db
  :hover
  (fn [db [_ x-index y-index]]
    (if (= (:mode db) :new-building)
      (re-frame/dispatch [:update-new-building x-index y-index]))
    db))

(re-frame/reg-event-db
  :select
  (fn [db [_ x-index y-index]]
    (if (= (:mode db) :build)
      (do (re-frame/dispatch [:switch-mode :new-building])
          (re-frame/dispatch [:update-new-building x-index y-index])))
    db))

(re-frame/reg-event-db
  :de-select
  (fn [db [_ x-index y-index]]
    (if (= (:mode db) :new-building)
      (do (re-frame/dispatch [:add-new-building-to-buildings])
          (re-frame/dispatch [:reset-new-building]))
      (re-frame/dispatch [:switch-mode :view]))
    db))
