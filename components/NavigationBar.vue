<script setup>
const props = defineProps({
  tabProp: {
    type: String,
    default: "index",
    required: false,
  },
});
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-show="props.tabProp !== 'index'">
          <LazyNuxtLink to="/"> Home </LazyNuxtLink>
        </li>
        <li v-show="props.tabProp !== 'agenda'">
          <LazyNuxtLink to="/agenda"> Agenda </LazyNuxtLink>
        </li>
        <li v-show="props.tabProp !== 'all-forms'">
          <LazyNuxtLink to="/all-forms"> Application Forms </LazyNuxtLink>
        </li>
        <li v-show="props.tabProp !== 'posts'">
          <LazyNuxtLink to="/posts"> Posts </LazyNuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
