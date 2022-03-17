const vLog = {
  mounted: (el: HTMLElement, { value }: { value: string}) => {
    console.log('v-log:', value, el)
    console.dir(el)
  }
}

export default vLog
