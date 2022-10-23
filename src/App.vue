<template>
  <el-config-provider :locale="ZhCn">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ZhCn from "element-plus/lib/locale/lang/zh-cn";
export default defineComponent({
  name: "app",
  setup() {
    return {
      ZhCn
    };
  }
});
</script>
