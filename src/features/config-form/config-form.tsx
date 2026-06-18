import { FormProvider, useForm } from "react-hook-form";
import { getThemeList } from "#features/theme/config/theme-list";
import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import Button from "#components/button/button";
import type { ConfigFormValues } from "./config-form.types";
import { defaultConfig } from "./helpers/default-config";
import Select from "#components/form/select/select";

import s from "./config-form.module.scss";
import { getBorderTypeList } from "./helpers/border-type-list";
import WatchPreview from "#components/watch-preview/watch-preview";

export const ConfigForm: FC<{
  defaultValues: ConfigFormValues;
  bw?: boolean;
  submitUrl: string;
}> = ({ defaultValues, bw, submitUrl }) => {
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
    () => getBorderTypeList(bw),
    [getBorderTypeList, bw],
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

  const applyChanges = useCallback(
    (values: ConfigFormValues) => {
      const params = {
        Theme: values.Theme && Number(values.Theme),
        BorderType: values.BorderType && Number(values.BorderType),
      };
      console.log("Submitting values: ", JSON.stringify(params));
      window.location.href =
        submitUrl + encodeURIComponent(JSON.stringify(params));
    },
    [submitUrl],
  );

  const resetToDefault = useCallback(() => {
    reset();
  }, [reset]);

  const close = useCallback(() => {
    window.location.href = submitUrl;
  }, []);

  const formValues = watch();

  return (
    <FormProvider {...formMethods}>
      <form className={s.form} onSubmit={handleSubmit(applyChanges)}>
        <div className={s.preview}>
          <WatchPreview bw={bw} config={formValues} />
        </div>
        <div className={s.fields}>
          <Select options={themeList} {...register("Theme")} label="Theme" />
          <Select
            options={borderTypeList}
            {...register("BorderType")}
            label="Border type"
          />
        </div>
        <footer className={s.footer}>
          <div className={s.footerbuttons}>
            <div className={s.footerbuttongroup}>
              <Button onClick={close}>Close</Button>
              {isDirty && (
                <Button onClick={resetToDefault}>Reset defaults</Button>
              )}
            </div>
            <Button type="submit">Apply</Button>
          </div>
        </footer>
      </form>
    </FormProvider>
  );
};

export default ConfigForm;
