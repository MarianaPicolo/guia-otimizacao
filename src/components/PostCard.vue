<template>
  <g-link class="link post-card" :to="post.path">
    <div class="box" src="" alt=""></div>
    <h3 class="post-card__title" v-html="post.title" />
    <p class="post-card__description" v-html="post.description" />

    <div class="post-card__meta">
      {{ postDate }}
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post'],
  data() {
    return {
      postDate: null,
    };
  },
  mounted() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(this.post.date);
    this.postDate = date.toLocaleDateString('pt-BR', options);
  },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: unset;
}

.post-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 1.25rem;
  background-color: var(--white);
  border-radius: var(--radius);
  max-width: 35ch;
  box-shadow: var(--border);
  cursor: pointer;
  padding: 2rem;

  &__title {
    font-weight: 500;
    font-size: 1.25rem;
  }

  &__description {
  }

  .box {
    height: 50px;
    width: 50px;
    background-color: var(--blue);
  }
}
</style>
