<script>
  import Router from 'svelte-spa-router';
  import {replace} from 'svelte-spa-router';
  import routes from './routes';

  const conditionsFailed = (event) => {
    console.error('conditionsFailed event', event.detail);
    replace('/');
  }

</script>

<main data-theme="pastel">
  <Router {routes} on:conditionsFailed={conditionsFailed}/>
</main>