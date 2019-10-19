<template>
  <v-layout wrap>
    <v-flex xs12 sm6 md3>
      <img id="icon" src="@/assets/images/icon.png" alt="icon" />
    </v-flex>
    <v-flex xs12 sm6 md9>
      <h1 id="name">Yusuke KOBANA</h1>
      <p id="birthday">1991.12.12</p>
      <p id="hello">メーカーでコントローラ開発をしているITエンジニアです。趣味でWebアプリケーションの開発、Webスクレイピング、スマートホーム化をしています。最近は個人の生活を豊かにするシステムのWebアプリケーションの開発に興味があります。</p>
    </v-flex>
  </v-layout>
</template>

<style scoped>
#icon {
  width: 100%;
  height: auto;
}

#name {
  font-size: 3em;
  text-align: center;
  color: #696969;
}

#birthday {
  font-size: 2em;
  color: #c0c0c0;
}

#hello {
  text-align: left;
}
</style>