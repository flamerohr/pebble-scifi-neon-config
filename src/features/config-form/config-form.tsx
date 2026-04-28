import { FormProvider, useForm } from "react-hook-form";
import { themeList } from "#features/theme/config/theme-list";
import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import Button from "#components/button/button";
import type { ConfigFormValues } from "./config-form.types";
import { defaultConfig } from "./helpers/default-config";

import s from "./config-form.module.scss";

export const ConfigForm: FC<{
  defaultValues: ConfigFormValues;
  bw?: boolean;
  submitUrl: string;
}> = ({ defaultValues, bw, submitUrl }) => {
  const formMethods = useForm<ConfigFormValues>({
    defaultValues: { ...defaultConfig, Theme: bw ? "2" : "0" },
  });
  const [initialised, setInitialised] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isDirty },
  } = formMethods;

  const themeOptions = useMemo(
    () =>
      themeList
        .filter((option) => !bw || option.bw)
        .map(({ value, label, className, altClassName }) => ({
          value,
          label,
          theme: className,
          themeAlt: altClassName,
        })),
    [],
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
        value = String(value);
        if (bw) {
          value = value === "3" ? "3" : "2";
        }
      }
      setValue(name, value);
    });
  }, []);

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

  return (
    <FormProvider {...formMethods}>
      <form className={s.form} onSubmit={handleSubmit(applyChanges)}>
        <div className={s.fields}>
          {/*<Select
            options={themeOptions}
            {...register("Theme", { valueAsNumber: true })}
            label="Theme"
          />*/}
          {/*<RadioThemebox
            name="Theme"
            label="Theme"
            options={themeOptions}
            radioProps={register("Theme")}
          />*/}
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
