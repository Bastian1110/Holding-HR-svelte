<script>
    import Manager from '../Manager.svelte';
    import Footer from '../../components/Footer.svelte';
    import {getTableList, createTable, deleteTable} from '../../lib/tables';

    let objectList = [];
    const getData = async () =>{
        const res = await getTableList('puesto');
        // @ts-ignore
        objectList = res;
    };
    $:{getData();}

    let newData = {};
</script>

<main>
    <Manager currentTable="puesto"/>
    <div class="w-[45%]">
        {#each objectList as puesto}
        <div class="card w-[100%] bg-base-100 shadow-xl inline-block m-4">
            <div class="card-body">
                <h2 class="card-title">{puesto.nombre}</h2>
                <p>ID : {puesto.id_puesto}</p>
                <p>Sueldo Base : {puesto.sueldo_base}</p>
                <p>Descripcion : {puesto.descripcion}</p>
                <div class="card-actions justify-end">
                    <button on:click={()=>{deleteTable('puesto',puesto.id_puesto);getData();}} class="btn btn-sm btn-warning">Eliminar</button>
                </div>
            </div>
        </div>
        {/each}
    </div>
    <Footer/>
</main>


<!--Create New Modal Template-->
<input type="checkbox" id="puesto" class="modal-toggle" />
<label for="puesto" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Nuevo Puesto</h3>
    <form>
        <input bind:value={newData.nombre} type="text" placeholder="Nombre" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.sueldo_base} type="text" placeholder="Sueldo Base" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.descripcion} type="text" placeholder="Descripcion" class="input input-bordered input-primary w-full max-w-xs py-10 mb-5" />
        <section class="mb-10">
            <button on:click|preventDefault={() => {createTable('puesto',newData);getData();newData={}}} class="btn btn-secondary mt-4 float-right block ">Crear</button>
        </section>
    </form>
  </label>
</label>