---
title: Métricas
date: 2021-03-07
topic: diagnostico
tags: ['diagnostico', 'métricas']
author: Mariana Pícolo
published: true
description: Esta seção apresenta as métricas que podem ajudar a entender os problemas de desempenho em aplicações front-end.
---

Notar que uma página web apresenta lentidão em seu carregamento ao ser acessada, ainda não é suficiente para estabelecer um futuro processo de refatoração visando melhora de seu desempenho. Esta seção explicita as ferramentas e métricas disponíveis que permitem diagnosticar desempenho no front-end a fim de ajudar desenvolvedores, designers e times em geral neste processo.

## Introdução

Existem diversos tipos de métricas que podem ajudar a classificar a forma como usuários experimentam desempenho em páginas web: velocidade, capacidade de resposta, capacidade de resposta à interação do usuário, estabilidade visual e suavidade (WALTON, 2019f).

### First Contentful Paint (FCP)

First contentful paint mede desde o início do carregamento de uma página web até o momento em que qualquer parte do conteúdo da página aparece na tela, podendo ser texto, imagens ou elementos Scalable Vector Graphics (SVG) [1].

O FCP é um bom indicador da velocidade percebida, pois mostra quanto tempo os usuários esperam para ver os primeiros sinais de carregamento do site. [2]

Para uma boa experiência de usuário, a FCP deve ocorrer dentro de 1 segundo após o início do carregamento da página [1]

![Fonte: Web Almanac - 2020. [2]](./imagens/diagnostico/performance-fcp-by-geo.png)

É importante ressaltar que os resultados podem sofrer alterações de acordo com algumas variáveis como por exemplo, a Austrália possui altos níveis globais de renda média e uma das mais rápidas redes móveis. Porém está listada nas últimas posições devido à falta de dados no CrUX (O Chrome UX Report (CrUX) é um conjunto de dados públicos de dados reais de experiência do usuário em milhões de sites).

### Largest Contentful Paint (LCP)

A métrica largest contentful paint é uma medida de experiência de carregamento percebida, representando o tempo de renderização da maior imagem ou porção de texto visível para o usuário dentro da janela.[3]

As páginas web geralmente são carregadas em partes, o que pode ocasionar mudança do maior elemento visível da janela. Um elemento só é considerado LCP se seu conteúdo já foi renderizado e está visível para o usuário. Imagens que ainda não estão visíveis não são consideradas. [3]

De acordo com o relatório anual divulgado pelo Web Almanac, [HTTP Archive’s annualstate of the web report](https://almanac.httparchive.org/en/2020/), existe uma correlação entre a velocidade da rede e melhores resultados apresentados pela LCP.

![Fonte: Web Almanac - 2020. [2]](./imagens/diagnostico/performance-lcp-by-connection-type.png)

### First Input Delay (FID)

First input delay mede o tempo da primeira interação do usuário com a página, como clique num link ou um botão, até o tempo em que o navegador está preparado para receber e responder a esse tipo de ação. Para uma boa experiência de usuário, uma página deve possuir a FID menor que 100 milissegundos. [4]

O atraso dos eventos de input geralmente está associado ao tamanho dos arquivos JavaScript enviados ao navegador, que enquanto analisa e executa o código recebido via requisição, o impede de executar os outros processos de renderização da página, pois o código JavaScript pode alterar o DOM. [4]

De acordo com o relatório anual divulgado pelo Web Almanac, existe uma correlação direta entre a velocidade da rede e a FID mais rápida, variando de 73% nas redes 2G a 87% nas redes 4G. Redes mais rápidas ajudam a fazer downloads de scripts mais rapidamente, o que consequentemente reduz o número de tarefas bloqueando a thread principal do navegador. [2]

![Fonte: Web Almanac - 2020. [2]](./imagens/diagnostico/performance-fid-by-connection-type.png)

### Time to Interactive (TTI)

Time to interactive mede o tempo desde o começo do carregamento da página até o momento em que os seus recursos foram carregados e são capazes de responder às interações do usuário, ou seja, o tempo necessário para que a página se torne completamente visível e interativa. [5]

A TTI representa o momento em que a thread principal do JavaScript, que opera sempre em uma única thread, fica ociosa por alguns segundos porque precisa analisar e compilar o código. A ideia é medir a eficiência de um site ou aplicativo ao interagir com ele. Como depende da thread principal, é altamente dependente da quantidade de JavaScript além da velocidade da CPU de um dispositivo. [8]

### Total Blocking Time (TBT)

Total blocking time mede o tempo decorrido entre a FCP e a TTI, indicando que a thread principal do navegador ficou bloqueada a ponto de impedi-lo de responder às interações do usuário. [6]

A thread principal é considerada bloqueada quando a duração de um processo ultrapassa 50 milissegundos. O navegador não pode interromper uma tarefa em progresso. Portanto, se o usuário interagir com a página durante um processo em andamento, não receberá resposta até o processo estar completo. A TBT é a soma da duração de todos os bloqueios que excedem 50 milissegundos ocorridos entre a FCP e a TTI. [6]

### Cumulative Layout Shift (CLS)

Cumulative layout shift mede a pontuação cumulativa de todas as mudanças de layout inesperadas que ocorrem durante a vida útil de uma página web. Observa quanto conteúdo visível mudou na área visível, bem como a distância em que os elementos impactados foram deslocados. [7]

Mudanças de layout ocorrem apenas quando os elementos existentes mudam sua posição inicial. Se um novo elemento é adicionado ao DOM ou um elemento existente muda de tamanho, isso não conta como uma mudança de layout. Para uma boa experiência de usuário, a CLS deve ser menor que 0.1 [7]

## Referências

- [1] https://web.dev/fcp/
- [2] https://almanac.httparchive.org/en/2020/performance
- [3] https://web.dev/lcp
- [4] https://web.dev/fid
- [5] https://web.dev/tti
- [6] https://web.dev/tbt
- [7] https://web.dev/cls
- [8] https://calibreapp.com/blog/time-to-interactive
- [9] https://developers.google.com/web/tools/lighthouse/
