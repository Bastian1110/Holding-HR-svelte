<script>
    import NavBar from '../components/NavBar.svelte';  
    import {replace} from 'svelte-spa-router';    

    let admin = (localStorage.getItem('rol') == "admin") ?  true : false;
    export let currentTable;
</script>


<main>
    <NavBar/>
    <div class="dropdown dropdown-hover ml-10 mt-10">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-primary m-1">Tabla</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button on:click={()=>{
            replace('/manager/candidato');
            }}>
            Candidatos
            </button>
          </li>
          <li><button on:click={()=>{
            replace('/manager/entrevista');
            }}>
            Entrevista
            </button>
          </li>
          {#if admin}
          <li><button on:click={()=>{
            replace('/manager/empresa');
            }}>
            Empresas
            </button>
          </li>
          <li><button on:click={()=>{
            replace('/manager/puesto');
            }}>
            Puesto
            </button>
          </li>
          <li><button on:click={()=>{
            replace('/manager/status');
            }}>
            Status
            </button>
          </li>
          <li><button on:click={()=>{
            replace('/manager/origen');
            }}>
            Origen
            </button>
          </li>
          {/if}
        </ul>
    </div>
    <label for={currentTable} class="btn btn-accent modal-button ml-[20%]">Añadir +</label>
</main>