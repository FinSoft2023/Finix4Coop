import type { Liff } from "@line/liff";

export function useLiff() {
  async function runLiff(callback: (liff: Liff) => Promise<void>) {
    const $liff = useNuxtApp().$liff as Liff;
    // const initResult = useNuxtApp().$liffInitResult;
    if (!!window && !!$liff) {
      // if (!!initResult) {
      //   await initResult;
      // }
      await callback($liff);
    }
  }

  return { runLiff };
}