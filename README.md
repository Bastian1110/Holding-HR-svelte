<input bind:value={newData.nombre} type="text" placeholder="Nombre" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.rfc} type="text" placeholder="RFC" class="input input-bordered input-primary w-full max-w-xs mb-5" />
        <input bind:value={newData.descripcion} type="text" placeholder="Descripcion" class="input input-bordered input-primary w-full max-w-xs py-10 mb-5" />
        <section class="mb-10">
            <button on:click|preventDefault={createNew} class="btn btn-secondary mt-4 float-right block ">Crear</button>
        </section>















