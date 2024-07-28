<h1 id="commonlyusedcomponents">Commonly Used Components</h1>

<h4 style="color: gray;">Which components will you need while developing?</h4>

React components are designed to be reused, especially general ones. On this page, you will find the different popular components we have so far.

<h3 id="icons">Icons</h3>
When using an SVG icon, use this component for simplicity purposes:
```
import Icon from "@/components/Icon";
<Icon props/>
```

If you want to add a new icon or a prop option, you will need to modify this component to include it in the list. Don't forget that all icons files are located in: _/public/icons_.

<h3 id="basepath">Base Path</h3>

When deploying the page using GitHub Pages, the URL has a base URL of _/DevEngageAnalytics_ due to the repository's name.

The value is "/" or "/DevAnalytic/".

You can import this constant in any file:
`import { BASE_PATH } from "@/lib/composables/production";`

Here's how to use it when directing the user:
`${BASE_PATH}docs/introduction`

_You don't need to do this with the "Link" component from NextJS._
