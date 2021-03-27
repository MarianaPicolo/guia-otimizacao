---
title: Otimizando sua aplicação
date: 2021-03-01
topic: soluções
tags: ['soluções', 'ferramentas']
author: Mariana Pícolo
published: true
description: Esta seção apresenta algumas soluções que podem ser rapidamente adotadas para melhorar o desempenho de uma aplicação.
---

# Introdução

Após conhecer e entender como a experiência do usuário na _web_ é classificada através das métricas e como coletar esses dados, esta seção apresenta algumas das principais técnicas que podem ser utilizadas para otimizar o desempenho das aplicações.

## Imagens

Imagens podem consumir mais banda, pois são arquivos grandes, além de exigir mais tempo para serem renderizadas pelo navegador. Por isso, é importante assegurar que as imagens tenham tamanhos menores, melhorando a usabilidade da página, pois podem aparecer mais rapidamente para o usuário que as acessa. [1]

### Compressão

Para garantir arquivos de imagem menores e que consumam menos banda do usuário, recomenda-se que os arquivos passem por um processo de compressão. Este processo pode ser classificado em duas formas: sem perdas (_lossless_) e com perdas (_lossy_) [1].

- Sem perdas (_lossless_): a imagem é processada de forma que os pixels são compactados _sem perdas_ [1]. Geralmente este processo é utilizado para comprimir arquivos nos formatos GIF e PNG, onde os metadados do arquivo são removidos, deixando a imagem intacta. Este processo não apresenta redução substancial no tamanho do arquivo [1].

- Com perdas (_lossy_): a imagem é processada de forma que _parte_ dos pixels são compactados com perdas [1]. Geralmente este processo é utilizado para comprimir arquivos nos formatos JPG e WebP. A imagem resultante pode apresentar aspecto granulado, pois parte dos pixels da imagem foram perdidos. Existem ferramentas de código aberto que podem ajudar o processo de compressão como [Optimizt](https://github.com/funbox/optimizt) e [Caesium - Image Compressor](https://github.com/Lymphatus/caesium-image-compressor).

### Formato (WebP)

WebP é um formato de imagem que suporta compressão com e sem perdas. De acordo com o Google, imagens em formato WebP sem perdas apresentam tamanho de arquivo 26% menor se comparadas ao formato PNG [4]. O Youtube apresentou 10% de melhora no desemepenho do carregamento de suas páginas quando adotou o WebP como o formato de suas _thumbnails_ [3].

É importante ressaltar que até o momento, [nem todos os navegadores modernos suportam WebP](https://caniuse.com/webp). por isso, é necessário utilizar um fallback em sua aplicação, para que todos os browsers consigam exibir as imagens [3]. Para isso, é possível utilizar a tag `<picture>`, que pode conter um ou mais elementos `<source>`, onde o navegador escolherá a melhor alternativa para ser exibida. Caso nenhum caso seja correspondido, o navegador exibirá o elemento `<img>` fornecido. [5]. [Leia mais no exemplo disponibilizado pelo web.dev.](https://web.dev/serve-images-webp/#serve-webp-images)

## JavaScript

### Lazy load

O _Lazy Loading_, ou carregamento preguiçoso, é uma técnica que carrega recursos não essenciais de uma página apenas quando solicitados, que geralmente ocorre através de interações do usuário com a página, como scroll ou navegações entre páginas. A técnica permite otimizar o [_CRP_ (_Critical Rendering Path_)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) já que reduz o número de recursos necessários para renderizar a página [6].

Ainda sobre _lazy loading_, é possível otimizar uma aplicação utilizando de dois princípios: reduzir tamanho dos arquivos que enviamos ao navegador, pois quanto menores, mais rapidamente serão baixados no processo de renderização. O segundo princípio consiste na redução de código JavaScript enviado. Assim é possível assegurar que o navegador utilizará o código recebido por completo, baixando pequenos pacotes por vez, sem desperdiçar seus recursos compilando e executando código que não será utilizado durante o processo de navegação do usuário [7].

#### Code splitting

Para evitar a necessidade de baixar todos os arquivos que compõem a aplicação, os scripts podem ser divididos em diversos arquivos menores. Assim o usuário faz download apenas do código que representa uma página específica [8].

Para que uma aplicação possa ser entregue em pedaços menores ao cliente, é possível utilizar a técnica de _importação dinâmica_ do Webpack. A técnica consiste na utilização do `import` como uma função, que recebe como argumento o caminho para o módulo que será dividido em um _bundle_ menor, e retorna uma `promise`.

> `import('@/modules/components/MyComponent').then( ... )`

Também é possível aplicar code splitting ao nível de rotas da aplicação, onde cada rota gera um _bundle_ diferente. Isso significa que o usuário recebe apenas os recursos necessários para renderização da página que ele solicitou durante a navegação, sempre recebendo os recursos sob demanda. Por exemplo, caso a página `sobre` não seja indispensável para a navegação do usuário, pode ter a configuração “preguiçosa”:

> `const Page = () => import ('@/modules/pages/sobre.vue')`

Entretanto, é importante ressaltar que nem todas as partes da aplicação podem ser configuradas com _lazy load_, como por exemplo a página inicial. Caso contrário, o usuário pode se deparar com uma página lenta.

#### Tree-shaking

De acordo com Jeremy Wagner, _tree-shaking_ é uma forma de eliminar código não utilizado [9].
Atualmente, para se construir aplicações em javascript é possível utilizar diversas dependências, que são importadas diretamente nos arquivos utilizados, como, por exemplo, a biblioteca `lodash`:

> `import _ from 'lodash';`

Dessa forma, a biblioteca inteira, com todas as suas funções, serão disponibilizadas para uso. Entretanto, nem sempre precisamos de todas as funções que a biblioteca disponibiliza, e por isso, a aplicação agora entrega muito código que [não será utilizado](https://developers.google.com/web/updates/2018/05/lighthouse#unused_javascript), ainda assim sendo baixado pelo usuário ao acessá-la. Para contornar esse problema, o javascript permite importar apenas as funções que serão utilizadas, por exemplo:

> `import sortBy from 'lodash/sortBy';`

<!-- para saber mais: https://umaar.com/dev-tips/242-considerate-javascript/ -->

## Referências

- (1) [smashing magazine: A Guide To Optimizing Images For Mobile](https://www.smashingmagazine.com/2019/10/imagekit-guide-optimizing-images-mobile);
- (2) [web.dev: Choose the correct level of compression](https://web.dev/compress-images/#lossless-versus-lossy-image-compression);
- (3) [web.dev: Use WebP images](https://web.dev/serve-images-webp/);
- (4) [Google Developers: A new image format for the Web](https://developers.google.com/speed/webp);
- (5) [MDN Web Docs: <picture>: The Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture);
- (6) [MDN Web Docs: Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading);
- (7) [Alexander Kondov: Code Splitting with Webpack and React](https://hackernoon.com/lessons-learned-code-splitting-with-webpack-and-react-f012a989113);
- (8) [MDN Web Docs: Code splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting);
- (9) [Jeremy Wagner: Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)
- (10) [smashing magazine: Front-End Performance Checklist 2021](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist)
