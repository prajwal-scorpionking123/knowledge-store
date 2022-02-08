<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{
        store.user.isAuth ? store.user.username : "user"
      }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              v-if="!store.user.isAuth"
              aria-current="page"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="store.user.isAuth"
              aria-current="page"
              to="/dashboard"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="store.user.isAuth" to="/addInfo"
              >AddInfo</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="!store.user.isAuth" to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-if="store.user.isAuth" to="/"
              ><button class="btn btn-secondary" @click="store.signout">
                Logout
              </button></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { useUserStore } from "./store/index";

export default {
  name: "App",
  components: {},

  setup() {
    const store = useUserStore();
    console.log(store.user);
    return {
      store,
    };
  },
};
</script>

<style></style>
