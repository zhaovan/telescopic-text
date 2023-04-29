# telescopic-text

> React component for an implementation of telescopic text

[![NPM](https://img.shields.io/npm/v/telescopic-text.svg)](https://www.npmjs.com/package/telescopic-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Telescopic Text is a lightweight react component, which draws inspiration from [this site](https://www.telescopictext.org/), as a method to investigate playing with words in a sentence structure. This project was built in conjunction with a few other projects as a series of tools for making a more poetic web.

## Install

```bash
npm install --save telescopic-text
```

or

```bash
yarn add telescopic-text
```

## Usage

You need to import both the css file and package like so:

```tsx
import React, { Component } from 'react'

import { TelescopicText } from 'telescopic-text'
import 'telescopic-text/dist/index.css'

class Example extends Component {
  render() {
    return <p>>Here is some <TelescopicText className="heading" fadeInSpeed={2000} color="aquamarine">text.<TelescopicText>more words that should be embellished on.</TelescopicText></TelescopicText></p>
  }
}
```

From here, the `<TelescopicText>` component can be nested infinitely many times, to create the corresponding branching tree.

## Arguments

TelescopicText has three main props:

| Argument    | Type                 | Default | Description                                                                                                         | Example   |
| ----------- | -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------- | --------- |
| color       | `string`             | `aqua`  | A string to change the color of the highlight used for the text                                                     | `black`   |
| className   | `object` or `string` | none    | A style object or string (depending on what you're using)                                                           | `heading` |
| fadeInSpeed | `number`             | 2000    | A number (in ms) that corresponds to the fade in speed of the nested text that appears after clicking on an element | 4000      |

## Future Work

Some kind of tree visualization / drag and drop as a way of interacting in a debugging manner. I think given the visual nature of this, it would benefit from having this.

## License

MIT © [zhaovan](https://github.com/zhaovan)
