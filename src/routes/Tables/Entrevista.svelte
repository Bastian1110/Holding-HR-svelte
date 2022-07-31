<script>
    import Manager from '../Manager.svelte';
    import Footer from '../../components/Footer.svelte';
    import {getTableList, createTable, updateTable, deleteTable} from '../../lib/tables';

    let objectList = [];
    const getData = async () =>{
        const res = await getTableList('entrevista');
        // @ts-ignore
        objectList = res;
    };
    getData();

    let empleado = {};
    const getEmpleadoById = async (id) =>{
        const res = await getTableList('empleado/' + id);
        // @ts-ignore
        empleado = res;
    };
    

    let focusEntrevista = {};
    $:if(objectList.length){
      focusEntrevista = objectList[0];
    }
    const getDataById = async (id) =>{
        const res = await getTableList('entrevista/'+id);
        // @ts-ignore
        focusEntrevista = res[0];
    };
    getDataById(1);

    let newData = {};

    let search = "";
    const fullSearch = async () =>{
        const res = await getTableList('utils/search/candidato/' + search);
        // @ts-ignore
        objectList = res;
    };
    $:(search && fullSearch());
    $:if(!search){
      getData();
    };
    let updateData = {}
</script>

<main>
    <Manager currentTable='entrevista'/>
    <section>
      <h2 class="font-bold text-2xl p-6 inline-block">Entrevistas</h2>
      <input bind:value={search} type="text" class="ml-10 h-14 w-43 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none inline-block" placeholder="Busqueda por fecha">
    </section>
    <div class="overflow-x-auto w-[60%] p-4 inline-block float-left">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <!-- row  -->
            {#each objectList as entrevista}
            <tr>
              <th><button on:click={()=>getDataById(entrevista.id_entrevista)}>{entrevista.id_entrevista}</button></th>
              <td>{(entrevista.fecha).slice(0,10)}</td>
              <td>{entrevista.hora}</td>
              <td>{entrevista.status}</td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>

    {#if focusEntrevista}
    <div class="card bg-primary text-primary-content w-[30%] mx-10 inline-block">
      <div class="card-body">
        <h2 class="card-title">Entrevista : {focusEntrevista.id_entrevista}</h2>
        <p>Fecha: {focusEntrevista.fecha}</p>
        <p>Hora :{focusEntrevista.hora}</p>
        <p>Entrevistador : {focusEntrevista.entrevistador}</p>
        <p>Status : {focusEntrevista.status}</p>
        <p>Comentarios : {focusEntrevista.comentarios}</p>
        <div class="card-actions justify-end">
          <label for="updateCandidato" class="btn btn-secondary modal-button">Cambiar</label>
          <label for="deleteCandidato" class="btn btn-error modal-button">Eliminar</label>
        </div>
      </div>
    </div>
    {/if}
    <Footer/>
</main>


<!--Create New Modal Template-->
<input type="checkbox" id="entrevista" class="modal-toggle" />
<label for="entrevista" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
        <h3 class="font-bold text-lg mb-6">Nueva Entrevista</h3>
        <input bind:value={newData.fecha} type="text" placeholder="Fecha" onfocus="(this.type='date')" onblur="(this.type='text')" class="input input-bordered input-primary mb-5 inline-block w-[40%]" />
        <input bind:value={newData.hora} type="text" placeholder="Hora" onfocus="(this.type='time')" onblur="(this.type='text')" class="input input-bordered input-primary mb-5 inline-block w-[40%] ml-6" />
        <input bind:value={newData.entrevistador} type="text" placeholder="Entrevistador" class="input input-bordered input-primary mb-5 inline-block w-[50%]" />
        <input bind:value={newData.status} type="text" placeholder="Status" class="input input-bordered input-primary mb-5 inline-block w-[30%] ml-5" />
        <input bind:value={newData.comentarios} type="text" placeholder="Comentarios" class="input input-bordered input-primary mb-5 inline-block w-[85%] py-10" />
        <section class="mb-10">
            <button on:click|preventDefault={()=>{createTable('entrevista',newData);getData();newData = {}}} class="btn btn-secondary mt-4 float-right block ">Crear</button>
        </section>
    </label>
</label>

<!--Update Modal Template-->
{#if focusEntrevista}
<input type="checkbox" id="updateCandidato" class="modal-toggle" />
<label for="updateCandidato" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Actualizar Entrevista</h3>
      <input bind:value={focusEntrevista.fecha} type="text" placeholder="Fecha" onfocus="(this.type='date')" onblur="(this.type='text')" class="input input-bordered input-primary mb-5 inline-block w-[40%]" />
      <input bind:value={focusEntrevista.hora} type="text" placeholder="Hora" onfocus="(this.type='time')" onblur="(this.type='text')" class="input input-bordered input-primary mb-5 inline-block w-[40%] ml-6" />
      <input bind:value={focusEntrevista.entrevistador} type="text" placeholder="Entrevistador" class="input input-bordered input-primary mb-5 inline-block w-[50%]" />
      <input bind:value={focusEntrevista.status} type="text" placeholder="Status" class="input input-bordered input-primary mb-5 inline-block w-[30%] ml-5" />
      <input bind:value={focusEntrevista.comentarios} type="text" placeholder="Comentarios" class="input input-bordered input-primary mb-5 inline-block w-[85%] py-10" />
      <section class="mb-10">
        <button on:click|preventDefault={()=>{
          focusEntrevista.fecha = focusEntrevista.fecha.slice(0,10);
          updateTable('entrevista/' + focusEntrevista.id_entrevista,focusEntrevista);
          getData();
          newData = {};
          }} class="btn btn-secondary mt-4 float-right block ">Crear</button>
      </section>
  </label>
</label>
{/if}


<!--Delete Alert Modal Template-->
<input type="checkbox" id="deleteCandidato" class="modal-toggle" />
<label for="deleteCandidato" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Seguro ?</h3>
    <p class="mt-4">Esta operacion es irreversible</p>
    <button on:click={()=>{deleteTable('entrevista/',focusEntrevista.id_entrevista);getData();getDataById(1);}} class="btn btn-error mt-2 ml-[35%]">Confirmar</button>
  </label>
</label>
