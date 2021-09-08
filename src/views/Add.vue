<template>
  <h2>添加任务</h2>
  <div style="display: flex; justify-content: center">
    <div style="width: 60%">
      <el-form>
        <el-form-item label="任务名称">
          <el-input v-model="work.content" />
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" type="success" @click="addWork"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      work: {
        isFinish: false,
        date: "2020-01-02",
        content: "",
      },
    };
  },
  methods: {
    ...mapActions(["addData"]),
    addWork() {
      this.work.date = this.dateFormat(new Date(), "yyyy-MM-dd");
      this.addData(this.work);
      this.$router.push("/");
    },
    dateFormat(datetime, formatStr) {
      var dat = datetime;
      var str = formatStr;
      var Week = ["日", "一", "二", "三", "四", "五", "六"];
      str = str.replace(/yyyy|YYYY/, dat.getFullYear());
      str = str.replace(
        /yy|YY/,
        dat.getYear() % 100 > 9
          ? (dat.getYear() % 100).toString()
          : "0" + (dat.getYear() % 100)
      );
      str = str.replace(
        /MM/,
        dat.getMonth() > 9
          ? (dat.getMonth() + 1).toString()
          : "0" + (dat.getMonth() + 1)
      );
      str = str.replace(/M/g, dat.getMonth() + 1);
      str = str.replace(/w|W/g, Week[dat.getDay()]);
      str = str.replace(
        /dd|DD/,
        dat.getDate() > 9 ? dat.getDate().toString() : "0" + dat.getDate()
      );
      str = str.replace(/d|D/g, dat.getDate());
      str = str.replace(
        /hh|HH/,
        dat.getHours() > 9 ? dat.getHours().toString() : "0" + dat.getHours()
      );
      str = str.replace(/h|H/g, dat.getHours());
      str = str.replace(
        /mm/,
        dat.getMinutes() > 9
          ? dat.getMinutes().toString()
          : "0" + dat.getMinutes()
      );
      str = str.replace(/m/g, dat.getMinutes());
      str = str.replace(
        /ss|SS/,
        dat.getSeconds() > 9
          ? dat.getSeconds().toString()
          : "0" + dat.getSeconds()
      );
      str = str.replace(/s|S/g, dat.getSeconds());
      return str;
    },
  },
};
</script>

<style>
</style>