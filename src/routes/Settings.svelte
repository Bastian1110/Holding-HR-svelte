<script>
    import NavBar from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte';
    import {replace} from 'svelte-spa-router';

    let user = localStorage.getItem('user');
    $:if(!user){
        replace('/');
    }

</script>

<main>
    <NavBar/>
    <div class="hero min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Settings en desarrollo!</h1>
            </div>
        </div>
    </div>
    <Footer/>
</main>