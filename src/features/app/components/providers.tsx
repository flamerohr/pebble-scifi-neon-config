import { type ComponentType } from "react";

export const Providers = (App: ComponentType) => (props: {}) => {
  return <App {...props} />;
};

export default Providers;
