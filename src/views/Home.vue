<template>
  <div class="home" style="display: flex; justify-content: center">
    <el-table :data="getTableData" style="width: 90%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="content" label="任务详情"> </el-table-column>
      <el-table-column prop="isFinish" label="是否完成">
        <template #default="scope">
          <el-switch :value="scope.row.isFinish" @click="changeStatus(scope)">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTableData"]),
  },
  methods: {
    ...mapActions(["changeStatusOfWork"]),
    changeStatus(scope) {
      console.log(scope.$index);
      this.changeStatusOfWork(scope.$index);
    },
  },
};
</script>
