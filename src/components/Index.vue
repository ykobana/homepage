<template>
  <v-app>
    <!--
    <v-app-bar app dark>
      <v-toolbar-title>ykoba's page</v-toolbar-title>
    </v-app-bar>
    -->
    <v-content>
      <Top />
      <v-container>
        <Intro />
        <SNSLink />
        <About />
      </v-container>
    </v-content>
    <v-footer dark>
      <div class="flex-grow-1 absolute"></div>
      <div>&copy; {{ new Date().getFullYear() }} Yusuke KOBANA All Rights Reserved.</div>
    </v-footer>
  </v-app>
</template>

<style>
  h1 {
    text-align: left;
    border-bottom: solid 3px #dcdcdc;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  li {
    text-align: left;
    font-size: 1.5em;
  }
  p {
    font-size: 1.5em;
  }
</style>

<script>
import Intro from "./Intro.vue";
import About from "./About.vue";
import SNSLink from "./SNSLink.vue";
import Top from "./Top.vue";

export default {
  components: {
    Intro,
    About,
    SNSLink,
    Top
  },
  data: () => ({})
};
</script>

