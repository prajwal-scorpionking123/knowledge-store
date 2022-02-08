<template>
  <div class="container">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ state.category === "" ? "categories" : state.category }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" @click="setListInfoCategory(`ALL`)">ALL</a>
        </li>
        <li>
          <a class="dropdown-item" @click="setListInfoCategory(`Linux`)"
            >Linux</a
          >
        </li>
        <li>
          <a class="dropdown-item" @click="setListInfoCategory(`VUEJS`)"
            >VUEJS</a
          >
        </li>
        <li>
          <a class="dropdown-item" @click="setListInfoCategory(`GO`)">GO</a>
        </li>
        <li>
          <a class="dropdown-item" @click="setListInfoCategory(`OTHER`)"
            >OTHER</a
          >
        </li>
      </ul>
    </div>
    <div class="d-flex flex-column bd-highlight mb-3">
      <div v-for="(info, index) in state.infoList.infos" :key="index">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ info.title }}</h5>
            <!-- <h6 class="card-subtitle mb-2 text-muted"></h6> -->
            <p class="card-text">
              {{ info.info }}
              <i
                v-if="info.type === `link`"
                class="fa fa-clone"
                @click="copyText(info.info)"
                style="color: gray"
              ></i>
            </p>
            <a
              v-if="info.type === `link`"
              target="_blank"
              :href="info.info"
              class="btn btn-primary"
              >OPEN</a
            >
            <button
              class="btn btn-primary"
              v-if="info.type === `cmd`"
              data-bs-toggle="modal"
              data-bs-target="#listInfoModal"
              @click="setListInfo(info.listInfo)"
            >
              View Info
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- list modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="listInfoModal"
      tabindex="-1"
      aria-labelledby="listInfoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="listInfoModalLabel">commands</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="(li, ind) in state.listInfo"
                :key="ind"
              >
                {{ li.info }}
                <i
                  class="fa fa-clone"
                  @click="copyText(li.info)"
                  style="font-size: 18px; color: gray"
                ></i>
                <p>use: {{ li.desc }}</p>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue-demi";
import axios from "axios";
export default {
  name: "Dashboard",

  setup() {
    onMounted(() => {
      fetchInfoList();
    });
    const state = reactive({
      infoList: [],
      listInfo: [],
      category: "",
    });
    const copyText = async (myText) => {
      try {
        await navigator.clipboard.writeText(myText);
        alert("Copied");
      } catch (e) {
        alert("Cannot copy");
      }
    };
    const setListInfoCategory = (category) => {
      if (category === "ALL") {
        fetchInfoList();
        state.category = category;
      } else {
        axios
          .get(`/server/getInfosByCategory/${category}`)
          .then((res) => {
            state.infoList = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
        state.category = category;
      }
    };
    const fetchInfoList = () => {
      axios
        .get("/server/getInfos")
        .then((res) => {
          state.infoList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const setListInfo = (liInfo) => {
      state.listInfo = liInfo;
    };
    return { state, fetchInfoList, setListInfo, copyText, setListInfoCategory };
  },
};
</script>

<style></style>
