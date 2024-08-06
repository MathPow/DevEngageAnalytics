"use client";

import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { MAX_PAGE_TITLE_LENGTH, MIN_PAGE_TITLE_LENGTH } from "@/lib/forms/formValidation";
import { ShowColorsEnum } from "@/lib/types/showColorsEnum";
import { Button } from "@/components/ui/button";
import { LanguagesEnum } from "@/lib/types/languagesEnum";
import { ThemesEnum } from "@/lib/types/themesEnum";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Component } from "@/lib/types/component";
import { BASE_PATH } from "@/lib/composables/production";
import { formatSlug } from "@/lib/composables/formatSlug";
import { toastError, toastSuccess } from "@/lib/composables/useToast";
import Icon from "@/components/Icon";
import QRCode from "qrcode";
import HostComponentForm from "./HostComponentForm";

interface DialogHostComponentProps {
  children: React.ReactNode;
  setIsMouseEventLock?: (value: boolean) => void;
  selectedType?: Component;
  userInfoEntered?: any;
}

export default function DialogHostComponent({
  children,
  setIsMouseEventLock,
  selectedType,
  userInfoEntered,
}: DialogHostComponentProps) {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const [isLinkGenerated, setIsLinkGenerated] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [generatedQRCode, setGeneratedQRCode] = useState("");

  const PAGE_TITLE_LENGTH = t("SIGN_UP_USERNAME_LENGTH", {
    minLength: MIN_PAGE_TITLE_LENGTH,
    maxLength: MAX_PAGE_TITLE_LENGTH,
  });

  const formSchema = z.object({
    pageTitle: z
      .string({ required_error: "error" })
      .min(MIN_PAGE_TITLE_LENGTH, { message: PAGE_TITLE_LENGTH })
      .max(MAX_PAGE_TITLE_LENGTH, { message: PAGE_TITLE_LENGTH })
      .refine((str) => !str.includes(" "), {
        message: "The page title can't have space in it",
      }),
    color: z.nativeEnum(ShowColorsEnum, {
      message: "Background color is required",
    }),
    theme: z.nativeEnum(ThemesEnum, {
      message: "Theme is required",
    }),
    language: z.nativeEnum(LanguagesEnum, {
      message: "Language is required",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageTitle: "DevEngageAnalytics",
      color: "",
      theme: "",
      language: "",
    },
  });

  const { setValue } = form;

  function getCurrentTheme(): ThemesEnum | string {
    console.log(theme);
    if (theme === ThemesEnum.Dark) {
      return ThemesEnum.Dark;
    } else if (theme === ThemesEnum.Light) {
      return ThemesEnum.Light;
    }
    return "";
  }

  function getCurrentLanguage(): LanguagesEnum | string {
    if (i18n.language === LanguagesEnum.FR) {
      return LanguagesEnum.FR;
    } else if (i18n.language === LanguagesEnum.ES) {
      return LanguagesEnum.ES;
    } else if (i18n.language === LanguagesEnum.EN) {
      return LanguagesEnum.EN;
    }
    return "";
  }

  useEffect(() => {
    setValue("theme", getCurrentTheme());
  }, [theme]);

  useEffect(() => {
    setValue("language", getCurrentLanguage());
  }, [i18n.language]);

  async function onSubmit({ ...values }: z.infer<any>) {
    if (selectedType && userInfoEntered && userInfoEntered.githubUsername) {
      const fullDomainWithPort =
        window.location.protocol +
        "//" +
        window.location.hostname +
        (window.location.port ? ":" + window.location.port : "");
      const url = `${fullDomainWithPort}${BASE_PATH}show/${values.pageTitle}?githubUsername=${userInfoEntered.githubUsername}&type=${formatSlug(selectedType.type)}&format=${formatSlug(selectedType.format)}&color=${values.color}&theme=${values.theme}&language=${values.language}`;
      setIsLinkGenerated(true);
      setGeneratedUrl(url);
      QRCode.toDataURL(url).then(setGeneratedQRCode);
    } else {
      toastError("You need to select your card and the informations");
    }
  }

  function copyGeneratedUrl() {
    navigator.clipboard
      .writeText(generatedUrl)
      .then(() => {
        toastSuccess("Text copied to clipboard");
      })
      .catch((err) => {
        toastError("Failed to copy text: " + generatedUrl);
      });
  }

  function resetForm() {
    form.reset({
      pageTitle: "DevEngageAnalytics",
      color: "",
      theme: getCurrentTheme(),
      language: getCurrentLanguage(),
    });
    setIsLinkGenerated(false);
    setGeneratedUrl("");
    setGeneratedQRCode("");
  }

  return (
    <Dialog onOpenChange={(value) => setIsMouseEventLock && setIsMouseEventLock(value)}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-3">
          <DialogTitle>Customize your page</DialogTitle>
          <DialogDescription>Set what your page should look like.</DialogDescription>
        </DialogHeader>
        {!isLinkGenerated ? (
          <HostComponentForm form={form} onSubmit={onSubmit} />
        ) : (
          <div>
            <div className="flex gap-x-2">
              <Input id="link" defaultValue={generatedUrl} readOnly />
              <Button type="submit" size="sm" className="px-3" onClick={copyGeneratedUrl}>
                <Icon name="copy" className="h-4 w-4" />
              </Button>
            </div>
            <img className="mx-auto mt-4" src={generatedQRCode} />
          </div>
        )}
        <DialogFooter className="mt-3 sm:justify-start">
          <DialogClose asChild>
            <div className="flex w-full justify-end gap-x-2">
              <Button type="button" variant="outline" onClick={resetForm}>
                Close
              </Button>
              {!isLinkGenerated && <Button onClick={form.handleSubmit(onSubmit)}>Create url</Button>}
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
