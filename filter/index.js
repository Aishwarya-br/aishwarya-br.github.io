import Vue from "vue"
import numeral from "numeral"
import store from "@/store"

const filter = {
    "setCookie": Vue.filter("setCookie", function (cname, cvalue, exhrs) {

        let d = new Date(),
            expires = ""
        d.setTime(d.getTime() + exhrs * 60 * 60 * 1000)
        expires = "expires=" + d.toUTCString()
        document.cookie = `${cname}=${cvalue}; Expires=${expires}; Domain=${store.getters.domain}; Path=/;`

    }),
    "getCookie": Vue.filter("getCookie", function (cname) {

        let name = cname + "=",
            decodedCookie = decodeURIComponent(document.cookie),
            ca = decodedCookie.split(";")
        for (let i = 0; i < ca.length; i++) {

            let c = ca[i]
            while (c.charAt(0) === " ") {

                c = c.substring(1)

            }
            if (c.indexOf(name) === 0) {

                return c.substring(name.length, c.length)

            }

        }
        return false

    }),
    "formatNumber": Vue.filter("formatNumber", function (val, formatter) {


        return numeral(val).format(formatter)


    }),
    "capitalize": Vue.filter("capitalize", function (val) {

        let str = val ? val.toString() : ""
        return str.charAt(0).toUpperCase() + str.slice(1)

    }),
    "lowercase": Vue.filter("lowercase", function (val) {

        let str = val ? val.toString() : ""
        return str.toLowerCase()

    }),
    "uppercase": Vue.filter("uppercase", function (val) {

        let str = val ? val.toString() : ""
        return str.toUpperCase()

    }),
    "projectName": Vue.filter("projectName", function (val) {

        let str = val.toString(),
            strs = str.split(" ")
        return strs.join("_").toLowerCase()

    }),
    "className": Vue.filter("className", function (val) {

        let str = val.replace(/ /gu, "-").replace(/\./gu, "").
            replace(/\(/gu, "").
            replace(/\)/gu, "").
            replace(/[&/\\#,+()$~%.'":*?<>{}]/gu, "")
        return str.toLowerCase()

    }),
    "prettyName": Vue.filter("prettyName", function (val) {

        let str = val.toString(),
            strs = str.split("_")
        strs.forEach((ele, i) => {

            strs[i] = ele.charAt(0).toUpperCase() + ele.slice(1)

        })
        return strs.join(" ")

    }),
    "prettyURLs": Vue.filter("prettyURLs", function (val) {

        let str = val.toString()
        return str.replace(/\\\//gu, "/")

    }),
    "toByte": Vue.filter("toByte", function (val) {

        return val * 1000000

    }),
    "toMB": Vue.filter("toMB", function (val) {

        return val / 1000000

    }),
    "ellipsis": Vue.filter("ellipsis", function (value, limit) {

        if (!value) {

            return ""

        }
        return value.toString().slice(0, limit) + (value.length > limit ? "..." : "")

    }),
    "formatDate": Vue.filter("formatDate", function (value, format) {

        if (!value) {

            return ""

        }
        let date = new Date(value)
        if (format === "dd/mm/yyyy") {

            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

        } else if (format === "dd/mm/yyyy hh:mm") {

            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours() <= 9 ? 0 : ""}${date.getHours()}:${date.getMinutes() < 9 ? 0 : ""}${date.getMinutes()}`

        } else if (format === "dd/mm/yyyy hh:mm:ss") {

            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours() <= 9 ? 0 : ""}${date.getHours()}:${date.getMinutes() < 9 ? 0 : ""}${date.getMinutes()}:${date.getSeconds() < 9 ? 0 : ""}${date.getSeconds()}`

        }

        return value


    })
}

export default filter
