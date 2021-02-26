<template>
  <header>
    <nav>
      <ul class="menu">
        <li class="menu__link"><g-link to="/">Início</g-link></li>
        <li class="menu__link"><g-link to="/#topicos">Artigos</g-link></li>
        <li style="width: 30%; position: relative; display: block;">
          <input
            id="search"
            v-model="searchTerm"
            class="input"
            type="text"
            placeholder="Digite para buscar"
          />
          <div v-if="searchResults.length > 0" class="search-results">
            <g-link
              v-for="result in searchResults"
              :key="result.id"
              :to="result.path"
              class="items"
            >
              {{ result.title }}
            </g-link>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Search from 'gridsome-plugin-flexsearch/SearchMixin';

export default {
  mixins: [Search],
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--blue);
}

nav {
  padding: 2rem;

  .menu {
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
    }

    &__link {
      color: var(--blue);
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
}

.search-results {
  width: 100%;
  padding: 0.5rem;
  position: absolute;
  display: block;
  background-color: var(--soft-blue);
  opacity: 0.9;
  z-index: 2;

  .items {
    font-weight: 600;
    display: block;
  }
}
</style>
