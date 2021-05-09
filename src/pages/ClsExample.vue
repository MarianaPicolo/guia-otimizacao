<template>
  <Layout>
    <section class="content">
      <h1>
        Abaixo está um texto muito longo, que será carregado antes da imagem.
      </h1>
      <h2>
        Esta página foi criada para demonstrar o Cumulative Layout Shift
      </h2>

      <img :src="image" />

      <p>
        Integer ornare mollis metus vitae tempus. Nunc sed consequat mauris.
        Fusce pharetra lectus tellus, et tempus dolor feugiat vel. Proin egestas
        sed ligula id posuere. Aenean non euismod felis. Integer commodo turpis
        quis diam convallis, vitae pharetra ipsum feugiat. Nullam facilisis
        pellentesque vulputate. Nunc pulvinar consectetur lorem non posuere.
        Donec quis bibendum turpis, vitae commodo nisl. Nulla urna neque,
        aliquet commodo arcu sit amet, volutpat suscipit elit. Duis tempus
        blandit porta.
      </p>

      <p>
        Mauris nec massa commodo, vulputate augue ac, accumsan lacus. Nunc
        vestibulum justo eu enim fermentum tincidunt. Donec tristique posuere
        arcu sed faucibus. Donec congue ac libero sed interdum. In pretium elit
        ipsum, in ultricies elit volutpat sit amet. Integer bibendum suscipit
        massa nec facilisis. Vivamus lacinia vehicula interdum. Suspendisse sed
        sapien viverra, auctor nunc non, porttitor tellus. Nulla aliquet
        elementum pretium. Nulla vitae justo ut lorem malesuada auctor. Nunc
        efficitur quam tortor, vitae porta erat laoreet a. Nulla ligula ipsum,
        cursus ac risus eget, maximus blandit eros. Sed aliquet libero arcu, id
        tristique tellus ullamcorper ac. Fusce egestas interdum lectus, sit amet
        cursus augue placerat at. Nunc at elit maximus, mollis nisi at,
        imperdiet turpis. Nam vitae mollis arcu.
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Exemplo CLS',
  },
  created() {
    this.startTimer();
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  data() {
    return {
      timer: null,
      image: null,
    };
  },
  computed: {
    imagePath() {
      return require('~/assets/images/hao-wang-pVq6YhmDPtk-unsplash.jpg');
    },
  },
  methods: {
    startTimer() {
      this.timer = setTimeout(() => {
        this.image = this.imagePath;
      }, 3500);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  h1 {
    text-align: center;
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    letter-spacing: 0.015em;
    color: var(--blue);
    margin-bottom: 3rem;
    @media (max-width: 48rem) {
      font-size: 2rem;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  p {
    margin: 0 auto;
    max-width: 70ch;
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  img {
    transition: 0.2s all;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
}
</style>
