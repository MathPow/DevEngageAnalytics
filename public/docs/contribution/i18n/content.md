<h1 id="s18n">I18n</h1>

<h4 style="color: gray;">How to manage translations?</h4>

_Internationalization (i18n) is the process of designing and developing software so it can be adapted for users of different cultures and languages._

We use i18next for this project.

<h3 id="howtoaddlanguagevariables">How to add language variables?</h3>

You need to add the translation variables in three files:

public/locales/en.json (English)
public/locales/fr.json (French)
public/locales/es.json (Spanish)

We use a JSON format structure like this:

```
"card": {
    "socials": {
      "followers": "followers",
      "following": "following",
      "connections": "connections"
    },
}
```

<h3 id="howcanyouusethesevariables">How can you use these variables?</h3>

1. Import i18next into your _.tsx_ file:
   `import { useTranslation } from "react-i18next";`
2. Extract the "t" function in your component:
   `const { t } = useTranslation();`
3. Use the "t" function to access your translation variables:
   `<p>{t("path.to.variable")}</p>`

<h3 id="howcanyouusethesevariables">Adding a new language</h3>

1. Add to the language switcher the new language so it can be selected
2. Create a new JSON file with all the current variables translated. Name it with its abbreviation (e.g., "en" for English).
