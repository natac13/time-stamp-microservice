# time-stamp-microservice

Free Code Camps first microservice project. 

Pass either the unix timestamp or a natural date into the url and get back the time in both forms.

## Examples 

In the url you can type

```
2016-10-13
March 12, 2016
September%2030,%202008
// or any unix timestamp value
561600000
```

All these will return in `.json` format an object with structure

```json
{
    "unix": 561600000,
    "natural": "October 19th, 1987"
}
```

**Licence: MIT**
