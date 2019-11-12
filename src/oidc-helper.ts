import Oidc from 'oidc-client';
import store from '@/store';

export const userManager = new Oidc.UserManager({
  client_id:
    '434054152947-81fcn4dh08d4cmkrs6373gfck5fukbaq.apps.googleusercontent.com',
    client_secret: 'QPa23jPmBwmRW9C1NAFEnPUu',
  authority: 'https://accounts.google.com',
  redirect_uri: 'http://localhost:8080',
  response_type: 'code',
});

userManager.events.addUserLoaded((user) => {
  store.commit('setUser', user);
});

userManager
  .getUser()
  .then(
    (user) => {
      store.commit('setUser', user);
    },
  );

/**
 * Checks if the URL is an OIDC callback by checking if it contains state and code.
 * @param url URL to parse
 */
export function isOidcCallback(url: string): boolean {
  const searchParams = new URL(url).searchParams;
  return searchParams.has('state') &&
  searchParams.has('code') ;
}

