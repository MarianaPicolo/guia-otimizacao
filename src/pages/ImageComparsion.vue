<template>
  <Layout>
    <section class="content">
      <h1>
        Exemplos de imagem nos formatos .JPG e .WEBP
      </h1>

      <section>
        <div>
          <g-image src="~/assets/images/DaVinciDrawOriginal.jpg" />
          <p>Formato: Jpg</p>
          <p>Tamanho: 3.1 MB</p>
        </div>
        <div>
          <g-image src="~/assets/images/DaVinciDrawOriginal.webp" />
          <p>Formato: Webp</p>
          <p>Tamanho: 628 KB</p>
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Exemplo imagens Webp x Jpg',
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

  section {
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.5rem;

    img {
      outline: 1px solid var(--soft-blue);
    }

    p {
      margin-top: 1rem;
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  }
}
</style>
