<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Giỏ hàng của bạn</h1>
        <p class="mt-2 text-sm text-gray-600">{{ cartItems.length }} sản phẩm</p>
      </div>

      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-8">
          <div class="bg-white rounded-lg shadow-sm">
            <!-- Empty Cart State -->
            <div v-if="cartItems.length === 0" class="p-12 text-center">
              <svg class="mx-auto h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 class="mt-4 text-lg font-medium text-gray-900">Giỏ hàng trống</h3>
              <p class="mt-2 text-sm text-gray-500">Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
              <button class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Tiếp tục mua sắm
              </button>
            </div>

            <!-- Cart Items List -->
            <div v-else class="divide-y divide-gray-200">
              <div v-for="item in cartItems" :key="item.id" class="p-6 flex gap-6">
                <!-- Product Image -->
                <div class="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                </div>

                <!-- Product Info -->
                <div class="flex-1 flex flex-col">
                  <div class="flex justify-between">
                    <div class="flex-1">
                      <h3 class="text-base font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        {{ item.name }}
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">{{ item.category }}</p>

                      <!-- Variant Info -->
                      <div v-if="item.variant" class="mt-2 flex gap-4 text-sm text-gray-600">
                        <span v-if="item.variant.color">Màu: {{ item.variant.color }}</span>
                        <span v-if="item.variant.size">Size: {{ item.variant.size }}</span>
                      </div>
                    </div>

                    <!-- Price -->
                    <div class="text-right ml-4">
                      <p class="text-lg font-semibold text-gray-900">
                        {{ formatPrice(item.price) }}
                      </p>
                      <p v-if="item.originalPrice" class="text-sm text-gray-400 line-through">
                        {{ formatPrice(item.originalPrice) }}
                      </p>
                    </div>
                  </div>

                  <!-- Quantity & Actions -->
                  <div class="mt-4 flex items-center justify-between">
                    <!-- Quantity Controls -->
                    <div class="flex items-center border border-gray-300 rounded-lg">
                      <button
                        @click="decreaseQuantity(item.id)"
                        class="px-3 py-1 hover:bg-gray-50 transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        :value="item.quantity"
                        readonly
                        class="w-12 text-center border-x border-gray-300 py-1 text-sm font-medium"
                      />
                      <button
                        @click="increaseQuantity(item.id)"
                        class="px-3 py-1 hover:bg-gray-50 transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>

                    <!-- Remove Button -->
                    <button
                      @click="removeItem(item.id)"
                      class="text-sm text-red-600 hover:text-red-800 font-medium flex items-center gap-1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Promo Code Section -->
          <div v-if="cartItems.length > 0" class="mt-6 bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-sm font-semibold text-gray-900 mb-3">Mã giảm giá</h3>
            <div class="flex gap-3">
              <input
                v-model="promoCode"
                type="text"
                placeholder="Nhập mã giảm giá"
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                @click="applyPromoCode"
                class="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Áp dụng
              </button>
            </div>
            <p v-if="promoMessage" :class="['mt-2 text-sm', promoSuccess ? 'text-green-600' : 'text-red-600']">
              {{ promoMessage }}
            </p>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="mt-8 lg:mt-0 lg:col-span-4">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <h2 class="text-lg font-semibold text-gray-900 mb-6">Tóm tắt đơn hàng</h2>

            <div class="space-y-4">
              <!-- Subtotal -->
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Tạm tính</span>
                <span class="font-medium text-gray-900">{{ formatPrice(subtotal) }}</span>
              </div>

              <!-- Shipping -->
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Phí vận chuyển</span>
                <span class="font-medium text-gray-900">
                  {{ shipping === 0 ? 'Miễn phí' : formatPrice(shipping) }}
                </span>
              </div>

              <!-- Discount -->
              <div v-if="discount > 0" class="flex justify-between text-sm">
                <span class="text-gray-600">Giảm giá</span>
                <span class="font-medium text-green-600">-{{ formatPrice(discount) }}</span>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <div class="flex justify-between">
                  <span class="text-base font-semibold text-gray-900">Tổng cộng</span>
                  <span class="text-xl font-bold text-gray-900">{{ formatPrice(total) }}</span>
                </div>
              </div>
            </div>

            <!-- Checkout Button -->
            <button
              :disabled="cartItems.length === 0"
              class="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Thanh toán
            </button>

            <!-- Continue Shopping -->
            <button class="w-full mt-3 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Tiếp tục mua sắm
            </button>

            <!-- Security Badge -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Thanh toán an toàn & bảo mật</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'default'
})

// Sample cart data
const cartItems = ref([
  {
    id: 1,
    name: 'Áo thun nam cao cấp',
    category: 'Thời trang nam',
    price: 299000,
    originalPrice: 399000,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    variant: {
      color: 'Đen',
      size: 'L'
    }
  },
  {
    id: 2,
    name: 'Quần jean skinny',
    category: 'Thời trang nam',
    price: 599000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop',
    variant: {
      color: 'Xanh đậm',
      size: '32'
    }
  }
])

const promoCode = ref('')
const promoMessage = ref('')
const promoSuccess = ref(false)
const discount = ref(0)
const shipping = ref(0) // Free shipping

// Computed values
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const total = computed(() => {
  return subtotal.value + shipping.value - discount.value
})

// Methods
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

const increaseQuantity = (itemId) => {
  const item = cartItems.value.find(i => i.id === itemId)
  if (item) {
    item.quantity++
  }
}

const decreaseQuantity = (itemId) => {
  const item = cartItems.value.find(i => i.id === itemId)
  if (item && item.quantity > 1) {
    item.quantity--
  }
}

const removeItem = (itemId) => {
  const index = cartItems.value.findIndex(i => i.id === itemId)
  if (index > -1) {
    cartItems.value.splice(index, 1)
  }
}

const applyPromoCode = () => {
  if (promoCode.value.toUpperCase() === 'SAVE10') {
    discount.value = subtotal.value * 0.1
    promoMessage.value = 'Mã giảm giá đã được áp dụng thành công!'
    promoSuccess.value = true
  } else if (promoCode.value) {
    promoMessage.value = 'Mã giảm giá không hợp lệ'
    promoSuccess.value = false
    discount.value = 0
  }
}
</script>

<style lang="scss" scoped>
</style>