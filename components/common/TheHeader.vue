<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <!-- Animated Background Layer -->
    <div class="absolute inset-0 bg-black/95 backdrop-blur-2xl border-b border-cyan-500/20">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px); background-size: 50px 50px;"></div>

      <!-- Glow Effect -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo Cyber -->
        <NuxtLink to="/" class="relative group">
          <div class="flex items-center gap-3">
            <!-- Hexagon Icon -->
            <div class="relative w-12 h-12">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-50 blur-lg group-hover:opacity-100 transition-all duration-500"></div>
              <svg class="relative w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:rotate-180" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7.5 3.75v7.5L12 19.5l-7.5-3.75v-7.5L12 4.5z"/>
              </svg>
            </div>

            <div>
              <div class="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                NEXUS
              </div>
              <div class="text-[8px] text-cyan-500/70 tracking-[0.3em] font-mono">FUTURE STORE</div>
            </div>
          </div>
        </NuxtLink>

        <!-- Navigation Cyber -->
        <nav class="hidden lg:flex items-center gap-2">
          <div
            v-for="item in navItems"
            :key="item.name"
            class="relative group"
            @mouseenter="activeNav = item.name"
            @mouseleave="activeNav = null"
          >
            <button
              class="relative px-6 py-2.5 font-semibold text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 overflow-hidden group"
            >
              <!-- Scan Line Effect -->
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>

              <!-- Border Animation -->
              <span class="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300"></span>

              <span class="relative flex items-center gap-2">
                <component :is="item.icon" class="w-4 h-4" />
                {{ item.name }}
              </span>
            </button>

            <!-- Dropdown -->
            <div
              v-if="item.dropdown"
              v-show="activeNav === item.name"
              class="absolute top-full left-0 mt-4 w-80 transition-all duration-300"
              :class="activeNav === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'"
            >
              <div class="bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg overflow-hidden">
                <!-- Header -->
                <div class="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 border-b border-cyan-500/20">
                  <h3 class="text-sm font-bold text-cyan-400 tracking-wider">{{ item.name.toUpperCase() }}</h3>
                </div>

                <!-- Items -->
                <div class="p-2">
                  <NuxtLink
                    v-for="sub in item.dropdown"
                    :key="sub.name"
                    :to="sub.link"
                    class="block p-3 rounded hover:bg-cyan-500/10 transition-all duration-300 group/item border border-transparent hover:border-cyan-500/30"
                  >
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-300 group-hover/item:text-cyan-400 transition-colors">
                        {{ sub.name }}
                      </span>
                      <svg class="w-4 h-4 text-cyan-500/50 opacity-0 group-hover/item:opacity-100 translate-x-[-10px] group-hover/item:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- Search Futuristic -->
        <div class="hidden md:block flex-1 max-w-md mx-8">
          <div class="relative group">
            <!-- Glow Border -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-focus-within:opacity-20 blur-xl transition-opacity duration-500"></div>

            <div class="relative flex items-center">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search quantum database..."
                class="w-full pl-12 pr-4 py-3 bg-white/5 border border-cyan-500/30 rounded-full text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 font-mono text-sm"
              />
              <svg class="absolute left-4 w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <!-- Animated Dots -->
              <div class="absolute right-4 flex gap-1">
                <span class="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></span>
                <span class="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></span>
                <span class="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3">
          <!-- Wishlist -->
          <button class="relative p-2.5 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span v-if="wishlistCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full flex items-center justify-center font-bold border-2 border-black">
              {{ wishlistCount }}
            </span>
          </button>

          <!-- Cart -->
          <button class="relative p-2.5 border border-purple-500/30 rounded-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold border-2 border-black animate-pulse">
              {{ cartCount }}
            </span>
          </button>

          <!-- Profile -->
          <button class="relative p-2.5 border border-pink-500/30 rounded-lg hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <!-- Status Dot -->
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></span>
          </button>

          <!-- Mobile Menu -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-2.5 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            <svg v-if="!isMobileMenuOpen" class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Status Bar -->
    <div class="relative border-t border-cyan-500/20 bg-black/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-10 text-xs font-mono">
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span class="text-green-400">SYSTEM ONLINE</span>
            </div>
            <div class="hidden md:flex items-center gap-2 text-cyan-500/70">
              <span>LATENCY: 12ms</span>
              <span>|</span>
              <span>ACTIVE USERS: 1,847</span>
            </div>
          </div>

          <div class="flex items-center gap-4 text-cyan-500/70">
            <span class="hidden sm:block">🚀 FREE SHIPPING WORLDWIDE</span>
            <span class="hidden md:block">⚡ FLASH SALE 50% OFF</span>
            <span>🎯 NEW ARRIVALS</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-20px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-20px]"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-cyan-500/20"
      >
        <div class="max-w-7xl mx-auto px-4 py-6 space-y-4">
          <!-- Mobile Search -->
          <div class="relative">
            <input
              type="text"
              placeholder="Search..."
              class="w-full pl-10 pr-4 py-3 bg-white/5 border border-cyan-500/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 font-mono text-sm"
            />
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <!-- Mobile Nav Items -->
          <div class="space-y-2">
            <div v-for="item in navItems" :key="item.name">
              <button
                @click="toggleMobileNav(item.name)"
                class="w-full flex items-center justify-between p-3 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <span class="flex items-center gap-2 text-gray-300 font-semibold">
                  <component :is="item.icon" class="w-4 h-4 text-cyan-400" />
                  {{ item.name }}
                </span>
                <svg
                  class="w-5 h-5 text-cyan-500 transition-transform duration-300"
                  :class="activeMobileNav === item.name ? 'rotate-180' : ''"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="item.dropdown"
                  v-show="activeMobileNav === item.name"
                  class="mt-2 ml-4 space-y-2 overflow-hidden"
                >
                  <NuxtLink
                    v-for="sub in item.dropdown"
                    :key="sub.name"
                    :to="sub.link"
                    class="block p-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded transition-all duration-300"
                  >
                    {{ sub.name }}
                  </NuxtLink>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const activeNav = ref(null)
const activeMobileNav = ref(null)
const searchQuery = ref('')
const cartCount = ref(3)
const wishlistCount = ref(5)

// Icon Components (inline SVG)
const IconShop = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  `
}

const IconCollection = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  `
}

const IconSale = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  `
}

const IconNew = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  `
}

const navItems = ref([
  {
    name: 'Shop',
    icon: IconShop,
    dropdown: [
      { name: 'Men', link: '/men' },
      { name: 'Women', link: '/women' },
      { name: 'Kids', link: '/kids' },
      { name: 'Accessories', link: '/accessories' }
    ]
  },
  {
    name: 'Collections',
    icon: IconCollection,
    dropdown: [
      { name: 'Spring 2025', link: '/spring' },
      { name: 'Summer Vibes', link: '/summer' },
      { name: 'Premium Line', link: '/premium' },
      { name: 'Limited Edition', link: '/limited' }
    ]
  },
  {
    name: 'Sale',
    icon: IconSale,
    dropdown: [
      { name: 'Up to 50% Off', link: '/sale-50' },
      { name: 'Clearance', link: '/clearance' },
      { name: 'Outlet', link: '/outlet' }
    ]
  },
  {
    name: 'New',
    icon: IconNew,
    dropdown: [
      { name: 'New Arrivals', link: '/new' },
      { name: 'Trending Now', link: '/trending' },
      { name: 'Best Sellers', link: '/bestsellers' }
    ]
  }
])

const toggleMobileNav = (name) => {
  activeMobileNav.value = activeMobileNav.value === name ? null : name
}
</script>

<style scoped>
/* Custom animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>