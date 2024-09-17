# react

# parcel

- Dev Build
- Local Server
- HMR = HOt module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- Https
- Tree Shacking - Remove unused code
  = Different dev and prod bundles

 # Flavorsofindea react app

 //    * header
//    -logo
//    -Nav Items

//    *body
//    -search
//    -ResturantContainer
//    -RestaurantCard
//       -Img
//       -Name of Res , Star Rating , Cuisine , Delevery time

//    *Footer
//    -Copyright
//    -Links
//    -Address
//    -Contact


Two types of Export/Import 

-Default Export/Import 

export default component ;
import component from "path";

-Named Export/Import 

export const Component :
import {Component } from "path";



# React Hooks

(Normal JS utility functions)
- useState() - Superpowerful State Variables in reeact
- useEffect()


# Redux Toolkit 

 - Install @reduxjs/reduxtookit and  react-reducx
 - Build our store 
  - Connect our store to our app
  - Slice(cartSlice)
  -dispacth (action)
  -Selector


  # Types of testing (developer)

   -Unit Testng 
   -Intergration Testing
   -End to End Testing - e2e testing  


   # Setting up Testing in our app 
    - Install React Testing Library
    - Installed jest 
    - Installed Babel dependencies
    - Configure Babel
     - Configure parcel configure file to despable default babel transpilation
     - jest configuration by npx jest --init
     -intall jsdon library

# all these files are considered as testing files
-Headers.test.js
-Headers.test.ts
-Headers.spec.js
-Headers.spec.ts