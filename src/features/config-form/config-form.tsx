import { FormProvider, useForm } from "react-hook-form";
import { getThemeList } from "#features/theme/config/theme-list";
import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import Button from "#components/button/button";
import type { ConfigFormValues } from "./config-form.types";
import { defaultConfig } from "./helpers/default-config";
import Select from "#components/form/select/select";
import { getBorderTypeList } from "./helpers/border-type-list";
import WatchPreview from "#components/watch-preview/watch-preview";

import s from "./config-form.module.scss";

export const ConfigForm: FC<{
  defaultValues: ConfigFormValues;
  bw?: boolean;
  submitUrl: string;
}> = ({ defaultValues, bw, submitUrl }) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const formMethods = useForm<ConfigFormValues>({
    defaultValues: defaultConfig,
  });
  const [initialised, setInitialised] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isDirty },
  } = formMethods;

  const themeList = useMemo(() => getThemeList(bw), [getThemeList, bw]);

  const borderTypeList = useMemo(
    () => getBorderTypeList(),
    [getBorderTypeList],
  );

  useEffect(() => {
    if (initialised) {
      return;
    }
    setInitialised(true);
    Object.keys(defaultConfig).forEach((n) => {
      const name = n as keyof ConfigFormValues;
      let value = defaultValues[name];
      if (name === "Theme") {
        const theme = themeList.find(
          ({ value: themeId }) => themeId === Number(value),
        );
        if (!theme) {
          return;
        }
        value = String(theme.value);
      }
      if (name === "BorderType") {
        const borderType = borderTypeList.find(
          ({ value: borderTypeId }) => borderTypeId === Number(value),
        );
        if (!borderType) {
          return;
        }
        value = String(borderType.value);
      }
      setValue(name, value);
    });
  }, [themeList]);

  const applyChanges = useMemo(
    () =>
      handleSubmit((values: ConfigFormValues) => {
        const params = {
          Theme: values.Theme && Number(values.Theme),
          BorderType: values.BorderType && Number(values.BorderType),
        };
        const data = JSON.stringify(params);
        console.log("Submitting values: ", data);
        localStorage.setItem("config", data);
        window.location.href = submitUrl + encodeURIComponent(data);
      }),
    [handleSubmit, submitUrl],
  );

  const resetToDefault = useCallback(() => {
    reset();
  }, [reset]);

  const close = useCallback(() => {
    window.location.href = submitUrl;
  }, []);

  const formValues = watch();

  useEffect(() => {
    if (!containerRef) {
      return;
    }
    const calcOffset = () => {
      const { left, width, height } = containerRef.getBoundingClientRect();
      const top = containerRef.parentElement?.offsetTop || 0;

      setOffset({ top, left, width, height });
    };

    window.addEventListener("scroll", calcOffset);
    window.addEventListener("resize", calcOffset);

    calcOffset();

    return () => {
      window.removeEventListener("scroll", calcOffset);
      window.removeEventListener("resize", calcOffset);
    };
  }, [containerRef]);

  return (
    <FormProvider {...formMethods}>
      <form className={s.form} onSubmit={applyChanges}>
        <div className={s.preview}>
          <div className={s.emery} ref={setContainerRef} />
          <WatchPreview
            className={s.emery}
            bw={bw}
            config={formValues}
            offset={offset}
          />
        </div>
        <div className={s.fields}>
          <Select options={themeList} {...register("Theme")} label="Theme" />
          <Select
            options={borderTypeList}
            {...register("BorderType")}
            label="Border type"
          />
        </div>
      </form>
      <footer className={s.footer}>
        <div className={s.footerbuttons}>
          <div className={s.footerbuttongroup}>
            <Button onClick={close}>Close</Button>
            {isDirty && (
              <Button onClick={resetToDefault}>Reset defaults</Button>
            )}
          </div>
          <Button type="submit" onClick={applyChanges}>
            Apply
          </Button>
        </div>
      </footer>
    </FormProvider>
  );
};

export default ConfigForm;
