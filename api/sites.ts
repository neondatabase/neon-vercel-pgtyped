import handlers from '../sites';

export default (req: Request, ctx: any) => {
  const { DATABASE_URL } = process.env;
  return handlers.fetch(req, { DATABASE_URL }, ctx);  // note: passing process.env straight through _doesn't_ work
}

export const config = {
  runtime: 'edge',
  regions: ['fra1'],  // fra1 = Frankfurt: pick the Vercel region nearest your Neon DB
};
