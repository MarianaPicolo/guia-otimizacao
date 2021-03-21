<template>
  <g-link class="link post-card" :to="post.path">
    <h3 class="post-card__title" v-html="post.title" />
    <p class="post-card__description" v-html="post.description" />

    <!-- <div class="post-card__meta">
      {{ postDate }}
    </div> -->
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
    const options = { year: 'numeric', month: 'long' };
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
  transition: all 0.2s;

  &__title {
    font-weight: 500;
    font-size: 1.25rem;
  }

  &__description {
  }

  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.055),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0474815),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0268519);
  }
}
</style>
