import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/lib/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

// ---------------------------------------------------------
// import { cookies } from "next/headers";
// import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async () => {
//   const store = await cookies();
//   const locale = store.get("locale")?.value || "en";

//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });
