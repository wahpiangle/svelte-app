<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
    const handleClick = () =>{
        goto('/products')
    }

    //these will show the navigation object in the console, to and from routes
    beforeNavigate((navigation) =>{
        console.log({before:navigation})
    })

    afterNavigate((navigation) =>{
        console.log({after:navigation})
    })
</script>

<h1>HOME PAGE</h1>
<div class="flex flex-col">
    <a href="/blog" class="text-blue-900 underline">Blog</a>
    <a href="/products" class="text-blue-900 underline">Products</a>
</div>
<button on:click={handleClick} class="bg-blue-100 p-2">Place Order</button>