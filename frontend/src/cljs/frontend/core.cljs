(ns frontend.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [frontend.events]
              [frontend.subs]
              [frontend.routes :as routes]
              [frontend.views :as views]
              [frontend.config :as config]
              [re-frisk.core :refer [enable-re-frisk!]]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (enable-re-frisk!)
  (dev-setup)
  (mount-root))
