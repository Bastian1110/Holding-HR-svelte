<script>
    import axios from 'axios';
    import {replace} from 'svelte-spa-router';

    let error = 0;

    let loginData = {
        email: "",
        password: ""
    };

    const login = async () =>{
        await axios.post('http://localhost:5000/api/v1/login',loginData)
        .then(function (res) {
            console.log(res);
            localStorage.setItem('user',res.data.user);
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('rol',res.data.rol);
            replace('/dashboard');
        })
        .catch(function (err) {
            console.log("Login Failed");
            error = 1;
        });

    };

    let user = localStorage.getItem('user');
    $:if(user){
        replace('/dashboard');
    }
</script>

<main class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
    <header class="max-w-lg mx-auto">
        <h1 class="text-4xl font-bold text-black text-center">Holding-HR</h1>
    </header>
    <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-bold text-2xl">Bienvenido</h3>
            <p class="text-gray-600 pt-2">Ingrese a su cuenta.</p>
        </section>

        <section class="mt-5">
            <form class=""> 
                <input bind:value={loginData.email} type="email" placeholder="email" class="input input-bordered w-full max-w-xs mb-4 block"/>
                <input bind:value={loginData.password} type="password" placeholder="password" class="input input-bordered w-full max-w-xs block"/>
                <section class="mb-10">
                    <button on:click|preventDefault={login} class="btn btn-outline mt-4 float-right block ">Login</button>
                </section>
            </form>
        </section>

        {#if error > 0}
            <div class="alert alert-error shadow-lg block mt-20">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! Porfavor verifica los datos</span>
                </div>
            </div>
        {/if}
    </div>
</main>