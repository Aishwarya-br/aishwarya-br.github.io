<template>
    <div class="template-container">
        <div class="menu1">
            <form class="form-inline mb-4" @submit.prevent="generateViz(searchTerm)">
            <div>
                <input type="search" class="form-field" placeholder="Search for Movie Name" v-model="searchTerm">
                <button type="button" class="button button1"
                    title="Generate Viz" @click="generateViz(searchTerm)">
                    <MdSearchIcon/> &nbsp; Search
                </button>
                <button type="button" class="button button-1 ml-1"
                    title="Reset Viz" @click="resetViz();">
                    <MdRefreshIcon/> &nbsp; Reset
                </button>
            </div>
            </form>
        </div>
        <div class="menu">
        <form @submit.prevent="filter(movie_type)">
            <div>
                <input type="search" class="form-field" placeholder="Search by Movie Type" style="width:auto" v-model="movie_type">
                <button type="button" class="button button1" @click="filter(movie_type)">
                    <MdSearchIcon/> &nbsp; Search
                </button>
                <button type="button" class="button button1 ml-1" @click="filter_type();">
                <MdRefreshIcon/> &nbsp; Reset
                </button>
            </div>
        </form>
        <h4  v-if="this.searchTerm">Matching Movies</h4>
        <h4 v-else>Movies List Available</h4>
        <div style="max-height: 400px;overflow: auto">
        <ul v-for="title in movieList2" :key="`tt-${title.name}`">
            <li style="cursor: pointer" @click.prevent="descrip(title)">{{title.name}}
            <p>{{title.type}}<br>
            {{title.date}}</p></li>
        </ul>
        </div>
        </div>

        <div v-if="description.name" class="main_des overflow-auto hmax-400">
        <h1>MOVIE description</h1>
        <p>
            <span style="font-weight: bold"> MOVIE NAME :</span> {{description.name}}
        </p>
        <p><span style="font-weight: bold"> MOVIE TYPE :</span> {{description.type}}</p>
        <p><span style="font-weight: bold"> RELEASED DATE :</span> {{description.date}}</p>
        <p><span style="font-weight: bold"> MOVIE DETAILS :</span><br> {{description.details}}</p>
        <p><span style="font-weight: bold"> MOVIE RATING :</span> {{description.rate}}/10</p>
        </div>
        <div v-else class="main_des" style="max-height: 400px;overflow: auto">
            <h4>
                Explore The Movies and Select your favorite movie form the List to know more details
            </h4>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// import axios from "axios"
export default {
    "components": {
        "Footer": () => import("@/components/layout/Footer"),
        "MdSearchIcon": () => import("vue-ionicons/dist/md-search.vue"),
        "MdRefreshIcon": () => import("vue-ionicons/dist/md-refresh.vue")
    },
    data () {

        return {
            "searchTerm": "",
            "movie_type": "",
            "movieList2": [],
            "description": [],
            "flag": 0,
            "movieList": [
                {
                    "name": "Alice in Wonderland",
                    "type": "Action",
                    "date": "released in 2010",
                    "rate": 8,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."
                },
                {
                    "name": "Alice Arrietty",
                    "type": "Comedy",
                    "date": "released in 2011",
                    "rate": 9,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                },
                {
                    "name": "The War of Two Worlds",
                    "type": "Action",
                    "date": "released in 2017",
                    "rate": 10,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                },
                {
                    "name": "Clash of the Titans",
                    "type": "Romance",
                    "date": "released in 2015",
                    "rate": 7.6,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                },
                {
                    "name": "Dark World1",
                    "type": "Action",
                    "date": "released in 2016",
                    "rate": 6,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                },
                {
                    "name": "Clash of the Titans5",
                    "type": "Romance",
                    "date": "released in 2015",
                    "rate": 7.6,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                },
                {
                    "name": "Dark World2",
                    "type": "Action",
                    "date": "released in 2016",
                    "rate": 6,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                },
                {
                    "name": "Clash of the Titans3",
                    "type": "Romance",
                    "date": "released in 2015",
                    "rate": 7.6,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                },
                {
                    "name": "Dark World4",
                    "type": "Action",
                    "date": "released in 2016",
                    "rate": 6,
                    "details": "TV programs are available for the blind. Consequently, automating this process has the potential to greatly increase accessibility to this media content."

                }
            ]
        }

    },
    "methods": {
        filter (value) {

            this.movieList2 = []
            for (let i = 0; i < this.movieList.length; i++) {

                let mov_name = this.movieList[i].type.toLowerCase()

                if (mov_name.includes(value.toLowerCase())) {

                    this.movieList2.push(this.movieList[i])

                }

            }

        },
        filter_type () {

            this.movie_type = ""
            this.movieList2 = this.movieList

        },
        getinput () {

            this.movieList2 = this.movieList
            this.description = this.movieList[0]

            /* axios({
               "method": "get",
               "url": "https://api.themoviedb.org/",
               "params": {
               "movie": "jj"
               }
               }).
               then(response => { */

            /* console.log(response.data)
               this.movieList = response.data */

            /* }).
               catch(error => { */

            /* this.$store.dispatch("loader", false)
               this.$store.dispatch("errorNotifications", error) */

            //     })


        },
        descrip (value) {

            this.description = value

        },
        generateViz (value) {

            if (value) {

                this.movieList2 = []
                for (let i = 0; i < this.movieList.length; i++) {

                    let mov_name = this.movieList[i].name.toLowerCase()

                    if (mov_name.includes(value.toLowerCase())) {

                        this.movieList2.push(this.movieList[i])

                    }

                }

            } else {

                this.$store.dispatch("errorNotifications", "Please fill in all details to continue.")

            }


        },
        resetViz () {

            this.searchTerm = ""
            this.movieList2 = this.movieList

        }
    },
    created () {

        this.getinput()

    }
}
</script>
<style scoped>
.text-center{
    margin-bottom: 400px;
}
.menu1{
    top: 120px;
    left: 390px;
    width: 65%;
    position: absolute;
    float: right;

}
.menu {
    top: 120px;
    width: 25%;
    position: absolute;
    float: left;
    padding: 15px;
    border: 1px solid #add;
    color: white;
}

.main_des {
    top: 200px;
    left: 390px;
    width: 65%;
    position: absolute;
    float: right;
    padding: 15px;
    border: 1px solid #add;
}
.button {
  background-color: #0d7ad4; /* Green */
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

.button1 {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
::-webkit-scrollbar {

  width: 12px;
  height: 12px

    }
::-webkit-scrollbar-thumb{

  -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.75);
  background-color: #0d7ad4;
  border: 0.05em solid #eeeeee;
  border-radius: 8px
}

::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.75);
    background-color: #F5F5F5;
    border-radius: 8px;
}
</style>
