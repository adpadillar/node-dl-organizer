# node-dl-organizer

This is a really simple Node.js script that organizes my downloads folder based on their extensions and some `GROUPS` I defined on the `index.js` file.

Run it with:

```
node index.js
```

If my groups are like this:

```js
const GROUPS = {
    images: ["webp", "png", "jpeg", "jpg", "svg", "heic"],
    office: ["pptx", "docx", "xlsx", "xls", "doc", "pdf"],
    media: ["mp4", "mp3", "m4a", "mov", "webm"],
    code: ["json", "cpp", "txt", "html", "rmd", "mlapp", "mlx"],
    other: [""]
}
```

They produce a folder structure like the following:

```
Downloads
 |____ images
 |     |_ webp
 |     |_ png
 |     |_ jpg
 |____ office
       |_ pdf 
       |_ pptx 
       |_ docx 
```

You get the gist. Pretty simple. To configure the groups just edit the `GROUPS` object with the extensions you want each group to have. Feel free to add more groups or rename them.
