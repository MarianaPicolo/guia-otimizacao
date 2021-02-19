<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <ul class="menu">
          <li>Guia Desempenho</li>
          <li>Guia Desempenho</li>
          <li style="width: 30%">
            <input
              id="search"
              v-model="searchTerm"
              class="input"
              type="text"
              placeholder="Digite para buscar"
            />
            <g-link
              v-for="result in searchResults"
              :key="result.id"
              :to="result.path"
              class="navbar-item"
            >
              {{ result.title }}
            </g-link>
          </li>
        </ul>
      </nav>
    </header>

    <transition name="fade" appear>
      <main class="main container">
        <slot />
      </main>
    </transition>

    <footer class="footer"></footer>
  </div>
</template>

<script>
import Search from 'gridsome-plugin-flexsearch/SearchMixin';

export default {
  mixins: [Search],
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
.nav {
  padding: 2rem;

  .menu {
    display: flex;
    justify-content: space-around;
  }
}

.footer {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #434343;
  padding: 2rem;
}
</style>
