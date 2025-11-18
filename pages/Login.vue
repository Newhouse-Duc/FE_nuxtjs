<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title justify-center mb-6">Đăng nhập</h2>

      <div class="form-control mb-4">
        <label class="floating-label">
          <span class="label-text">
            <EnvelopeIcon class="h-6 w-6 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="mail@site.com"
            class="input input-md w-full pl-10"
          />
        </label>
      </div>

      <div class="form-control mb-4">
        <div class="relative">
          <label class="floating-label">
            <span class="label-text">
              <LockClosedIcon class="h-6 w-6 text-gray-500" />
            </span>

            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="password"
              class="input input-md w-full pl-10 pr-12"
            />
          </label>

          <button
            type="button"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 focus:outline-none"
            @click="togglePasswordVisibility"
            tabindex="-1"
          >
            <EyeSlashIcon v-if="!showPassword" class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
            <EyeIcon v-else class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
          </button>
        </div>
      </div>

      <div class="form-control mb-4">
        <label class="label cursor-pointer justify-start gap-2">
          <input type="checkbox" class="checkbox checkbox-sm" />
          <span class="label-text">Ghi nhớ đăng nhập</span>
        </label>
      </div>

      <button class="btn btn-accent w-full">Đăng nhập</button>

      <div class="divider">hoặc</div>

      <div class="text-center">
        <a href="#" class="link link-primary text-sm">Quên mật khẩu?</a>
        <span class="mx-2 text-gray-400">•</span>
        <a href="#" class="link link-primary text-sm">Đăng ký tài khoản</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon,LockClosedIcon, EyeIcon,EyeSlashIcon  } from '@heroicons/vue/24/outline';
import { ref } from 'vue'
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
definePageMeta({
  layout: 'default'
});
</script>



