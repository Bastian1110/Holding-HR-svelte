<script>
    import NavBar from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte'
    import {replace} from 'svelte-spa-router';
    import {getTableList, createTable, updateTable, deleteTable} from '../lib/tables';

    let user = localStorage.getItem('user');
    $:if(!user){
        replace('/');
    }

    let objectList = [];
    const getData = async () =>{
        const res = await getTableList('usuario');
        // @ts-ignore
        objectList = res;
    };
    getData();
    let newData = {};

    let deleteId;
    const deleteUsuario = () =>{deleteTable('usuario',deleteId)}
</script>

<main>
    <NavBar/>
    <div class="container py-10 px-10">
        <div class="overflow-x-auto w-[55%] p-4 inline-block float-left">
            <table class="table w-full">
            <!-- head -->
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row  -->
                    {#each objectList as usuario}
                    <tr>
                    <td>{usuario.id_usuario}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    <div class="container ">
        <label for="nuevoUsuario" class="btn btn-accent modal-button ml-[20%] mb-8">Crear Usuario</label>
        <label for="viejoUsuario" class="btn btn-error modal-button ml-[20%]">Eliminar Usuario</label>
    </div>
    <Footer/>
</main>

<!--Create New Modal Template-->
<input type="checkbox" id="nuevoUsuario" class="modal-toggle" />
<label for="nuevoUsuario" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Nuevo Usuario</h3>
    <form>
        <input bind:value={newData.nombre} type="text" placeholder="Username" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.email} type="email" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.password} type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <select bind:value={newData.rol} class="select select-primary w-[30%] ">
            <option disabled selected>Rol</option>
            <option>usuario</option>
            <option>manager</option>
            <option>admin</option>
          </select>
        <section class="mb-10">
            <button on:click|preventDefault={() => {createTable('register',newData);getData();newData={}}} class="btn btn-secondary mt-4 float-right block ">Crear</button>
        </section>
    </form>
  </label>
</label>

<!--Dlete Modal Template-->
<input type="checkbox" id="viejoUsuario" class="modal-toggle" />
<label for="viejoUsuario" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Seguro?</h3>
    <form>
        <p class="mt-4">Ingresa el ID del Usuario que quieres borrar</p>
        <input bind:value={deleteId} type="text" placeholder="ID" class="input input-bordered input-primary w-full max-w-xs my-5" />
        <section class="mb-10">
            <button on:click|preventDefault={() => {deleteUsuario();getData();newData={}}} class="btn btn-warning mt-4 float-right block ">Eliminar</button>
        </section>
    </form>
  </label>
</label>