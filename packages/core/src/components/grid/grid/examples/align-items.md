```css [style]
plus-grid {
  background-color: #fafafa;
  height: 140px;
}
.box {
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid align-items="center">
  <plus-grid-item xs="6">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="grow">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
</plus-grid>
```