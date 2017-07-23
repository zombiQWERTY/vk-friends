import 'babel-polyfill';
import VK from './connectors/VK';

(async function () {
  const vk = new VK();
  const token = await vk.authStandalone();
  vk.setToken(token);

  let test2 = await VK.instance.api.friends.get();

  console.log(test2);
})();
