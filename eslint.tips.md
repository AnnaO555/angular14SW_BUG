# error  Unexpected aliasing of 'this' to local variable  @typescript-eslint/no-this-alias
esLint will complain if you try to maintain a reference to this 

```
    const self = this;
    this._indexedDBService.deleteDb().then(function () {
      localStorage.clear();
      self._router.navigate(['loggedOut']);
    })
```

Using an arrow lambda resolves this

```
    this._indexedDBService.deleteDb().then(() => {
      localStorage.clear();
      this._router.navigate(['loggedOut']);
    })
```

# error  Unexpected property on console object was called  no-restricted-syntax
eslint prevented calls to console.debug & console.warn. This rule has been overridden in .eslintrc.json no-restricted-syntax