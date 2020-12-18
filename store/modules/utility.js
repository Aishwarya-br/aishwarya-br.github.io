/* ENUM or Stucture
   "loading": ["true", "false"]
   "notifications": [{
       id: getters.getNotificationId,
       type: ["toast-success", "toast-error", "toast-warning", "toast-default"],
       title: "", description: "", duration: ["", "1", "10000"], active: ["true", "false"]}]
   "processingData": [{filename: "", notificationId: ""}] */

export default {
    "state": {
        "loading": false,
        "loadingContext": [],
        "notifications": [],
        "processingData": []
    },
    "mutations": {
        loading (state, payload) {

            state.loading = payload

        },
        loadingContext (state, payload) {

            state.loadingContext = payload

        },
        notificationPush (state, payload) {

            let temp = {}
            if (!payload.duration) {

                temp = {...payload,
                    "duration": 5000}

            } else {

                temp = {...payload}

            }
            state.notifications.push(temp)

        },
        notificationDismiss (state, payload) {

            let index = state.notifications.map((item) => {

                return item.id

            }).indexOf(payload.id)
            state.notifications[index].active = false

        },
        processingDataPush (state, payload) {

            state.processingData.push(payload)

        },
        processingDataComplete (state, payload) {

            let index = state.processingData.map((item) => {

                    return item.filename

                }).indexOf(payload.filename),
                notificationId = state.processingData[index].notificationId,
                notificationsIndex = state.notifications.map((item) => {

                    return item.id + 1

                }).indexOf(notificationId)

            state.notifications[notificationsIndex].active = false
            state.processingData.splice(index, 1)

        },
        destroyUtility (state) {

            state.loading = false
            state.notifications = []
            state.processingData = []

        }
    },
    "actions": {
        errorNotifications ({dispatch, getters}, payload) {

            dispatch("notifications", [
                {
                    "id": getters.getNotificationId,
                    "active": true,
                    "type": "toast-error",
                    "title": "Something went wrong!!",
                    "description": `${payload}`
                },
                "push"
            ])


        },
        logMessages (state, payload) {

            if (payload.type === "error") {

                // eslint-disable-next-line no-console
                console.log("%c Error: " + payload.message, "color: red;")

            } else if (payload.type === "success") {

                // eslint-disable-next-line no-console
                console.log("%c Success: " + payload.message, "color: green;")

            } else if (payload.type === "info") {

                // eslint-disable-next-line no-console
                console.log("%c" + payload.message, "color: blue;")

            } else {

                // eslint-disable-next-line no-console
                console.log("%c" + payload.message)

            }

        },
        loader ({commit}, payload) {

            commit("loading", payload)

        },
        loaderContext ({commit}, payload) {

            commit("loadingContext", payload)

        },
        notifications ({commit, getters}, [
            notification,
            action
        ]) {

            if (action === "push") {

                if (!getters.notifications.find(item => item.title === notification.title && item.description === notification.description)) {

                    commit("notificationPush", notification)

                }

            } else if (action === "dismiss") {

                commit("notificationDismiss", notification)

            }

        },
        processingData ({commit}, [
            processingFile,
            action
        ]) {

            if (action === "push") {

                commit("processingDataPush", processingFile)

            } else if (action === "complete") {

                commit("processingDataComplete", processingFile)

            }

        }
    },
    "getters": {
        "isLoading": state => state.loading,
        "loadingMessages": state => state.loadingContext,
        "notifications": state => state.notifications.filter(notification => notification.active),
        "getNotificationId": state => state.notifications.length,
        "processingData": state => state.processingData
    }
}
