## Native HTML Viewer
The Native HTML Viewer widget allows HTML rich text content to be shown in native apps.

## Features
This widget uses [react-native-render-html](https://www.npmjs.com/package/react-native-render-html) to do the actual HTML rendering.

- Display text entered with rich text editors
- Show text with default color depending on dark mode.
- Disable inline styling
- Style tags using Mendix native style classes

### When to use this widget i.s.o. WebView
- Display rich text entered in the browser pages of the app
- Style text depending on dark mode and app theme
- Light weight
- No native browser component used

### When **not** to use this widget
Use a WebView when a full web engine is required to show the content

## Usage
Place the widget in a dataview on a native page and link the rich text attribute.

### Styling
The power of the react-native-render-html used in this widget really lies in the ability to style the content. Quite often, rich text is entered in a browser, in light mode. Many text editors insert color styles to make sure the text is visible. However, that would render the text invisible on a device with a dark theme.

By default, the widget will pass a text color so the text is visible in both light and dark mode. 

That would not work if the content has color styles on the elements.

The library can overrule this and the widget exposes the commonly used properties.

### Ignored styles property
The library can ignore styles set on the HTML content elements, like `style="color: black"`. 

To enable this, set `color` as value for the `Ignored styles property`. Multiple values can be specified, separate them with a comma: `color,backgroundColor`.

Note that the React Native naming convention must be followed. CSS `background-color` must be passed as `backgroundColor`.

### Enable CSS inline style processing
Inline styles in the HTML content can be disabled entirely by setting this property to false.

### Styling the rich text content
The library can style HTML tags. The widget uses this to specify a color on the body tag, to make all text appear in this color.

You can do the same by creating a custom class in your native theme. The class in the example below sets the color of the headers to green.

```
export const greenHeaders = {
    h1: {
        color: "green"
    },
    h2: {
        color: "green"
    },
    h3: {
        color: "green"
    },
    h4: {
        color: "green"
    },
    h5: {
        color: "green"
    }
};
```

This page explains in detail how this works:
[https://meliorence.github.io/react-native-render-html/docs/guides/styling](https://meliorence.github.io/react-native-render-html/docs/guides/styling)
The widget sets the tagsStyles property on the library to pass the styles.

As there is no full browser or CSS engine, CSS selectors are not available.

## Issues, suggestions and feature requests
[link to GitHub issues](https://github.com/Itvisors/mendix-NativeHtmlViewer/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.


