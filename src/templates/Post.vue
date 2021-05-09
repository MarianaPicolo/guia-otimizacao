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
        </header>

        <article class="content-box">
          <div class="text" v-html="$page.post.content" />
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
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'sidebar content';
  min-height: 100vh;
  justify-items: center;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'sidebar'
      'content';
  }

  aside {
    grid-area: sidebar;
    padding: 3rem;
    height: 100%;
    border-right-color: var(--soft-blue);

    h3 {
      margin-bottom: 3rem;
    }

    .topics {
      font-weight: 400;
      font-size: 1.1rem;
      list-style-type: none;
      padding: 1rem;

      li {
        a {
          &:hover {
            font-weight: 500;
          }
        }

        &:not(:last-of-type) {
          margin-bottom: 1rem;
        }
      }

      &__item-depth-1 {
        margin-bottom: 0;
        padding: 0.4rem 0;
        font-size: 1.35rem;
        transition: border-color 0.3s;
        font-weight: 500;
      }

      &__item-depth-2 {
        margin-bottom: 0;
        padding: 0.4rem 0;
        font-size: 1.15rem;
        transition: border-color 0.3s;
        font-weight: 400;
      }

      &__item-depth-3 {
        margin-bottom: 0;
        margin-top: -0.6rem;
        padding: 0.2rem 0.4rem;
        font-size: 0.95rem;
        opacity: 0.8;
      }

      &__item-depth-4 {
        margin-bottom: 0;
        margin-top: -0.6rem;
        padding: 0.2rem 0.4rem;
        font-size: 0.8rem;
        opacity: 0.8;
      }
    }
  }

  section {
    grid-area: content;
    padding: 5rem 0;

    h1 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 3rem;
    }

    .content-box {
      margin: 0 auto;
      max-width: 75ch;
      font-size: 1.15rem;
      line-height: 1.7;
      text-align: justify;
      @media (max-width: 48rem) {
        padding: 0 1rem;
        max-width: 95vw;
      }
    }
  }
}
</style>
