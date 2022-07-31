<script>
    import Manager from '../Manager.svelte';
    import Footer from '../../components/Footer.svelte';
    import {getTableList, createTable, updateTable, deleteTable} from '../../lib/tables';

    let objectList = [];
    const getData = async () =>{
        const res = await getTableList('candidato');
        // @ts-ignore
        objectList = res;
    };
    getData();

    let empresas = [];
    const getEmpresas = async () =>{
        const res = await getTableList('empresa');
        // @ts-ignore
        empresas = res;
    };
    $:{getEmpresas();}
    
    let puestos = [];
    const getPuestos = async () =>{
        const res = await getTableList('puesto');
        // @ts-ignore
        puestos = res;
    };
    $:{getPuestos();}

    let status = [];
    const getStatus = async () =>{
        const res = await getTableList('status');
        // @ts-ignore
        status = res;
    };
    $:{getStatus();}

    let origenes = [];
    const getOrigen = async () =>{
        const res = await getTableList('origen');
        // @ts-ignore
        origenes = res;
    };
    $:{getOrigen();}

    let focusCandidato = {};
    $:if(objectList.length){
      focusCandidato = objectList[0];
    }
    const getDataById = async (id) =>{
        const res = await getTableList('candidato/'+id);
        // @ts-ignore
        focusCandidato = res[0];
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
    <Manager currentTable='candidato'/>
    <section>
      <h2 class="font-bold text-2xl p-6 inline-block">Candidatos</h2>
      <input bind:value={search} type="text" class="ml-10 h-14 w-43 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none inline-block" placeholder="Busqueda por nombre">
    </section>
    <div class="overflow-x-auto w-[55%] p-4 inline-block float-left">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Origen</th>
              <th>Ciudad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <!-- row  -->
            {#each objectList as candidato}
            <tr>
              <th><button on:click={()=>getDataById(candidato.id_candidato)}>{candidato.id_candidato}</button></th>
              <td>{candidato.nombre}</td>
              <td>{candidato.apellido_p}</td>
              <td>{candidato.origen}</td>
              <td>{candidato.ciudad}</td>
              <td>{candidato.estado}</td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>

    {#if focusCandidato}
    <div class="card bg-primary text-primary-content w-[36%] mx-10 inline-block">
      <div class="card-body">
        <h2 class="card-title">{focusCandidato.nombre + " " + focusCandidato.apellido_p}</h2>
        <p>ID: {focusCandidato.id_candidato}</p>
        <p>Segundo Nombre: {focusCandidato.segundo_nombre} </p>
        <p>Apellido Paterno: {focusCandidato.apellido_p}</p>
        <p>Apellido Materno: {focusCandidato.apellido_m} </p>
        <p>Llegada CV: {focusCandidato.llegada_cv}</p>
        <p>Encargado : {focusCandidato.encargado}</p>
        <p>Ciudad: {focusCandidato.ciudad} </p>
        <p>Estado: {focusCandidato.estado} </p>
        <p>Empresa: {focusCandidato.empresa} </p>
        <p>Puesto: {focusCandidato.puesto} </p>
        <p>Proyecto: {focusCandidato.proyecto} </p>
        <p>Origen: {focusCandidato.origen} </p>
        <p>Status: {focusCandidato.status} </p>
        <p>Sexo: {focusCandidato.sexo} </p>
        <p>Comentarios: {focusCandidato.comentarios} </p>
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
<input type="checkbox" id="candidato" class="modal-toggle" />
<label for="candidato" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Nuevo Candidato</h3>
    <form>
        <input bind:value={newData.nombre} type="text" placeholder="Nombre" class="input input-bordered input-primary mb-5 inline-block w-[50%]" />
        <input bind:value={newData.segundo_nombre} type="text" placeholder="Segundo Nombre" class="input input-bordered input-primary mb-5 inline-block w-[40%]" />
        <input bind:value={newData.apellido_p} type="text" placeholder="Apellido Paterno" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={newData.apellido_m} type="text" placeholder="Apellido Materno" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={newData.llegada_cv} type="text" placeholder="Llegada CV" onfocus="(this.type='date')" onblur="(this.type='text')" class="input input-bordered input-primary mb-5 w-[25%] inline-block" />
        <select bind:value={newData.empresa} class="select select-primary w-[30%] ml-2">
            <option disabled selected>Empresa</option>
            {#each empresas as empresa}
            <option value={empresa.id_empresa}>{empresa.nombre}</option>
            {/each}
        </select>
        <select bind:value={newData.puesto} class="select select-primary w-[30%] ml-4">
            <option disabled selected>Puesto</option>
            {#each puestos as puesto}
            <option value={puesto.id_puesto}>{puesto.nombre}</option>
            {/each}
        </select>
        <input bind:value={newData.ciudad} type="text" placeholder="Ciudad" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={newData.estado} type="text" placeholder="Estado" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={newData.proyecto} type="text" placeholder="Proyecto" class="input input-bordered input-primary mb-5 inline-block" />
        <select bind:value={newData.origen} class="select select-primary w-[30%] ml-4">
          <option disabled selected>Origen</option>
          {#each origenes as origen}
          <option value={origen.id_origen}>{origen.nombre}</option>
          {/each}
        </select>
        <select bind:value={newData.status} class="select select-primary w-[30%]">
          <option disabled selected>Status</option>
          {#each status as stat}
            <option value={stat.id_status}>{stat.nombre}</option>
          {/each}
        </select>
        <select bind:value={newData.sexo} class="select select-primary w-[30%] ml-4 my-4">
          <option disabled selected>Sexo</option>
          <option>H</option>
          <option>M</option>
        </select>
        <input bind:value={newData.comentarios} type="text" placeholder="Comentarios" class="input input-bordered input-primary w-full max-w-xs py-10 mb-5" />
        <section class="mb-10">
            <button on:click|preventDefault={()=>{createTable('candidato',newData);getData();newData = {}}} class="btn btn-secondary mt-4 float-right block ">Crear</button>
        </section>
    </form>
  </label>
</label>

<!--Update Modal Template-->
{#if focusCandidato}
<input type="checkbox" id="updateCandidato" class="modal-toggle" />
<label for="updateCandidato" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Actualizar Candidato</h3>
    <form>
        <input bind:value={focusCandidato.nombre} type="text" placeholder="Nombre" class="input input-bordered input-primary mb-5 inline-block w-[50%]" />
        <input bind:value={focusCandidato.segundo_nombre} type="text" placeholder="Segundo Nombre" class="input input-bordered input-primary mb-5 inline-block w-[40%]" />
        <input bind:value={focusCandidato.apellido_p} type="text" placeholder="Apellido Paterno" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={focusCandidato.apellido_m} type="text" placeholder="Apellido Materno" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={focusCandidato.llegada_cv} type="text" placeholder="Llegada CV" onfocus="(this.type='date')" onblur="(this.type='text')" class="input input-bordered input-primary mb-5 w-[25%] inline-block" />
        <select bind:value={focusCandidato.empresa} class="select select-primary w-[30%] ml-2">
            <option disabled selected>Empresa</option>
            {#each empresas as empresa}
            <option value={empresa.id_empresa}>{empresa.nombre}</option>
            {/each}
        </select>
        <select bind:value={focusCandidato.puesto} class="select select-primary w-[30%] ml-4">
            <option disabled selected>Puesto</option>
            {#each puestos as puesto}
            <option value={puesto.id_puesto}>{puesto.nombre}</option>
            {/each}
        </select>
        <input bind:value={focusCandidato.ciudad} type="text" placeholder="Ciudad" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={focusCandidato.estado} type="text" placeholder="Estado" class="input input-bordered input-primary mb-5 inline-block" />
        <input bind:value={focusCandidato.proyecto} type="text" placeholder="Proyecto" class="input input-bordered input-primary mb-5 inline-block" />
        <select bind:value={focusCandidato.origen} class="select select-primary w-[30%] ml-4">
          <option disabled selected>Origen</option>
          {#each origenes as origen}
          <option value={origen.id_origen}>{origen.nombre}</option>
          {/each}
        </select>
        <select bind:value={focusCandidato.status} class="select select-primary w-[30%]">
          <option disabled selected>Status</option>
          {#each status as stat}
            <option value={stat.id_status}>{stat.nombre}</option>
          {/each}
        </select>
        <select bind:value={focusCandidato.sexo} class="select select-primary w-[30%] ml-4 my-4">
          <option disabled selected>Sexo</option>
          <option>H</option>
          <option>M</option>
        </select>
        <input bind:value={focusCandidato.comentarios} type="text" placeholder="Comentarios" class="input input-bordered input-primary w-full max-w-xs py-10 mb-5" />
        <section class="mb-10">
            <button on:click|preventDefault={()=>{
              focusCandidato.llegada_cv = focusCandidato.llegada_cv.slice(0,10);


              updateTable('candidato/' + focusCandidato.id_candidato,focusCandidato);
              getData();
              newData = {};
              }} class="btn btn-secondary mt-4 float-right block ">Aceptar</button>
        </section>
    </form>
  </label>
</label>
{/if}


<!--Delete Alert Modal Template-->
<input type="checkbox" id="deleteCandidato" class="modal-toggle" />
<label for="deleteCandidato" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="font-bold text-lg mb-6">Seguro ?</h3>
    <p class="mt-4">Esta operacion es irreversible</p>
    <button on:click={()=>{deleteTable('candidato',focusCandidato.id_candidato);getData();getDataById(1);}} class="btn btn-error mt-2 ml-[35%]">Confirmar</button>
  </label>
</label>
