Below is an example iframe you can use to embed the site. Replace the src with your deployed URL if different.

Simple embed:

```html
<iframe src="https://totallyschoolapproved.com"
	style="width:100%;height:600px;border:0;"
	sandbox="allow-scripts allow-same-origin allow-popups"
	allow="fullscreen; autoplay; clipboard-write">
</iframe>
```

Responsive embed:

```html
<div style="position:relative;padding-top:56.25%;">
  <iframe src="https://totallyschoolapproved.com"
	  style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
	  sandbox="allow-scripts allow-same-origin allow-popups"
	  allow="fullscreen; autoplay; clipboard-write"></iframe>
</div>
```

Gist reference:

<script src="https://gist.github.com/reedicleiscool/bc6bddfc457775a9ce0ad6ec59d1272e.js"></script>
