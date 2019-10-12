<template>
  <v-layout wrap>
    <v-flex>
      <h1>
        <code-greater-than class="icon" />使用する言語
      </h1>
      <HorizontalBarChart />
      <h1>
        <codepen-icon class="icon" />経験した技術
      </h1>
      <p>AWS, Linux, Jenkins</p>
      <h1>
        <DeveloperBoard class="icon" />ポートフォリオ
      </h1>
      <p>
        <Portfolio />
      </p>
      <h1>
        <history class="icon" />経歴
      </h1>
      <ul>
        <li>2014: 修士課程</li>
        <li>2016: キヤノン株式会社入社</li>
      </ul>
      <h1>
        <FileCertificate class="icon" />資格
      </h1>
      <ul>
        <li>応用情報技術者</li>
        <li>AWS Certified Cloud Practitioner</li>
        <li>TOEIC 745点</li>
      </ul>
      <h1>
        <Note class="icon" />論文
      </h1>
      <ul>
        <li v-for="(paper, index) in papers" :key="index">
          {{paper.author}}, {{paper.title}} , {{paper.conference}}, {{paper.year}}
          <b
            v-if="paper.award != ''"
          >, {{paper.award}}</b>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.icon {
  margin-right: 10px;
}
</style>

<script>
import CodepenIcon from "vue-material-design-icons/Codepen.vue";
import Note from "vue-material-design-icons/Note.vue";
import CodeGreaterThan from "vue-material-design-icons/CodeGreaterThan.vue";
import FileCertificate from "vue-material-design-icons/FileCertificate.vue";
import History from "vue-material-design-icons/History.vue";
import DeveloperBoard from "vue-material-design-icons/DeveloperBoard.vue";
import Portfolio from "./Portfolio.vue";
import { HorizontalBar } from "vue-chartjs";

var HorizontalBarChart = {
  extends: HorizontalBar,
  mounted() {
    this.renderChart(
      {
        labels: ["Python", "C++", "C", "Java", "Vue"],
        datasets: [
          {
            backgroundColor: [
              "#3572A5",
              "#f34b7d",
              "#555555",
              "#b07219",
              "#3d9970"
            ],
            data: [1, 3.5, 4, 5, 0.5]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                max: 5,
                stepSize: 1
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: "Year",
                fontSize: 25
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 20
              }
            }
          ]
        }
      }
    );
  }
};

export default {
  components: {
    HorizontalBarChart,
    Portfolio,
    CodepenIcon,
    CodeGreaterThan,
    History,
    Note,
    FileCertificate,
    DeveloperBoard
  },
  data() {
    return {
      papers: [
        {
          author: "小花祐輔, 高橋淳二, 狐崎直文, 戸辺義人, Guillaume Lopez",
          title: "加速度センサを用いた自転車走行時の路面信号抽出に関する研究",
          conference: "第16回人間情報学会",
          year: "2013",
          award: "最優秀ポスター賞"
        },
        {
          author: "小花祐輔, 高橋淳二, 狐崎直文, 戸辺義人, Guillaume Lopez",
          title: "スマートフォンを用いた自転車走行時の路面信号抽出機構の設計",
          conference: "第76回情報処理学会全国大会",
          year: "2014",
          award: ""
        },
        {
          author:
            "小花祐輔, 高橋淳二, 宇佐美格, 狐崎直文, 戸辺義人, Guillaume LOPEZ",
          title: "自転車走行時の路面情報抽出：基本検討および実測定",
          conference: "第71回SIG-MBL研究発表会",
          year: "2014",
          award: "優秀発表賞"
        },
        {
          author:
            "Y.Kobana, J.Takahashi, I.Usami, N.Kitsunezaki, Y.Tobe, G.Lopez",
          title:
            "Detection of Road Damage using Signals of Smartphone-Embedded Accelerometer while Cycling",
          conference: "IWWISS2014",
          year: "2014",
          award: ""
        },
        {
          author: "小花祐輔, 高橋淳二, 狐崎直文, 戸辺義人, Guillaume Lopez",
          title:
            "自転車を利用した道路モニタリング : 独立成分分析を用いた路面情報の抽出と分析",
          conference: "ロボティクス・メカトロニクス",
          year: "2015",
          award: ""
        },
        {
          author:
            "Y.Kobana, J.Takahashi, I.Usami, N.Kitsunezaki, Y.Tobe, G.Lopez",
          title:
            "Accurate Road Damage Classification Based on Real Signal Mother Wavelet of Acceleration Signal",
          conference: "IEEE/SICE Symposium on System Ingegration",
          year: "2015",
          award: ""
        },
        {
          author: "J.Takahashi, Y.Kobana, Y.Tobe, G.Lopez",
          title:
            "Classification of Steps on Road Surface Using Acceleration Signals",
          conference: "Web Intelligence and Smart Sensigng",
          year: "2015",
          award: ""
        }
      ]
    };
  }
};
</script>