// https://www.markdownguide.org/basic-syntax/
const markdown = `
# Headings

## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6


# Paragraphs
I really like using Markdown.

I think I'll use it to format all of my documents from now on.

# Line Breaks
This is the first line.  
And this is the second line.

# Emphasis
I just love **bold text**.
I just love __bold text__.
Love **is** bold

# Italic
Italicized text is the *cat's meow*.Italicized text is the _cat's meow_.A*cat*meow

# Blockquotes
> Dorothy followed her through many of the beautiful rooms in her castle.

# Blockquotes with Multiple Paragraphs
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

# Nested Blockquotes
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

# Lists
## Ordered Lists
1. First item
2. Second item
3. Third item
4. Fourth item

## Unordered Lists
- First item
- Second item
- Third item
- Fourth item

# Code
## Inline code
At the command prompt, type \`nano\`.

## Code blocks
\`\`\`javascript
function greet() {
  console.log("Hello, world!");
}
\`\`\`

## Horizontal Rules
***

a

---

b
_________________

## Links
My favorite search engine is [Duck Duck Go](https://duckduckgo.com)
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [\`code\`](#code).

## Images
![Placeholder image](https://picsum.photos/200)
`

export default markdown
