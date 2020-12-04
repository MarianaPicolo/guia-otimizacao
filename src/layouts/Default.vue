<template>
  <div id="app">
    <header class="header">
      <nav class="nav"></nav>
    </header>

    <transition name="fade" appear>
      <main class="main container">
        <slot />
      </main>
    </transition>

    <footer class="footer"></footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
</style>
