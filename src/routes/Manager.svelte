<script>
    import NavBar from '../components/NavBar.svelte';       
    import TemplateManager from '../components/TemplateManager.svelte';
    import EmpresasTemp from './Tables/EmpresasTemp.svelte';
    import StatusTemp from './Tables/StatusTemp.svelte'

    let currentTable = 'empresas';
    let currentTemplate = EmpresasTemp;
</script>


<main>
    <NavBar/>
    <div class="dropdown dropdown-hover ml-10 mt-10">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-primary m-1">Tabla</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button on:click={()=>{
            currentTable = 'status';
            currentTemplate = StatusTemp;
            }}>
            Status
            </button>
          </li>
          <li><button on:click={()=>{
            currentTable = 'empresas';
            currentTemplate = EmpresasTemp;
            }}>
            Empresas
            </button>
          </li>
        </ul>
    </div>
    <label for="createNew" class="btn btn-accent modal-button ml-[20%]">Añadir +</label>
    <h2 class="font-bold text-2xl float-right m-10 mr-[10%] text-purple-900">{currentTable}</h2>
    <TemplateManager table={currentTable} objectCard={currentTemplate}/>
</main>