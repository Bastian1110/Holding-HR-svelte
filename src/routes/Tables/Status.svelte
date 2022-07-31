<script>
    import Manager from '../Manager.svelte';
    import Footer from '../../components/Footer.svelte';
    import { onMount } from 'svelte';
    import {getTableList, createTable, deleteTable} from '../../lib/tables';

    let objectList = [];
    const getData = async () =>{
        console.log("Fetching new data ...")
        const res = await getTableList('status');
        // @ts-ignore
        objectList = res;
    };
    $:{getData();}

    let newData = {};
</script>

<main>
    <Manager currentTable="status"/>
    <div class="w-[45%]">
        {#each objectList as status}
        <div class="card w-[100%] bg-base-100 shadow-xl inline-block m-4">
            <div class="card-body">
                <h2 class="card-title">{status.nombre}</h2>
                <p>ID : {status.id_status}</p>
                <p>Descripcion : {status.descripcion}</p>
                <div class="card-actions justify-end">
                    <button on:click={()=>{deleteTable('status',status.id_status);getData();}} class="btn btn-sm btn-warning">Eliminar</button>
                </div>
            </div>
        </div>
        {/each}
    </div>
    <Footer/>
</main>


<!--Create New Modal Template-->
<input type="checkbox" id="status" class="modal-toggle" />
<label for="status" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Nuevo Status</h3>
    <form>
        <input bind:value={newData.nombre} type="text" placeholder="Nombre" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.descripcion} type="text" placeholder="Descripcion" class="input input-bordered input-primary w-full max-w-xs py-10 mb-5" />
        <section class="mb-10">
            <button on:click|preventDefault={() => {createTable('status',newData);getData();newData={}}} class="btn btn-secondary mt-4 float-right block ">Crear</button>
        </section>
    </form>
  </label>
</label>