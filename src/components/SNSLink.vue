<template>
  <v-layout wrap justify-center>
    <ul class="sns-wrap">
      <li v-for="(sns_link, index) in sns_links" :key="index">
        <a :href="sns_link.url">
          <img class="sns-link" :src="sns_link.img_src" />
        </a>
      </li>
    </ul>
  </v-layout>
</template>

<style scoped>
.sns-link {
  width: 50px;
  height: 50px;
}

.sns-wrap {
  margin: 20px auto;
  padding: 0;
  overflow: hidden;
  list-style: none;
}

.sns-wrap li {
  float: left;
  margin: 0 10px 0 0;
}
</style>

<script>
export default {
  data() {
    return {
      sns_links: [
        {
          img_src: require("@/assets/images/twitter_link.svg"),
          url: "https://twitter.com/yusuke16k",
          name: "twitter",
          color: "#1DA1F2"
        },
        {
          img_src: require("@/assets/images/facebook_link.png"),
          url: "https://www.facebook.com/yuusukekobana",
          name: "facebook",
          color: "#1877f2"
        },
        {
          img_src: require("@/assets/images/github_link.png"),
          url: "https://github.com/ykobana",
          name: "github",
          color: "#000000"
        }
      ]
    };
  }
};
</script>
