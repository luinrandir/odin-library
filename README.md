# :books: Library Tracker

## Live Demo

- [Live Demo of Library Tracker](https://luinrandir.github.io/odin-library/)

## Table of Contents

- About
- Tools Used
- Resources

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

#### Code Organization :clipboard:

In previous TOP projects that used JavaScript, I felt that at times I wanted to break the file apart into more manageable, readable parts.

![Filetree for TypeScript files](/imgs/filetree.png)

Being able to have each major section of the project be separated made it feel more organized. However, it did cause myself to be too liberal with file creation. Earlier commits had logic from `library.ts` in its own file, making it unnecessary.

#### Learning Vite :school:

![Create Vite Project GIF](/imgs/vite-tape.gif)

Creating the Vite application was a lot easier than expected. The tool comes with a simple menu system that allows you to create the project and select the tools you wish to use. The [Getting Started](https://vitejs.dev/guide/) guide on the Vite website was also very helpful.

One of the issues that did arise while learning Vite was using specific plugins. [TailwindCSS](#tailwindcss) did have a bit more integration to do. It was not a lot of steps, but it was well documented in the docs for TailwindCSS.

#### Benefit of using a build tool :hammer:

By far the **best** pro for using Vite is having the ability to use multiple tools in the same project and having the build tool take care of it. I know other build tools do the same, but the simplicity of Vite to me made it more welcoming. On top of that, having the build tool provide a `localhost` server for all of your other tools to also use really makes the development experience enjoyable.

Aside from that, the biggest con I drew from this was the hidden complexity of using a build tool. In honest, this project did not need a build tool, and for the most part this could be considered as overkill. Yet, it forced me to really think about how I organized code and logic. I did not want to use the tool to simply create a mountain of files, but rather wanted to practice meaningful coding.

---

### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) was by far the most challenging of the three tools used to create the project. Currently, I feel my foundation with CSS is good, but not solid. Even though, I decided I wanted to try Tailwind since previous in previous TOP assignments I was creating my own utility classes. In fact [Kevin Powell](https://www.youtube.com/@KevinPowell/featured) is a Youtube channel I frequently watch for CSS help and is where I got the idea for creating my own utility classes.

Using Tailwind made the project take longer than I had anticipated. In previous assignments I was already adding multiple classes to HTML elements. However, I was not prepared for Tailwind creating these long chains of classes. Overall, I decided for this project to use the tool for the following reasons:

- General Curiosity
- Utility Classes: TailwindCSS VS Mine
- Viewing CSS from a different Lens

### TypeScript
