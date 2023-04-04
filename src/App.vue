<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">GitHub Finder</div>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: "App",
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/",
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #0539ff;
  }
}
</style>
