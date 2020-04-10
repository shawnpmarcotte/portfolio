---
template: BlogPost
path: /remark-kitchen-sink
date: 2020-06-1T12:12:25.364Z
title: Mission Booked - Find Volunteer Events | Web Application 
thumbnail: /assets/missionbooked.png
---
# xxxxxx.herokuapp.com

- - -
|| What                                                                |
| ------ | ------------------------------------------------------------------------- |
* ## Platform that connects users with the desire to get involved in their community with a volunteer event

- - -

|| Highlights                                                                |
| ------ | ------------------------------------------------------------------------- |
* ## Created and managed our own API/database for the organizations and events rendered upon a query by the user

- - -

|| Technology Used                                                                |
| ------ | ------------------------------------------------------------------------- |
* ## Ruby, Rails, JavaScript, React, React on Rails, React Spring/Select, HTML/CSS, PostgreSQL, Axios

#
- - - 
#
### Code Snippet
```javascript
 handleSearch = () => {
    const queryParams = [
      ["location", this.state.location && this.state.location.value],
      ["category", this.state.category && this.state.category.value]
    ].reduce((acc, [paramName, paramValue]) => {
      if (!paramValue) return acc;
      const param = `${paramName}=${paramValue}`;
      return acc ? `${acc}&${param}` : `?${param}`;
    }, "");

    Turbolinks.visit(`/events${queryParams}`);
  };

  render() {
    return (
      <div>
        <SmartSearch
          placeholder="City"
          value={this.state.location}
          className="search_form_cty"
          onChange={this.setLocation}
          options={[
            { value: "Miami", label: "Miami" },
            { value: "Doral", label: "Doral" },
            { value: "Key Biscayne", label: "Key Biscayne" },
            { value: "Boca Raton", label: "Boca Raton" },
            { value: "Miramar", label: "Miramar" },
            { value: "Homestead", label: "Homestead" }
          ]}
          value={this.state.location}
        />
        <SmartSearch
          placeholder="Type of Event"
          className="search_form"
          options={[
            { value: "Animals", label: "Animals" },
            { value: "Environment", label: "Environment" },
            { value: "Youth", label: "Youth" },
            { value: "People", label: "People" },
            { value: "Rebuild", label: "Rebuild" }
          ]}
          onChange={this.setCategory}
          value={this.state.category}
        />
         <input
          onClick={this.handleSearch}
          type="submit"
          value="Find Events"
          className="search_submit"
        />
      </div>
    );
  }
}

export default Search;
```

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")






<!-- || What                                                                |
| ------ | ------------------------------------------------------------------------- |
|| Platform that connects users with the desire to get involved in their community with a volunteer event |


|| Highlights                                                          |
| ------ | ------------------------------------------------------------------------- |
|| Created and managed our own API/database for the organizations and events rendered upon a query by the user  |

||Technology Used                                                     |
| ------ | ------------------------------------------------------------------------- |
|| Ruby, Rails, JavaScript, React, React on Rails, React Spring/Select, HTML/CSS, PostgreSQL, Axios | -->


<!-- ## h2 Heading 

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading -->

- - -

- - -

- - -

<!-- 
Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

*This is italic text*

*This is italic text*

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

<!-- * Create a list by starting a line with `+`, `-`, or `*` -->
<!-- * Sub-lists are made by indenting 2 spaces:

  * Marker character change forces new list start:

    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
* Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
58. bar -->
<!-- 
## Code

Inline `code`

Indented code

```
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
``` -->

<!-- 
## Links

Technology Used

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see) -->


 <!-- ![Minion](https://octodex.github.com/images/minion.png) -->


<!-- ![Alt text](https://octodex.github.com/images/dojocat.jpg "The Dojocat") -->

<!-- With a reference later in the document defining the URL location: -->

<!-- ## Plugins

The killer feature of `markdown-it` is very effective support of [syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin). -->
<!-- 
### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;) -->

<!-- see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

* 19^th^
* H\~2\~O

### [<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [<mark>](https://github.com/markdown-it/markdown-it-mark)

\==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote) -->

<!-- Footnote 1 link\[^first].

Footnote 2 link\[^second].

Inline footnote^\[Text of inline footnote] definition.

Duplicated footnote reference\[^second].

\[^first]: Footnote **can have markup**

```
and multiple paragraphs.
```

\[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1 with lazy continuation.

Term 2 with *inline markup*

:   Definition 2 -->


<!-- *Compact style:*

Term 1   ~ Definition 1

Term 2   \~ Definition 2a
  \~ Definition 2b -->

<!-- ### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*\[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container) -->

<!-- ::: warning *here be dragons* :::---
**Advertisement :)**

* **[pica](https://nodeca.github.io/pica/demo/)** - high quality and fast image resize in browser.




