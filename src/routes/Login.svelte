<script>
    import axios from 'axios';

    let loginData = {
        email: "",
        password: ""
    };

    const login = async () =>{
        await axios.post('http://localhost:5000/api/v1/login',loginData)
        .then(function (res) {
            console.log(res);
            localStorage.setItem('token',res.data.token);
        })
        .catch(function (err) {
            console.log(err);
        });

    };
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

    </div>

</main>