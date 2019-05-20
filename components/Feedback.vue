<template>
  <div class="card">
    <blockquote class="blockquote mb-0 card-body">
      <p>{{text}}</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          <cite title="Source Title">{{name}}</cite>
        </small>
      </footer>
    </blockquote>
  </div>
</template>

<script>
  export default {
    props: ['text', 'name']
  }
</script>
