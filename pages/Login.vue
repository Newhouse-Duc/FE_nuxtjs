<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <div class="card-body">
      <h2 class="card-title justify-center">Đăng nhập</h2>
      <div class="form-control">
     <label class="floating-label">
  <span class="label-text"> <EnvelopeIcon class="h-6 w-6 text-gray-500" /> </span>
  <input type="text" placeholder="mail@site.com" class="input input-md" />
</label>
      </div>
      <div class="form-control">
        <label class="floating-label">
          <span class="label-text"> <LockClosedIcon class="h-6 w-6 text-gray-500" /></span>
        </label>
        <input type="password" placeholder="Type here" class="input input-md" />
      </div>

      <button class="btn btn-accent mt-4">Đăng nhập</button>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon,LockClosedIcon  } from '@heroicons/vue/24/outline'; // Đảm bảo tên biểu tượng đúng
definePageMeta({
  layout: 'default'
});
</script>

