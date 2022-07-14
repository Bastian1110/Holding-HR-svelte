<script>
    import Manager from '../Manager.svelte';
    import {onMount} from 'svelte';
    import {getTableList, createTable, deleteTable} from '../../lib/tables';

    let empresasList = [];
    
    onMount(async () =>{
        const res = await getTableList('empresas');
        // @ts-ignore
        empresasList = res;
    });

    let newData = {};

    const createNew = async() =>{
        const res = await createTable('empresas',newData);
    };

    const deleteNew = async (id) =>{
        const res = await deleteTable('empresas',id);
    };
</script>

<main>
    <Manager/>
    <div class="w-[65%]">
        {#each empresasList as empresa}
        <div class="card w-52 bg-base-100 shadow-xl inline-block m-4">
            <div class="card-body">
                <h2 class="card-title">{empresa.nombre}</h2>
                <p>ID : {empresa.id_empresa}</p>
                <p>RFC : {empresa.rfc}</p>
                <p>Descripcion : {empresa.descripcion}</p>
                <div class="card-actions justify-end">
                    <button on:click={()=>deleteNew(empresa.id_empresa)} class="btn btn-sm btn-warning">Eliminar</button>
                </div>
            </div>
        </div>
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