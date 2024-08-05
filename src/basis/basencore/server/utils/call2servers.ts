import { H3Event, type EventHandlerRequest, ProxyOptions } from 'h3'; // Replace 'path/to/H3Event' with the actual path to the H3Event module

function useServerConfig(event: H3Event<EventHandlerRequest>) {
  const { apiServer } = useRuntimeConfig(event);
  return apiServer;
}

async function handleProxyRequestToServer(
  event: H3Event<EventHandlerRequest>,
  targetUrl: string,
  opts?: ProxyOptions,
) {
  await sendProxy(event, targetUrl, opts);
}

export async function callGetListToServer(
  event: H3Event<EventHandlerRequest>,
  opts?: { filterBy?: string; filterOp?: string; url?: string },
) {
  const { baseURL } = useServerConfig(event);
  const { filterBy, filterOp, url } = opts || {};
  const apiRoutePath = url || event.path;
  const query = getQuery(event);
  if (filterBy) {
    const {
      'fltr-val': fltrVal,
      q: q,
      'fltr-by': fltrBy,
      'fltr-op': fltrOp,
    } = query;
    let headers = {};
    if (fltrVal) {
      const baseQuery = { 'fltr-by': filterBy, 'fltr-val': fltrVal.toString() };
      const qryFilter = {
        'fltr-by': fltrBy?.toString(),
        'fltr-op': fltrOp?.toString(),
      };

      const serverOptions = filterOp ? { 'fltr-op': filterOp } : {};
      headers = Object.assign({}, qryFilter, serverOptions, baseQuery);
    } else if (q) {
      headers = {
        'fltr-val': q?.toString(),
        'fltr-by': filterBy,
        'fltr-op': 'ctn',
      };
    } else {
      await sendNoContent(event);
      return [];
    }
    await handleProxyRequestToServer(event, `${baseURL}${apiRoutePath}`, {
      headers,
    });
    return;
  }
  await handleProxyRequestToServer(event, `${baseURL}${apiRoutePath}`);
}

export async function callGetToServer(
  event: H3Event<EventHandlerRequest>,
  url?: string,
  urlSuffix?: string,
) {
  const { baseURL } = useServerConfig(event);
  // const apiRoutePath = url || event.path;
  const id = getRouterParam(event, 'id');
  let apiRoutePath = event.path;

  if (url) {
    apiRoutePath = url;
    if (id) {
      apiRoutePath += `/${id}`;
      if (urlSuffix) {
        apiRoutePath += `/${urlSuffix}`;
      }
    }
  }
  await handleProxyRequestToServer(event, `${baseURL}${apiRoutePath}`);
}

export async function callPostToServer(
  event: H3Event<EventHandlerRequest>,
  url?: string,
  urlSuffix?: string,
) {
  const { baseURL } = useServerConfig(event);
  const id = getRouterParam(event, 'id');
  let apiRoutePath = event.path;

  if (url) {
    apiRoutePath = url;
    if (id) {
      apiRoutePath += `/${id}`;
      if (urlSuffix) {
        apiRoutePath += `/${urlSuffix}`;
      }
    }
  }
  const targetUrl = `${baseURL}${apiRoutePath}`;
  // await handleProxyRequestToServer(event, targetUrl);
  const query = getQuery(event);
  const body = await readBody(event);

  return await $fetch(targetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
    query,
  });
}

export async function callPutToServer(
  event: H3Event<EventHandlerRequest>,
  url?: string,
  urlSuffix?: string,
) {
  const { baseURL } = useServerConfig(event);
  const id = getRouterParam(event, 'id');
  let apiRoutePath = event.path;

  if (url) {
    apiRoutePath = url;
    if (id) {
      apiRoutePath += `/${id}`;
      if (urlSuffix) {
        apiRoutePath += `/${urlSuffix}`;
      }
    }
  }
  const targetUrl = `${baseURL}${apiRoutePath}`;
  // await handleProxyRequestToServer(event, targetUrl);
  const query = getQuery(event);
  const body = await readBody(event);

  return await $fetch(targetUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
    query,
  });
}
