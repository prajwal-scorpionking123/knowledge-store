<template>
  <div class="container">
    <div class="input-group mb-3">
      <input
        v-model="information.title"
        type="text"
        class="form-control"
        placeholder="title"
        aria-label="title"
        aria-describedby="basic-addon1"
        required
      />
    </div>
    <div class="mb-3">
      <select
        v-model="information.category"
        class="form-select"
        aria-label="Default select example"
        required
      >
        <option disabled value="">Please select Category</option>
        <option value="Linux">Linux</option>
        <option value="VUE">VUEJS</option>
        <option value="GO">GO</option>
        <option value="OTHER">OTHER</option>
      </select>
    </div>
    <div class="mb-3">
      <select
        v-model="information.type"
        class="form-select"
        aria-label="Default select example"
        required
      >
        <option disabled value="">Please select Type</option>
        <option value="cmd">cmd</option>
        <option value="link">link</option>
        <option value="technique">technique</option>
        <option value="other">other</option>
      </select>
    </div>
    <div class="mb-3">
      <textarea
        required
        v-model="information.info"
        placeholder="description"
        class="form-control"
        id="desc"
        rows="2"
      ></textarea>
    </div>
    <div class="mb-3" v-if="information.type === `cmd` ? true : false">
      <div v-for="(li, index) in information.listInfo" :key="index">
        <input
          v-model="li.info"
          type="text"
          class="form-control"
          placeholder="info"
          aria-label="title"
          aria-describedby="basic-addon1"
          required
        />
        <input
          v-model="li.desc"
          type="text"
          class="form-control"
          placeholder="desc"
          aria-label="title"
          aria-describedby="basic-addon1"
          required
        />
      </div>
      <button class="btn btn-primary" @click="addToListInfo()">Add more</button>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary" @click="save()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddInfo",
  data() {
    return {
      information: {
        title: "",
        category: "",
        type: "",
        listInfo: [
          {
            info: "",
            desc: "",
          },
        ],
        info: "",
      },
    };
  },
  methods: {
    addToListInfo() {
      this.information.listInfo.push({ info: "", desc: "" });
    },
    save() {
      axios
        .post("/server/addInfo", this.information)
        .then((res) => {
          console.log("success", res);
          alert("info added");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
