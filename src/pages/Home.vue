<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="error" v-if="error">
          <p>{{ error }}</p>
        </div>
        <search
          :value="search"
          placeholder="Type username"
          @search="search = $event"
        ></search>
        <button class="btn btnPrimary" @click="searchUser">Search!</button>
        <div class="user-info" v-if="user && !error">
          <img :src="user.avatar_url" class="user-img" />
          <div class="user-container">
            <div class="user-name">Имя : {{ user.name }}</div>
            <div class="user-rep-count">
              Репозиторий: {{ user.public_repos }}
            </div>
            <div class="followers">Фоловеров: {{ user.followers }}</div>
          </div>
        </div>
        <div class="repos__wrapper" v-if="repos && !error">
          <div class="repo-item" v-for="repo in repos" :key="repo.id">
            <div class="repo-info">
              <a class="link" target="_blank" :href="repo.html_url">
                {{ repo.name }}
              </a>
              <span> {{ repo.stargazers_count }} ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import search from "@/components/Search"
import axios from "axios"
export default {
  name: "Home",
  components: {
    search,
  },
  data() {
    return {
      search: "",
      user: null,
      repos: null,
      error: null,
    }
  },
  methods: {
    searchUser() {
      this.getUser()
      this.getRepos()
    },
    getUser() {
      axios
        .get(`https://api.github.com/users/${this.search}`)
        .then((res) => {
          console.log(res)
          this.user = res.data
        })
        .catch(() => {
          this.error = "User doesn`t exist"
        })
    },
    getRepos() {
      axios
        .get(`https://api.github.com/users/${this.search}/repos`)
        .then((res) => {
          console.log(res)
          this.error = null
          this.repos = res.data
        })
        .catch(() => {
          this.error = "User doesn`t exist"
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 40px;
}
.repos__wrapper {
  width: 400px;
  margin: 30px 0;
}
.repo-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
}
.error {
  color: red;
  margin-bottom: 10px;
}
.user-img {
  width: 200px;
}
.user-info {
  width: 400px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-container {
  margin: 30px 0;
}
</style>
