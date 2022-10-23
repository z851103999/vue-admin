<template>
  <img :src="bg" class="wave" />
  <div class="login-container">
    <div class="img">
      <component :is="currentWeek" />
    </div>
    <div class="login-box">
      <div class="login-form">
        <avatar class="avatar" />
        <Motion><h2>vue admin</h2></Motion>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="loginRules"
          size="large"
        >
          <Motion :delay="100">
            <el-form-item prop="username">
              <el-input
                v-model="ruleForm.username"
                clearable
                :input-style="{ 'user-select': 'none' }"
                placeholder="账号"
              />
            </el-form-item>
          </Motion>

          <Motion :delay="150">
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                clearable
                :input-style="{ 'user-select': 'none' }"
                show-password
                placeholder="密码"
              />
            </el-form-item>
          </Motion>

          <Motion :delay="200">
            <el-form-item prop="verifyCode">
              <el-input
                v-model="ruleForm.verifyCode"
                clearable
                :input-style="{ 'user-select': 'none' }"
                placeholder="验证码"
              />
            </el-form-item>
          </Motion>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Motion from "./utils/motion";
import { bg, avatar, currentWeek } from "./utils/static";
import { loginRules } from "./utils/rule";
import { reactive, ref } from "vue";
import { FormInstance } from "element-plus";

const ruleForm = reactive({
  username: "rootadmin",
  password: "123456",
  verifyCode: ""
});
const ruleFormRef = ref<FormInstance>();
</script>

<style lang="scss">
@import url("/@/views/login/style/login.scss");
</style>
