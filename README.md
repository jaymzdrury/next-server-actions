## Next - Server Actions

<img src="https://media.istockphoto.com/id/1402763474/photo/glass-lowercase-letter-n.webp?b=1&s=170667a&w=0&k=20&c=o6M7-ISejHoEpcnqeum5HZBPTomGg6DXakmtdpU7CwY=" alt="Next" width="350" />

### Setup

`npx create-next-app@latest`

***

_useTransition_

update state without blocking UI

```JavaScript
    const [pending, startTransition] = useTransition()
```

_useOptimistic_

shows a different state while async is underway

```JavaScript
    const [optimisticData, addOptimisitcData] = 
        useOptimistic(data, (state, newData: any) => {
            return [...state, newData]
        })
```