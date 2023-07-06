<script>
    import { page } from '$app/stores';
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
    }

    const { lang } = $page.params
    const greeting = greetings[lang] || greetings.en
</script>

<h1>{greeting}</h1>