<template>
  <Layout>
    <section class="hero">
      <h1>
        Um Guia voltado à otimização de desempenho em aplicações
        <i>web front-end</i>
      </h1>
      <!-- <div>
      </div> -->
    </section>

    <div class="content">
      <h2>Explorar Tópicos</h2>

      <div class="post-list">
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import PostCard from '~/components/PostCard';

export default {
  metaInfo: {
    title: 'Guia',
  },
  components: {
    PostCard,
  },
};
</script>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}){
    edges {
      node {
        id
        title
        path
        date
        topic
        tags
        author
        description
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(111.16deg, #f5efef 19.27%, #c6d1e6 100%);
  color: rgba(48, 69, 110, 1);
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    max-width: 25ch;
    font-size: 4.5rem;
    text-align: left;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.015em;
    @media (max-width: 48rem) {
      font-size: 2rem;
    }
  }
}
.content {
  h2 {
    font-family: Barlow;
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: 0.015em;
    color: var(--blue);
  }

  .post-list {
    padding-top: 2rem;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media (max-width: 48rem) {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      justify-items: center;
    }
  }
  @media (max-width: 48rem) {
    padding: 2rem 1.5rem;
  }
}
</style>
