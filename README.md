# :books: Library Tracker

## Live Demo

- [Live Demo of Library Tracker](https://luinrandir.github.io/odin-library/)

## Before you read

This `README` serves not only as a quick overview of my app, but as well as a personal journal/blog on my learning experience with this project. It is a way for myself to reflect on the project and the tools I have used. It is also my hope that I could come back one day and re-read what I have written to help reflect on my web development learning journey. I also hope that if you are on a similar journey, that this `README` provides you with a fresh perspective on some of these tools.

## Table of Contents

- [About](#about)
- [Built With](#built-with)
- [Conclusion](#conclusion)
- [Resources](#resources)

## About

Library Tracker is a simple web app to help keep track of your reading list. The app was written to accomplish a project from [The Odin Project](https://www.theodinproject.com/) (TOP). The application uses `localstorage` to keep track of a user's preferred theme and their reading list. At the moment there is no plan for future implementation of a database and OAuth features.

## Built With

Originally the project can be complete with HTML, CSS, and JavasScript only. However, as a challenge the following tools were used alongside HTML to complete this project:

- [Vite](#vite)
- [TailwindCSS](#tailwindcss)
- [TypeScript](#typescript)

Although the above were not necessary to complete the project, I personally wanted to challenge myself to use tools that could be used in the industry. During my time working on this project I discovered pros and cons to each tool. Some of the discoveries helped me think of their base counterparts in a different perspective. Some of the tools I used would have been introduced right after this project. Yet, personally, I have always felt that I have a rather non-linear style of learning at times. Usually, I enjoy jumping around the path while following it, thus making it more engaging for myself. I hope that those discoveries and new perspectives help strengthen and support my learning of HTML, CSS, and JavaScript as I go through TOP.

---

### Vite

[Vite](https://vitejs.dev/) is a build tool that allows you bundle all of your code into static assets, just like Webpack. Being relatively new, I have been hearing it a lot as I consume web development content on Youtube, Reddit, and other social media outlets. The biggest advertisement I have seen for Vite is generating faster React apps than using `create-react-app`. Naturally I got curious about the tool and saw the versatility that the tool provided. I decided for this project to use the tool for the following reasons:

- Code Organization
- Introduce myself to a simple build tool
- Use other tools that benefit a using a build tool

#### :clipboard: Code Organization

In previous TOP projects that used JavaScript, I felt that at times I wanted to break the file apart into more manageable, readable parts.

![Filetree for TypeScript files](/imgs/filetree.png)

Being able to have each major section of the project be separated made it feel more organized. However, it did cause myself to be too liberal with file creation. Earlier commits had logic from `library.ts` in its own file, making it unnecessary.

#### :school: Learning Vite

![Create Vite Project GIF](/imgs/vite-tape.gif)

Creating the Vite application was a lot easier than expected. The tool comes with a simple menu system that allows you to create the project and select the tools you wish to use. The [Getting Started](https://vitejs.dev/guide/) guide on the Vite website was also very helpful.

One of the issues that did arise while learning Vite was using specific plugins. [TailwindCSS](#tailwindcss) did have a bit more integration to do. It was not a lot of steps, but it was well documented in the docs for TailwindCSS.

#### :hammer: Benefit of using a build tool

By far the **best** pro for using Vite is having the ability to use multiple tools in the same project and having the build tool take care of it. I know other build tools do the same, but the simplicity of Vite to me made it more welcoming. On top of that, having the build tool provide a `localhost` server for all of your other tools to also use really makes the development experience enjoyable.

Aside from that, the biggest con I drew from this was the hidden complexity of using a build tool. In honest, this project did not need a build tool, and for the most part this could be considered as overkill. Yet, it forced me to really think about how I organized code and logic. I did not want to use the tool to simply create a mountain of files, but rather wanted to practice meaningful coding.

---

### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) was by far the most challenging of the three tools used to create the project. Currently, I feel my foundation with CSS is good, but not solid. Even though, I decided I wanted to try Tailwind since previous in previous TOP assignments I was creating my own utility classes. In fact [Kevin Powell](https://www.youtube.com/@KevinPowell/featured) is a Youtube channel I frequently watch for CSS help and is where I got the idea for creating my own utility classes.

Using Tailwind made the project take longer than I had anticipated. In previous assignments I was already adding multiple classes to HTML elements. However, I was not prepared for Tailwind creating these long chains of classes. Overall, I decided for this project to use the tool for the following reasons:

- General Curiosity
- Utility Classes: TailwindCSS VS Mine
- Viewing CSS from a different Lens

#### :goggles: General Curiosity

Simply put, I was curious about TailwindCSS and how to use it. That is the base drive that motivated me to use the tool in the first place. I hope to continue to have this drive as I continue during my web development journey. Tools should be tried out and explored so your personal toolbox can grow. With using TailwindCSS in this project it has given me new questions about the utility tool. For example, the code below is from a button:

```html
<button
  id="about-btn"
  class="rounded-full border-2 border-indigo-400 px-3 py-1 font-semibold hover:bg-indigo-400 hover:text-white dark:border-indigo-500 dark:bg-indigo-500 dark:text-white dark:hover:border-indigo-300 dark:hover:bg-indigo-300"
>
  About
</button>
```

Although the code is long, it got me to think if there was a way to combine those different classes into themes. After digging around in the documentation, I came across a feature that the tool has:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply rounded-full border-2 border-indigo-400 px-3 py-1 font-semibold hover:bg-indigo-400 hover:text-white dark:border-indigo-500 dark:bg-indigo-500 dark:text-white dark:hover:border-indigo-300 dark:hover:bg-indigo-300;
  }
}
```

Which then could turn the HTML code into this:

```html
<button id="about-btn" class="btn-primary">About</button>
```

Although I felt that it was a great feature to have access to, it felt as if it defeated the purpose. However, in the [Viewing CSS from a different lens](#viewing-css-from-a-different-lens) section, I reflect on that idea even more. For the most part, dealing with this new tool just peaked my curiosity even more. Overall, I was pleased with using TailwindCSS and hope to use it again in the future.

#### Utility Classes: TailwindCSS VS Mine

In prior TOP projects I was doing I started to create my own utility classes, like so:

```css
.grid {
  display: grid;
}
.grid-span-2 {
  grid-column: span 2;
}
```

In doing so it forced me to focus on my CSS after I created my base HTML file. At first I felt pretty happy with this approach since CSS was a weak point for myself in the earlier lessons of TOP. However, towards the end of the **Foundations** course and the **Advanced HTML and CSS** course, I started to notice that my approach did not fully help. At times, it felt limited and incomplete. There were many times I felt that I created enough utility classes or used enough custom variables only to realize that I needed more. Or the opposite would occur, which I created too many utilities or custom variables. For example, from a previous project ([dashboard](https://github.com/luinrandir/odin-dashboard)):

```css
/* Custom Properties */
:root {
  /* colors */
  --clr-primary: hsl(199, 89%, 48%);
  --clr-primary-hover: hsl(199, 89%, 28%);
  --clr-secondary: hsl(213, 27%, 84%);

  /* fonts */
  --ff-primary: "Roboto", sans-serif;
  --fc-primary: hsl(0, 0%, 9%);
  --fc-secondary: hsl(0, 0%, 100%);

  --fw-300: 300;
  --fw-400: 400;
  --fw-500: 500;
  --fw-700: 700;

  --fs-12: 0.75rem;
  --fs-18: 1.125rem;
  --fs-16: 1rem;
  --fs-24: 1.5rem;
  --fs-32: 2rem;
}
```

Although the `colors` and `fonts` make complete sense for me to have (for easier changing in the future), the font weights `fw` and font sizes `fs` felt like they could have been utility classes. Let alone, a few of the custom properties were hardly used.

This is where I really enjoyed the use of TailwindCSS. The heavy thinking was done for me and I did not need to worry about creating all of these classes or thinking which classes I would need. It was all there provided for me. The naming convention for some of the TailwindCSS classes were awkward at first, yet started to make a lot of sense in the long run. My biggest enjoyment was having all of these classes that I did not use simply be purged on build. However, this started to make me view creating my own utility classes from a different perspective. In fact, in a personal project, I have started to make my own CSS Utility Class Framework using SASS. The experience so far has really gotten me to look at CSS from a different viewpoint.

With that being said, in future projects, I feel that the power of TailwindCSS really shines when using tools such as React, Svelte, Vue, Astro, and others that provide the ability to create components. Even though it was great to use in this project, it did feel a bit too much. In reality, I should have been able to just write my own CSS, yet after using TailwindCSS I feel that I am going to approach that differently. With writing my own utility classes that feel more universal instead of dialed in.

#### Viewing CSS from a different Lens

The creators of TailwindCSS really nailed down aspects of web design, at least in my opinion. For me, CSS was one of the most difficult things to understand, especially when I attempted web development back in high school, when `floats` ruled supreme and the buzz word I saw everywhere was `AJAX`. I always felt that it was something I could not wrap my mind around, let alone be good at design. During my journey so far through TOP, the courses have really helped me get over my fear of CSS. Of course, amazing Youtube channels as well. I cannot stress enough about Kevin Powell's channel, it really is a great learning tool!

Yet, it was not until I tried to use TailwindCSS that it really started to make some things just make sense. Their overall sizing scales, how they classify different shades for colors, and even how they approach media query breakpoints just made sense. I am not sure if it is because this organization has spent the amount of time fine tuning this tool or rather they just explained it well. At least to me, it felt explained well. The documentation as well was a huge help in learning the tool.

I decided to try TailwindCSS instead of [Bootstrap](https://getbootstrap.com/) because of the fact that TailwindCSS is a utility based first tool. Dealing with things such as:

- padding
- margin
- width
- height

had always felt slightly confusing to me. Yet seeing how this tool approaches some of these common CSS items really felt as if things were starting to slot into place. It is awkward, but the _box model_ started to make even more sense to me while using TailwindCSS. I am hoping that the more I use this tool, the more I could see CSS from a different perspective and apply some of those thoughts in my own CSS writing. Overall, I am glad I decided to use this tool. With more practice, I think I will be able to experience just how powerful this tool can be to create quick web pages. It has also made me eager to try Bootstrap. But maybe for now, I will stick with TailwindCSS.

---

### TypeScript

[TypeScript](https://www.typescriptlang.org/) was something I was very eager to start trying. I feel comfortable with JavaScript my previous computer science student history. I am no stranger to C++ or Java and for a while have been trying to get into Rust. Because of that, basic programming fundamentals such as:

- `if...else...` statements
- `for` `while` and even `do...while` loops
- `switch` statements
- `OOP` concepts such as: `classes` `inheritance`

are things that I am already familiar with. However, with JavaScript, I know with certain that I still need practice with the many functions that it has to offer, with the `map` function being one of my favorites. The thing that drove me insane, however, was the fact that JavaScript is a dynamically typed language. I have played around with Python, which does have dynamic typing as well, but with JavaScript it just felt like the Wild West. I do have previous knowledge of JavaScript, but never enjoyed it due to missing typed variables. At this point I learn about TypeScript, a superset of JavaScript. Overall, I decided for this project to use the tool for the following reasons:

- Introduce Myself to TypeScript
- Benefit from typed variables

#### :wave: Introduce Myself to TypeScript

I cannot lie, TypeScript scared me at first. JavaScript still scares me when I look at more complex projects. Being away from programming for a while made a lot of it feel foreign to look at. Yet, with TypeScript, it just seemed like a completely different language. I was shocked to finally read into it and learn that it is a superset of JavaScript. However, I felt that it was time to finally introduce myself to the language. Because of the fact that it is a superset of JavaScript, I felt comfortable doing this since for the most part I will still be writing JavaScript. Yet, for most of the rest of the projects for TOP, depending on the project I would default to JavaScript.

The biggest reason for wanting to use TypeScript though is for typed variables. That is it :100: percent. I missed having that strict typing, knowing that each of my variables were dedicated to a specific type. It was also frustrating when debugging JavaScript at times. I feel that I am decent at making sure certain variables are provided the correct types, but we all make mistakes. Having something to back me up while coding is nice.

#### :heavy_check_mark: Benefit from typed variables

```ts
addBook(title: string, author: string, genre: string, read: boolean) {
    this._list.push({ title, author, genre, read });
    this.addRow(
      this._table.getElementsByTagName("tbody")[0],
      {
        title,
        author,
        genre,
        read,
      },
      0
    );
    this.updateDatabase();
}
```

The above code is from my `library` class and is something I really missed when coding in JavaScript. If I were to write the JavaScript equivalent it would look like the following below.

```js
addBook(title, author, genre, read) {
    this._list.push({ title, author, genre, read });
    this.addRow(
        this._table.getElementsByTagName("tbody")[0],
        {
        title,
        author,
        genre,
        read,
        },
        0
    );
    this.updateDatabase();
}
```

The fact that only the types are missing make it seem a bit silly, but for me while working on the code, having those types feel so much more comforting. If I were to just write the function definition in TypeScript:

```ts
addBook(title: string, author: string, genre: string, read: boolean)
```

then the function definition gives me so much more information. I know that this function needs the first three inputs to be `strings` and the last to be a `boolean`. Of course, if I am writing this code then I should be recalling this information anyways. However, as the projects for TOP get more complex, jumping around to different code might start to get tedious. Let alone, if I had to take a break from the project due to work or life, having this information there helps out tremendously when I re-start working on the project.

I always personally felt that code should be readable. Meaning, that if you read the code, for the most part you should have either a decent understanding of what it does or a complete understanding. With TypeScript I feel that I can accomplish that. It feels as if it helps me write more readable and understandable code. For example, in this project I created my own `book` type. Therefore, I could re-write the code above to utilize that.

```ts
type Book = {
  title: string;
  author: string;
  genre: string;
  read: boolean;
};

addBook(newBook: Book)
```

Now, at least for me, when I read the code I know I am creating a `Book`, which is what the class overall does. And if I were to look at my typing for `Book`, I would then know what I need to satisfy the creation of a new `Book` object.

The biggest benefit I found with this is when I used typing for `DOM` elements. It was great getting intellisense to help with functions and attributes associated with that element. However, it did lead to one of the biggest issues I had with TypeScript which is: **_it is annoyingly strict_**. I both enjoyed and loathed this. On one hand I really enjoyed how it would catch each little error. It would force me to check if an `HTML` element was `null` as shown below.

```ts
export function toggleBurger(
  hamburger: HTMLDivElement | null,
  menu: HTMLElement | null
) {
  if (hamburger === null || menu === null) return;
  hamburger.addEventListener("click", () => menu.classList.toggle("collapse"));
}
```

Yet at the same time, I felt that it was a bit too much. I must admit I am not sure if the above code was the best way of going through that situation. Yet, it would quickly spit back errors even though I knew the `HTML` element existed. It grew frustrating, but I appreciated the feedback. It did prove how new I was to TypeScript, but overall did not ruin my enjoyment of using it for the first time in a project.

## Conclusion

If you made it this far then thank you for reading! :+1:

In conclusion I am glad I decided to walk off the beating path and use these tools. It was a great leaning experience and a fun one as well. I learned **a lot** from taking my time with these tool's documentation. I got to see many pros and cons of using these tools and as well experience many pros and cons as well. I hope this giant post helps **you** if you are also going on your web development journey!

## Resources

Here are some great resources I used for my project.

- [Vite](https://vitejs.dev/)
  - Docs are great!
- [TailwindCSS](https://tailwindcss.com/)
  - Docs are great!
- [TypeScript](https://www.typescriptlang.org/)
  - Docs are great!
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - Great plugin from TailwindCSS that helps makes styling forms easier!
- [TailwindLabs](https://www.youtube.com/@TailwindLabs)
  - Great tutorials from the developers of TailwindCSS!
- [Devicon](https://devicon.dev/)
  - Where I got the awesome Dev Icons used in the project.
- [Flaticon](https://www.flaticon.com/)
  - Where I got the book icons.
