<script>
  let count = 0;

  function increase() {
    count++;
  }
</script>

<main>
  <div class="center">
    <plus-dialog-toggler connector="dialog-animation">
      Open
    </plus-dialog-toggler>
  </div>
  <plus-dialog portal animation="fade" connector="dialog-animation">
    <plus-dialog-content>
      <plus-dialog-header> Dialog Title </plus-dialog-header>
      <plus-dialog-body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </plus-dialog-body>
      <plus-dialog-footer>
        <button on:click={increase}>
          Clicked {count}
          {count === 1 ? 'time' : 'times'}
        </button>
        <plus-dialog-toggler> Close </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
</main>

<style>
  .center {
    text-align: center;
  }
</style>
