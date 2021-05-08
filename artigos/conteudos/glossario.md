---
title: Glossário Front-end
date: 2021-02-27
topic: glossario
tags: ['glossário']
author: Mariana Pícolo
published: true
description: Esta seção contém o glossário para definição de alguns dos termos utilizados ao longo dos artigos apresentados neste guia.
---

# Introdução

Esta seção contém o glossário para definição de alguns dos termos utilizados ao longo dos artigos apresentados neste guia.

## _Bundle_  

Aplicações front-end são compostas de HTML, CSS e JavaScript. Para que a aplicação seja executada nos navegadores, existem ferramentas como Webpack, Rollup, Parcel, entre outras, que são utilizadas para juntar todos esses arquivos de imagem, HTML, CSS e Javascript em apenas um arquivo JavaScript que será recebido e executado pelo navegador. Um _bundle_ é um arquivo minificado que contém todos esses arquivos juntos. [1, 2]   

### _Chunk_  

Um _bundle_ é composto de vários _chunks_. Quando o code splitting é utilizado na aplicação, por exemplo, o Webback gera um _chunk_ separado que é enviado ao navegador apenas quando solicitado. [3]   

## _Polyfill_   

Um _polyfill_ é um pedaço de código usado para fornecer suporte a funcionalidades em navegadores mais antigos que não têm suporte nativo. Por exemplo o CSS Grid no Internet Explorer. [4]    

## Referências

- (1) [Understanding the concept of bundling for beginners](https://medium.com/madhash/understanding-the-concept-of-bundling-for-beginners-f2db1adad724);
- (2) [Bundling JavaScript for Performance: Best Practices](https://calendar.perfplanet.com/2019/bundling-javascript-for-performance-best-practices/);
- (3) [Webpack: Glossary](https://webpack.js.org/glossary/#c);
- (4) [MDN Web Docs Glossary: Definitions of Web-related terms: Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill);
