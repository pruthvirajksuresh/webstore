export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/medicine_catalog_expanded_research_v2.html') {
      url.pathname = '/';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
