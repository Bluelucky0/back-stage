<template>
  <el-row :gutter="20" class="home">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" class="topCard">
        <div class="card-top">
          <img src="/img/imgs/111.jpg" alt="" />
          <div>
            <span>Admin</span><br />
            <span>超级管理员</span>
          </div>
        </div>
        <hr />
        <div class="card-bottom">
          <div class="first">
            <span>上次登录时间:</span>
            <span>2021-11-27</span>
          </div>
          <div class="second">
            <span>上次登录地点:</span>
            <span>武夷学院</span>
          </div>
        </div>
      </el-card>
      <el-card class="table-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>产品</span>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="品牌" width="80">
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="todayBuy"
            label="日销"
            width="80"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="monthBuy"
            label="月销"
            width="80"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="totalBuy"
            label="总销"
            width="80"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="margin-top: 20px" class="lint">
      <div class="num">
        <el-card
          class="card-card"
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">￥{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height: 280px" class="one">
        <div style="height: 280px" ref="echart"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 260px">
          <div style="height: 240px" ref="userEchart"></div>
        </el-card>
        <el-card shadow="hover" style="height: 260px">
          <div style="height: 240px" ref="videoEchart"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHomeData } from "../../api/getHomeDate";
import * as echarts from "echarts";
// const echarts = require("echarts");
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1111,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 153,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1111,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1111,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 1111,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1111,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      echartsData: {
        order: {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          //提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: [
            "#2ec7c9",
            "#b6a2de",
            "#5ab1ef",
            "#ffb980",
            "#d87a80",
            "#8d98b3",
          ],
          series: [],
        },
        user: {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", //类目轴
            data: [],
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [],
        },
        video: {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [],
        },
      },
    };
  },
  methods: {
    getTableData() {
      getHomeData().then((res) => {
        // console.log(res);
        this.tableData = res.data.data.tableData;

        //折线图
        const order = res.data.data.orderData;
        this.echartsData.order.xAxis.data = order.date;
        let keyArray = Object.keys(order.data[0]);
        keyArray.forEach((key) => {
          this.echartsData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        const myEchartsOrder = echarts.init(this.$refs.echart);
        myEchartsOrder.setOption(this.echartsData.order);

        //柱状图
        this.echartsData.user.xAxis.data = res.data.data.userData.map(
          (item) => item.date
        );
        this.echartsData.user.series.push({
          name: "新增用户",
          data: res.data.data.userData.map((item) => item.new),
          type: "bar",
        });
        this.echartsData.user.series.push({
          name: "活跃用户",
          data: res.data.data.userData.map((item) => item.active),
          type: "bar",
        });
        const myuserEchart = echarts.init(this.$refs.userEchart);
        myuserEchart.setOption(this.echartsData.user);

        //饼状图
        this.echartsData.video.series.push({
          data: res.data.data.videoData,
          type: "pie",
        });
        const myVideoEchart = echarts.init(this.$refs.videoEchart);
        myVideoEchart.setOption(this.echartsData.video);
      });
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style lang='scss' scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.topCard {
  width: 300px;
  height: 300px;
  background-color: rgb(237, 240, 243);
  .card-top {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    span {
      line-height: 100%;
      align-items: center;
    }
  }
  .card-bottom {
    margin: 15px;
    .first,
    .second {
      display: flex;
      justify-content: space-between;
    }
  }
}
.table-card {
  width: 300px;
  margin-top: 30px;
}
.num {
  display: flex;
  align-items: center;
  // height: 300px;
  flex-wrap: wrap;
  .detail {
    .num {
      font-size: 26px;
    }
    .txt {
      font-size: 16px;
    }
  }
}
.card-card {
  width: 250px;
  height: 80px;
  margin: 0 auto 10px;
  align-items: center;
  .icon {
    width: 100px;
    height: 100px;
    line-height: 80px;
    align-items: center;
  }
}
.one {
  width: 600px;
  height: 200px;
  // margin-top: 30px;
  margin: 30px auto;
  align-items: center;
}
.graph {
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 300px;
  }
}
</style>