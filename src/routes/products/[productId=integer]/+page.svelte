<script>
    import { page } from '$app/stores'

    const paramsResult = $page.params.productId //use of $ to indicate that it is reactive
    //since the params will be under [productId] the params can be retrieved
</script>

<h1>Product detail under nested route in {paramsResult}</h1>
<!-- go to current page + /reviews -->
<a href={$page.params.productId + '/reviews'} class="text-blue-900 underline">Reviews</a>