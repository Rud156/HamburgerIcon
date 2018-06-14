### Hamburger Animation

#### Animation:
![Animation](./ScreenShots/Image.gif)


#### Usage:
- Import `index.css` to use the animation
- Create a `Holder <div></div>`
- Put 3 `<div></div>` inside
- Assign class `hamburger-top` to create the Hamburger Icon
- Add class `hamburger-top rotator` to animate it once. Remove class to revert position
- Add class `hamburger-top loading` to animate it infinitely. Remove class to revert position


#### Examples:
##### Display `Hamburger Icon`
```js
  <div style={{ position: "relative" }}>
    <div
      className={`hamburger-top`}
    />
    <div
      className={`hamburger-center`}
    />
    <div
      className={`hamburger-bottom`}
    />
  </div>
```

##### Rotate `Hamburger Icon` Once
```js
  <div style={{ position: "relative" }}>
    <div
      className={`hamburger-top rotator`}
    />
    <div
      className={`hamburger-center rotator`}
    />
    <div
      className={`hamburger-bottom rotator`}
    />
  </div>
```

##### Infinitely Rotate `Hamburger Icon`
```js
  <div style={{ position: "relative" }}>
    <div
      className={`hamburger-top loading`}
    />
    <div
      className={`hamburger-center loading`}
    />
    <div
      className={`hamburger-bottom loading`}
    />
  </div>
```