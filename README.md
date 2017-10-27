# svelte-transitions-scale

Scale transition plugin for [Svelte](https://svelte.technology).

![scale](https://user-images.githubusercontent.com/198751/32108892-f5cfd68a-bb2a-11e7-9c34-8a8823b30092.gif)

## Usage

Recommended usage is via [svelte-transitions](https://github.com/ekhaled/svelte-transitions), but you can use this module directly if you prefer. Note that it assumes an ES module or CommonJS environment.

Install with npm or yarn:

```bash
npm install --save svelte-transitions-scale
```

Then add the plugin to your Svelte component's exported definition:

```html
<label>
  <input type='checkbox' bind:checked='visible'> visible
</label>

{{#if visible}}
  <!-- use `in`, `out`, or `transition` (bidirectional) -->
  <div transition:scale>hello!</div>
{{/if}}

<script>
  import scale from 'svelte-transitions-scale';

  export default {
    transitions: { scale }
  };
</script>
```


## Parameters

`from` and `to` are the start and end scaling factors the node will scale in from (and out to). `from` defaults to `0.5` and `to` defaults to `1`:

```html
<div in:fly='{from: 0.3}'>
  scales up from 0.3
</div>
```

If `from` is higher than `to` it will scale down to `to` accordingly.

There is also support for elements that are already scaled. Just specify the `to` value to the final scaling factor.

You can also specify `delay` and `duration` parameters, which default to `0` and `400` respectively, and a custom `easing` function (which should live on your `helpers`):

```html
<div in:fade='{duration: 1000, easing: quintInOut}'>
  scales up slowly
</div>

<script>
  import scale from 'svelte-transitions-scale';
  import { quintInOut } from 'eases-jsnext';

  export default {
    helpers: { quintInOut },
    transitions: { scale }
  };
</script>
```


## License

[MIT](LICENSE)
