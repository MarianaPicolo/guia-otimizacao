<template>
  <div id="app">
    <Nav />

    <transition name="fade" appear>
      <main class="main container">
        <slot />
      </main>
    </transition>

    <footer class="footer"></footer>
  </div>
</template>

<script>
import Nav from '../components/Nav';

export default {
  components: {
    Nav,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.footer {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #434343;
  padding: 2rem;
}
</style>
