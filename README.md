Query plugin that automatically embeds the ZOHO viewer for viewing the doc, docx, xls, xlsx, ppt, pptx, pps, odt, ods, odp, sxw, sxc, sxi, wpd, pdf, rtf, txt, html, csv, tsv files it supports linked to by anchor tags.

The ZOHO Viewer is an embeddable browser-based viewer that requires only a URL to a file available online. This, just like Google Docs Viewer, bypasses the need for users to have compatible software on their machines for those file types and displays the document right in the browser.

Both plugins work exactly the same and has the same configuration options. I ended up going back to Google Docs Viewer for the application I was developing because it displays the document zoomed in to fit the width of the viewer by default and has a toolbar to help navigate the document unlike ZOHO viewer. However, because ZOHO Viewer supports a much large range of file types it is still likely to become very handy.

## Usage

1. Add jQuery and the zohoViewer plugin to
```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.zohoviewer.min.js"></script>
</head>
```
2. Set some class name or id to the anchor tag for all URLs to files that you want to be displayed using the ZOHO Viewer. E.g. "embed"
```html
<a href="urltofile.pdf" class="embed">Download file</a>
<a href="urltofile.pdf" id="embedURL">Download file</a>
```

3. Initialize zohoViewer and set it to process the URL with id or all URLs with the class name set in the previous step.
```html
$('a.embed').zohoViewer();
$('#embedURL').zohoViewer();
```
## Customization

The plugin offers two configuration options that set the width and height of the embedded document IFRAME. This can be set when the plugin is initialized.

```html
$('a.embed').zohoViewer({ width: 400, height: 500 });
```

The plugin inserts a the IFRAME for the viewer inside an injected DIV. The DIV tags all carry the class name "zohoviewer", which allow for styling all the zohoViewer instances via CSS. If the anchor tag has the ID attribute defined, then the injected DIV tag is also set an ID attribute in the format of ID_of_Anchor + '-zohoviewer'. See the demo source code for more details.

## Demo
- Check out the live demonstration (http://www.jawish.org/blog/uploads/jquery.zohoviewer_demo.html)

## License
This script is released under the Open Source MIT License, allowing its use in both personal and commercial applications as long as the copyright and license permission notice remains intact.
