import { NextRequest } from 'next/server';

// Ensure this route runs on the Node.js runtime
export const runtime = 'nodejs';

const isDev = process.env.NODE_ENV === 'development';

async function handleProxy(req: NextRequest, path: string[]) {
  const targetBase = process.env.PROXY_TARGET_URL;
  // Join path segments and ensure a trailing slash for unsafe methods
  const pathStr = path.join('/');
  const method = req.method;
  const needsTrailingSlash = method !== 'GET' && method !== 'HEAD';
  const pathWithSlash =
    needsTrailingSlash && !pathStr.endsWith('/') ? `${pathStr}/` : pathStr;
  const url = `${targetBase}/api/${pathWithSlash}${req.nextUrl.search}`;

  // Forward request
  // method already captured above
  const headers = new Headers(req.headers);
  // Remove hop-by-hop/auto headers that can break proxying
  headers.delete('host');
  headers.delete('connection');
  headers.delete('content-length');
  headers.delete('transfer-encoding');

  const init: any = {
    method,
    headers,
    // redirect: "manual",
  };

  if (method !== 'GET' && method !== 'HEAD') {
    // When sending a body with Node's fetch (undici), duplex is required
    init.body = req.body ?? undefined;
    init.duplex = 'half';
  }
  if (method !== 'GET' && path[0] !== 'auth') {
    console.log('Ignoring request - not GET', url);
    return new Response('Not allowed', { status: 405 });
  }
  console.log(`Proxying request to: ${url}`);

  const res = await fetch(url, init);

  // Stream response back
  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}

type Ctx = { params: { path: string[] } };
type Handler = (req: NextRequest, ctx: Ctx) => Promise<Response>;

const proxyHandler: Handler = async (req, { params }) =>
  handleProxy(req, params.path);

export const GET: Handler | undefined = isDev ? proxyHandler : undefined;
export const POST: Handler | undefined = isDev ? proxyHandler : undefined;
export const PUT: Handler | undefined = isDev ? proxyHandler : undefined;
export const PATCH: Handler | undefined = isDev ? proxyHandler : undefined;
export const DELETE: Handler | undefined = isDev ? proxyHandler : undefined;
