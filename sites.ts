import { Pool } from '@neondatabase/serverless';
import { findNearestHeritageSites } from './sql/heritage-sites.queries';

export default {
  async fetch(req: Request, env: any, ctx: any) {
    const pool = new Pool({ connectionString: env.DATABASE_URL });
    const longitude = parseFloat(req.headers.get('x-vercel-ip-longitude') ?? '-122.47');
    const latitude = parseFloat(req.headers.get('x-vercel-ip-latitude') ?? '37.81');
    const sites = await findNearestHeritageSites.run({ latitude, longitude, n: 10 }, pool);
    ctx.waitUntil(pool.end());
    return new Response(JSON.stringify({ longitude, latitude, sites }, null, 2));
  }
};
