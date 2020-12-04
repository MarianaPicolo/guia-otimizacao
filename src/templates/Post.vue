<template>
  <Layout>
    <section class="text">
      <div class="content-title">
        <!-- <contentTags :content="$page.content" /> -->
        <h1 class="content-title__text">
          {{ $page.post.title }}
        </h1>

        <!-- <contentMeta :content="$page.content" /> -->
      </div>

      <div class="content content-box">
        <div class="content__content" v-html="$page.post.content" />

        <!-- <div class="content__footer"></div> -->
      </div>
    </section>
  </Layout>
</template>

<script>

export default {
  components: {
    // contentMeta,
    // contentTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date
    timeToRead
    description
    content
  }
}
</page-query>

<style lang="scss" scoped>
</style>
