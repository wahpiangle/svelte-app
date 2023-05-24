<!-- The use of [...slug] in a folder structure indicates that as long as it is under that route
it will be handled by this file. This allows for dynamic nested routing for multiple pages.
-->
<script>
    import { page } from '$app/stores'
    const slugArray = $page.params.slug.split('/');
</script>


<h1>Docs home page</h1>

<!-- if statement -->
{#if slugArray.length === 1}
    <p>Viewing docs of {slugArray[0]}</p>
{:else if slugArray.length === 2 }
    <p>Viewing docs of {slugArray[0]} of {slugArray[1]}</p>
{/if}
