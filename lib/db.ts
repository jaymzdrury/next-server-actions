import errMsg from "./errMsg";
import { url } from "./url";

export async function get() {
  try {
    const res = await fetch(url, {
      cache: "no-cache",
      next: {
        tags: ["data"],
      },
    });
    const data = await res.json();
    return { error: !res.ok ? data.message : null, data };
  } catch (error) {
    return { error: errMsg(error) };
  }
}

export async function post(text: FormDataEntryValue) {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(text),
    });
    const data = await res.json();
    return { error: !res.ok ? data.message : null, data };
  } catch (error) {
    return { error: errMsg(error) };
  }
}
