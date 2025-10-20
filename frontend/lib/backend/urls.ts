const BASE_BACKEND = `/api`;

const urls = {
  base_backend: {
    auth: {
      create: `${BASE_BACKEND}/auth/jwt/create`,
      verify: `${BASE_BACKEND}/auth/jwt/verify`,
    },
    users: `${BASE_BACKEND}/users`,
  },
};

export default urls;
