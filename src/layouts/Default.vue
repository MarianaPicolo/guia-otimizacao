<template>
  <div id="app">
    <Nav />

    <transition name="fade" appear>
      <main class="main container">
        <slot />
      </main>
    </transition>

    <footer class="footer">
      <div>
        <a href="https://github.com/MarianaPicolo/guia-otimizacao">
          Este projeto é aberto a toda a comunidade e pode ser encontrado no
          GitHub
        </a>
      </div>
    </footer>
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

  div {
    display: flex;
    justify-content: center;
    color: var(--white-fog);

    a {
      color: var(--white);
      text-decoration: none;

      &:hover {
        transition: all 0.2s;
        font-weight: 600;
      }
    }
  }
}
</style>
