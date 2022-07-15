<script>
    export let base;
    export let deleteFunction;
</script>


    <div class="card w-52 bg-base-100 shadow-xl inline-block m-4">
        <div class="card-body">
            <h2 class="card-title">{base.nombre}</h2>
            <p>ID : {base.id_empresa}</p>
            <p>RFC : {base.rfc}</p>
            <p>Descripcion : {base.descripcion}</p>
            <div class="card-actions justify-end">
                <button on:click={()=>deleteFunction(base.id_empresa)} class="btn btn-sm btn-warning">Eliminar</button>
            </div>
        </div>
    </div>