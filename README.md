# raketech-form-test
This is a wordpress headless plugin written in VueJS using wp-json


## For Development 
Project setup
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Host Url
```
Helpers/UrlList.js {Host} should point on the localhost
```


## For Production 


Host Url
```
Helpers/UrlList.js {Host} should point on http://18.194.254.254
```

Compiles and minifies for production
```
npm run build
```
In the dist/index.html the paths of the js and css should point /wp-content/plugins/raketech-form-test/dist
<br />
This can be done manual or confugued from webpack.
<br />
Then it can be installed from the wp admin like any other normal plugin
