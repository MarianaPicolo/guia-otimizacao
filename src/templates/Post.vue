<template>
  <Layout>
    <div class="wrapper">
      <aside class="side">
        <div
          v-if="subtitles.length > 0 && subtitles[0].depth !== 3"
          class="sidebar sidebar--right hide-for-small"
        >
          <h3>Tópicos desta seção</h3>
          <ul v-if="subtitles.length" class="topics">
            <li
              class="topics__item"
              :class="'topics__item-depth-' + subtitle.depth"
              v-for="subtitle in subtitles"
              :key="subtitle.value"
            >
              <a class="topics__link" :href="subtitle.anchor">
                {{ subtitle.value }}
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <section>
        <header>
          <h1>
            {{ $page.post.title }}
          </h1>

          <!-- <contentMeta :content="$page.content" /> -->
        </header>

        <article class="content-box">
          <div class="text" v-html="$page.post.content" />

          <!-- <div class="content__footer"></div> -->
        </article>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      subtitles: [],
    };
  },
  created() {
    this.subtitles = this.$page.post.subtitles;
  },
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
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--text-color);
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'sidebar content';
  min-height: 100vh;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'sidebar'
    'content';
  }

  aside {
    grid-area: sidebar;
    padding: 3rem;
    background-color: var(--soft-blue);
    height: 100%;

    h3 {
      margin-bottom: 3rem;
    }

    .topics {
      font-weight: 500;

      li {
        &:hover {
          background-color: #bac6db;
        }

        &:not(:last-of-type) {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

  section {
    grid-area: content;
    padding: 3rem;

    h1 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 3rem;
    }

    .content-box {
      margin: 0 auto;
      max-width: 70ch;
      font-size: 1.1rem;
      line-height: 1.7;
      text-align: justify;
    }
  }
}
</style>
