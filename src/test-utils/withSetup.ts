import { createApp, App } from "vue";

export function withSetup<T extends (...args: any) => any>(composable: T) {
  let result!: ReturnType<T>;

  const app = createApp({
    setup() {
      result = composable();
      return () => {};
    },
  });
  app.mount(document.createElement("div"));

  type Return = [ReturnType<T>, App<Element>];
  const returnValue: Return = [result, app];
  return returnValue;
}
