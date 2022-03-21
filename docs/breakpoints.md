## Media Breakpoints

| Device                                                                    | Code | Type                   | Range     |
|---------------------------------------------------------------------------|------|------------------------|-----------|
| ![Icon](../src/assets/icons/breakpoints/extra_small.svg) Extra small      | $xs  | Small to large phone   | < 600px   |
| ![Icon](../src/assets/icons/breakpoints/small.svg) Small                  | $sm  | Small to medium tablet | 960px     |
| ![Icon](../src/assets/icons/breakpoints/medium.svg) Medium                | $md  | Large tablet to laptop | 1280px    |
| ![Icon](../src/assets/icons/breakpoints/large.svg) Large                  | $lg  | Desktop                | 1920px    |
| ![Icon](../src/assets/icons/breakpoints/extra_large.svg) Extra large      | $xl  | 4k and ultra-wide      | \> 1920px |

### Example:

```scss
// *.scss

@use '@/style/breakpoints' as media;

body::before {
  position: absolute;
  left: 100px;
  content: 'default';

  @media (media.$xl) {
    content: 'xl'
  }
  @media (media.$lg) {
    content: 'lg'
  }
  @media (media.$md) {
    content: 'md'
  }
  @media (media.$sm) {
    content: 'sm'
  }
  @media (media.$xs) {
    content: 'xs'
  }
}
```

###### Author: [oredan](https://github.com/oredan)
