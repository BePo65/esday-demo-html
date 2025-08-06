# esday-demo-html
This is a minimal demo for how to use the [esday](https://github.com/g-mero/esday) library in a plain html page. It simply displays the current date and a date in 2 days.

The output of using this repository can be found on [github pages](https://bepo65.github.io/esday-demo-html/).

The html file uses a `<base>` tag, required by github pages (web pages in github pages sit in a subdirectory of the site).

The html file also uses a `<script  type="importmap">` tag to enable better looking imports in the javascript files - e.g.

```import { esday } from 'esday';```

instead of

```import { esday } from 'https://unpkg.com/esday@0.4.1/index.js';```
