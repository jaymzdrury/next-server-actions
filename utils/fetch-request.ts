export async function fetchRequest() {
  try {
    const res = await fetch(`${process.env.URL}/api`, {
      cache: "no-cache",
      next: {
        tags: ["data"],
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(`Error: ${res.status}, ${data.message}`);
    return data;
  } catch (error) {
    throw new Error(`Error: ${(error as Error)?.message ?? "Unknown error"}`);
  }
}
