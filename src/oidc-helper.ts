import Vue, { PluginObject } from 'vue';
import Oidc from 'oidc-client';
import router from '@/router';
import store from '@/store';

export let userManager!: Oidc.UserManager;
class VueOidcPlugin implements PluginObject<Oidc.UserManagerSettings> {
  public install(vue: typeof Vue, options?: Oidc.UserManagerSettings): void {
    userManager = new Oidc.UserManager(options!);
    userManager.getUser()
      .then(
        (user) => {
          store.commit('setUser', user);
        },
      );

    userManager.signinRedirectCallback((userManager.settings.redirectNavigator.url as string).replace('#/', '#'))
      .then(
        (user) => {
          store.commit('setUser', user);
          router.push('/');
        },
      )
      .catch(
        () => {
          if (router.currentRoute.path !== '/') {
            router.push('/');
          }
        },
      );

    userManager.events.addUserUnloaded(() => {
      store.commit('unsetUser');
    });
  }
}
export default new VueOidcPlugin();
