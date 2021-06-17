# ngx-covalent-api
### An Angular library for fetching data from the Covalent API

The folder structure contains an Angular project with the library as a subproject inside. The surrounding project does not need to be built: only the library. To do this, call 

```ng build ngx-covalent-api --prod```

from the home project directory. Once you ```cd``` into the ```/dist/ngx-covalent-api``` directory, you can publish it to npmjs.org. If you change the library and built it, be sure to update the version number in the ```package.json``` file . 

The library contains various models in ```src/lib/models``` that are grouped into "Class A", "Class B", as well as "Pricing" endpoints. An interceptor is used to add the API key to every request. The service provides functions for performing an http-request.
