<script>
    import {onMount} from 'svelte';
    import {getTableList, createTable, deleteTable} from '../lib/tables';

    export let table;
    export let objectCard;

    let objectList = [];    
    onMount(async () =>{
        console.log("Fetching new data ...")
        const res = await getTableList(table);
        // @ts-ignore
        objectList = res;
    });

    let newData = {};
    const createNew = async() =>{
        const res = await createTable(table,newData);
    };

    const deleteNew = async (id) =>{
        const res = await deleteTable(table,id);
    };
</script>

<main>
    <div class="w-[65%]">
        {#each objectList as object}
        <svelte:component this={objectCard} base={object} deleteFunction={deleteNew}/>
        {/each}
    </div>
</main>


<input type="checkbox" id="createNew" class="modal-toggle" />
<label for="createNew" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Nueva Empresa</h3>
    <form>
        <input bind:value={newData.nombre} type="text" placeholder="Nombre" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.rfc} type="text" placeholder="RFC" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.descripcion} type="text" placeholder="Descripcion" class="input input-bordered input-primary w-full max-w-xs py-10 mb-5" />
        <section class="mb-10">
            <button on:click|preventDefault={createNew} class="btn btn-secondary mt-4 float-right block ">Crear</button>
        </section>
    </form>
  </label>
</label>