<script>
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
    ];
</script>

<h1>Product List</h1>
<ul>
    {#each products as product}
        <li>
            <a href="products/{product.id}" class="text-blue-900 underline">{product.name}</a>
        </li>
    {/each}
</ul>
<a href="/" class="text-blue-900 underline">Home</a>
