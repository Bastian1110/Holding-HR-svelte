<script>
    import NavBar from '../components/NavBar.svelte';
    import {replace} from 'svelte-spa-router';

    let user = localStorage.getItem('user');
    $:if(!user){
        replace('/');
    }
</script>


<main>
    <NavBar/>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Proximamente!</h1>
                <p class="py-6">(En desarrollo)</p>
            </div>
        </div>
    </div>
</main>

<style>
</style>