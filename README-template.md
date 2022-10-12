# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./public/images/Readme%20screenshot.png)


### Links

- Solution URL: [Github](https://github.com/allfigueiredodev/interactive-card.git)
- Live Site URL: [GithubPages](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- Flexbox
- Mobile-first workflow
- Git
- [React](https://reactjs.org/) - JS library
- Github Pages

### What I learned

The pseudo-class :invalid to use input validation to apply a style to another element:

```css
input:invalid[focused="true"] ~ span {
    display: block;
}
```
```html
<span className="input__error--text">{errorMsg}</span>
```
The useContext was the tool that I used to share state and functions with other components in different files, learned how to create the provider, and consume the context where it's needed.

```js
import React, { useState, createContext } from "react";

export const InfoContext = createContext();
```

### Continued development

- managing state
- react hooks
- form validation

### Useful resources

- [How to do input masks[PTBR]](https://www.youtube.com/watch?v=r-8isv_TnVA&ab_channel=queroser.ninja-FernandoDaciuk ) - This helped me create the mask used in the card number.  
- [React form validation](https://www.youtube.com/watch?v=tIdNeoHniEY&t=775s&ab_channel=LamaDev) - This was the approach that I used to implement the form validation.
- [React hook useContext](https://www.youtube.com/watch?v=35lXWvCuM8o&ab_channel=developedbyed) - Great video explaing the useContext hook.

## Author

- Frontend Mentor - [@allfigueiredodev](https://www.frontendmentor.io/profile/allfigueiredodev)

## Acknowledgments

Shout out to those people creating content to help others make their way into development.

- Frontend Mentor - [Frontend Mentor](https://www.frontendmentor.io/home)
- Fernando Daciuk - [queroser.ninja - Fernando Daciuk](https://www.youtube.com/c/queroserninja/featured)
- Lama Dev - [Lama Dev](https://www.youtube.com/c/LamaDev)
- Simo Edwin - [developedbyed](https://www.youtube.com/c/DevEd/featured)

