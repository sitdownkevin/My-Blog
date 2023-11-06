---
title: Great Explanation
---

# {{ $frontmatter.title }}

:::info Background
> While browsing the Internet, particularly when encountering difficulties in searching for information on various websites, I find certain explanations truly captivating. - 2023.11.6
:::

[[toc]]

## Front-end

### Declarative vs imperative programming

> https://nextjs.org/learn/foundations/from-javascript-to-react/updating-ui-with-javascript

Which of the following statements is more declarative?

A. "Knit the dough, roll the dough, add tomato sauce, add cheese, add ham, add pineapple, bake at 200 degrees celsius in a stone oven for...”

**B. “A Hawaiian pizza please.”** 

### What is JSX?

JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar *HTML-like* syntax. The nice thing about JSX is that apart from following [three JSX rules](https://beta.reactjs.org/learn/writing-markup-with-jsx#the-rules-of-jsx), you don’t need to learn any new symbols or syntax outside of HTML and JavaScript.

Note that browsers don’t understand JSX out of the box, so you’ll need a JavaScript compiler, such as a [Babel](https://babeljs.io/), to transform your JSX code into regular JavaScript.

### From Development to Production

- Compiling

- Minifying

- Bundling 

  (webpack)

- Code Splitting

### Difference between `--save` and `--save-dev`

When installing a package that will be bundled into your production bundle, you should use `npm install --save`. If you're installing a package for development purposes (e.g. a linter, testing libraries, etc.) then you should use `npm install --save-dev`.
