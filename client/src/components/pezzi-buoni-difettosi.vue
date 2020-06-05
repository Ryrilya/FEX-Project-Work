<script lang="ts">
// @ is an alias to /src

import { Component, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Line } from "vue-chartjs";

@Component
export default class PezziBuoniDifettosi extends mixins(Vue, Line) {
  data = {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00"
    ],
    datasets: [
      {
        backgroundColor: "#0f70b7",
        borderColor: "#0f70b7",
        label: "Pezzi buoni",
        data: [1, 2, 3, 6, 4, 2, 3, 5, 10, 2, 4, 5],
        fill: false
      },
      {
        backgroundColor: "#D1D428",
        borderColor: "#D1D428",
        label: "Pezzi guasti",
        data: [2, 4, 1, 3, 5, 4, 1, 3, 2, 8, 6, 3],
        fill: false
      }
    ]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  mounted() {
    this.renderChart(this.data, this.options);
  }
}
</script>