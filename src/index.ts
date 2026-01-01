export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);

    // GET /tasks
    if (url.pathname === "/tasks" && request.method === "GET") {
      const { results } = await env.DB
        .prepare("SELECT * FROM tasks ORDER BY id DESC")
        .all();

      return new Response(JSON.stringify(results), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // default
    return new Response(
      JSON.stringify({ error: "Not Found" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  },
};