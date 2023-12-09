export function GET() {
    return new Response(JSON.stringify({
        data: 'Hello from the server'
    }), {
        headers: {
            'content-type': 'application/json'
        }
    });
}