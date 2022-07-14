<script>
    import NavBar from '../components/NavBar.svelte';

    //Test         
    import TemplateManager from '../components/TemplateManager.svelte';
    import EmpresasTest from './Tables/EmpresasTest.svelte';

    let table = 'Ninguna'
    let currentTemplate = null;
</script>


<main>
    <NavBar/>
    <div class="dropdown dropdown-hover ml-10 mt-10">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-primary m-1">Tabla</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button on:click={()=>{
            table = 'Status';
            currentTemplate = null;
            }}>
            Status
            </button>
          </li>
          <li><button on:click={()=>{
            table = 'Empresas';
            currentTemplate = EmpresasTest;
            }}>
            Empresas
            </button>
          </li>
        </ul>
    </div>
    <label for="createNew" class="btn btn-accent modal-button ml-[20%]">Añadir +</label>
    <h2 class="font-bold text-2xl float-right m-10 mr-[10%]">{table}</h2>
    <TemplateManager objectCard={currentTemplate}/>
</main>