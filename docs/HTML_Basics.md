# HTML Basics 

HTML is the fundamental skelaton for making web pages :3

## Headings

headings are represented with `<h1>` all the way to `<h6>`. For example:

```html
<h1>one heading :3</h1>
<h2>Another Heading </h2>
<h3>this is also another heading</h3>
<h6>the other heading :3</h6>
```

## Paragraphs

Paragraphs are used to write sentences for your web page using `<p>`. Some examples are:

```html
<p>this is a paragraph. Also, ice cream truck music is cool :3</p>
```

Images
Use `<img>` to define the image and src to insert the image.

Add the alt or alternative attribute to your image so that when the image can't load, a description pops up instead.

Example:

```html
<img src="images/Acoolimage.png" alt="A very cool image" />
```

If you want to adjust the size of the size image, use the attributes `width` and `height`.

Example:

```html
<img src="images/Acoolimage.png" alt="A very cool image" width="100" height="100" />
```

Links
Use `<a>` tag to define the link and the href attribute to insert the link.

Example:

```html
<a href="www.conesarecool.com">This is a link</a>
```

Lists

There are 2 types of lists. The unordered list, `<ul>` and the ordered list, `<ol>`.

The `<ol>` tag lists in numerical order and the `<ul>` tag just lists the items as bullet points

To start a list, use the `<li>` tag.

Example:

```html
<!-- unordered list -->

<ul>
  <li>This</li>
  <li>Is a</li>
  <li>List</li>
</ul>

<!-- ordered list -->

<ol>
    <li>this</li>
    <li>is also</li>
    <li>a list</li>
</ol>
```