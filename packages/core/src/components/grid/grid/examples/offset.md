```css [style]
.box {
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid>
  <plus-grid-item xs="3">
    <div class="box">
      xs=3
    </div>
  </plus-grid-item>
  <plus-grid-item offset-xs="3" xs="3">
    <div class="box">
      offset-xs="3", xs=3
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      xs=3
    </div>
  </plus-grid-item>
</plus-grid>
```