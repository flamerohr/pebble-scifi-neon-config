import ConfigForm from "#features/config-form/config-form";
import Providers from "./components/providers";
import { useEffect, useMemo } from "react";
import type { ConfigFormValues } from "#features/config-form/config-form.types";
import { defaultConfig } from "#features/config-form/helpers/default-config";

import s from "./app.module.scss";
import theme from "#features/theme/color/site.module.scss";
import "#features/theme/size.scss";

export const App = () => {
  const params = useMemo(() => {
    return new URLSearchParams(window.location.search);
  }, [window.location.search]);

  const param = params.get("config");

  const config = useMemo<ConfigFormValues>(() => {
    if (param == null) {
      return defaultConfig;
    }
    try {
      return { ...defaultConfig, ...JSON.parse(param) };
    } catch {
      return defaultConfig;
    }
  }, [param]);

  useEffect(() => {
    document.documentElement.classList.add(theme.site);

    return () => {
      document.documentElement.classList.remove(theme.site);
    };
  }, []);

  return (
    <>
      <header className={s.header}>Scifi Neon config</header>
      <div className={s.appcontainer}>
        <ConfigForm
          defaultValues={config}
          bw={params.get("bw") == "1"}
          submitUrl={params.get("return_to") || "pebblejs://close#"}
        />
      </div>
    </>
  );
};

export default Providers(App);
