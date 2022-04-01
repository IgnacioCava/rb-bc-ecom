export default function reduceEntries(entries, restrictions) {
  return Array.from(new Set(
      entries.map(element => Object.keys(element)).reduce((a,b)=>a.concat(b),[])
    )).filter(parameter=>
        restrictions
        ? !restrictions.includes(parameter)
        : true
    ).sort((a,b)=>a.localeCompare(b))
}