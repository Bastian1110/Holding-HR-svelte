<script>
    let user = localStorage.getItem('user');
    import {replace} from 'svelte-spa-router';

    const logout = () =>{
        localStorage.clear();
        replace('/');
    }
    let admin = (localStorage.getItem('rol') == "admin") ?  true : false;
</script>

<main>
    <div class="navbar bg-base-100">
          <div class="dropdown">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><button on:click={()=>{replace('/dashboard');}}>Dashboard</button></li>
              <li><button on:click={()=>{replace('/manager/candidato');}}>Manager</button></li>
              {#if admin}
              <li><button on:click={()=>{replace('/usermanager');}}>Usuarios</button></li>
              {/if}
            </ul>
          </div>
        <div class="flex-1">
          <h1 class="font-bold text-2xl">Holding-HR</h1>
        </div>

        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="avatar">
              <h1 class="font-bold text-xl mr-10">{user}</h1>
            </label>
            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><button on:click={() => replace('/settings')}>Settings</button></li>
              <li><button on:click={logout}>Logout</button></li>
            </ul>
        </div>

      </div>
</main>