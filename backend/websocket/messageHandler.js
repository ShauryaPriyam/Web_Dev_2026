function parseCookies(cookieHeader) {
  const cookies = {};
  if (!cookieHeader) return cookies;

  cookieHeader.split(";").forEach(cookie => {
    const [key, value] = cookie.trim().split("=");
    cookies[key] = decodeURIComponent(value);
  });

  return cookies;
}

export { parseCookies };