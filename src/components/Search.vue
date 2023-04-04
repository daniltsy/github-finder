<template>
  <div class="wrapper__search">
    <div class="search">
      <div class="search-icon">
        <svg
          width="24"
          height="24"
          version="1.1"
          viewBox="0 0 700 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m398.63 402.89 108.87 108.87c20.512 20.492 53.742 20.492 74.254 0 20.492-20.512 20.492-53.742 0-74.254l-109.18-109.16c42.84-75.848 31.988-173.88-32.566-238.44-77.598-77.598-203.61-77.598-281.21 0h-0.019531c-77.594 77.613-77.594 203.63 0.019531 281.22 64.941 64.961 163.82 75.551 239.84 31.766zm53.727-45.293c-3.8711 4.6562-7.9805 9.1719-12.355 13.527-3.9727 3.9922-8.0859 7.7539-12.305 11.324l104.55 104.54c6.8398 6.8438 17.918 6.8438 24.742 0 6.8438-6.8242 6.8438-17.902 0-24.742zm-268.82-242.95c63.945-63.941 167.77-63.941 231.72 0 63.945 63.965 63.945 167.79 0 231.74-63.945 63.945-167.77 63.945-231.72 0-63.945-63.945-63.945-167.77 0-231.72z"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <input type="text" :placeholder="placeholder" v-model="search" />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return {
      search: this.value,
    }
  },
  watch: {
    search(sValue) {
      // console.log(sValue)
      this.$emit("search", sValue)
    },
  },
}
</script>

<style scoped>
svg {
  color: #e4e4e4;
  padding-top: 2px;
}
.wrapper__search {
  position: relative;
}
.search {
  top: 0px;
  bottom: 0px;
  left: 0px;
  position: absolute;
}
.search-icon {
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;

  align-items: center;
  display: flex;
}
input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0px;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  min-width: 400px;
  height: auto;
}
</style>
