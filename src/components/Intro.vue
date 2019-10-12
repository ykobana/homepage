<template>
  <v-layout wrap>
    <v-flex xs12 sm12 md3>
      <img id="icon" src="@/assets/images/icon.png" alt="icon" />
    </v-flex>
    <v-flex xs12 sm12 md9>
      <h1 id="name">Yusuke KOBANA</h1>
      <p id="birthday">1991.12.12</p>
      <p id="hello">メーカーでコントローラ開発をしているITエンジニアです。趣味でWebアプリケーションの開発、Webスクレイピング、スマートホーム化をしています。最近は個人の生活を豊かにするシステムのWebアプリケーションの開発に興味があります。学生時代は自転車とスマートフォンを用いたセンシングによる路面状況の調査に関する研究をしていました。</p>
    </v-flex>
  </v-layout>
</template>

<style scoped>
#icon {
  width: 100%;
  height: auto;
}

#name {
  font-size: 5em;
  text-align: center;
  color: #696969;
}

#birthday {
  font-size: 3em;
  color: #c0c0c0;
}

#hello {
  text-align: left;
}
</style>