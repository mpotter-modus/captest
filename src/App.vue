<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img :src="imgSrc" class="custom-img" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: () => ({
    imgSrc: '',
  }),
  mounted() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((image) => {
      this.imgSrc = image.webPath;
    });
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.custom-img {
  width: 100%;
}
</style>
