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
  <plus-grid-item hide-sm xs="3">
    <div class="box">
      xs=3, hide-sm
    </div>
  </plus-grid-item>
  <plus-grid-item hide-md xs="4">
    <div class="box">
      xs=4, hide-md
    </div>
  </plus-grid-item>
  <plus-grid-item hide-lg xs="5">
    <div class="box">
      xs=5, hide-lg
    </div>
  </plus-grid-item>
</plus-grid>
```