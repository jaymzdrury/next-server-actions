export async function fetchRequest(){
    const res = await fetch(`${process.env.URL}/api`, {
      cache: 'no-cache',
      next: {
        tags: ['data']
      }
    })
    if(!res.ok) throw new Error()
    const data: Data[] = await res.json()
    return data
}