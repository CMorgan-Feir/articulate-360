// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Cylinder surface that wraps all the way around (currently unused)
  let myNewSurface = new Surface(
    4680, /* width  */
    600, /* height */
    Surface.SurfaceShape.Flat /* shape */
  );

  // Flat surface
  let myFlatSurface = new Surface(
    600, /* width  */
    600, /* height */
    Surface.SurfaceShape.Flat /* shape */
  );
  // must set the angle for it to render, this puts it right in front at the start
  myFlatSurface.setAngle(0, 0); 

  // Second flat surface
  let myFlatSurface_II = new Surface(
    600, /* width  */
    600, /* height */
    Surface.SurfaceShape.Flat /* shape */
  );

  let myFlatSurface_III = new Surface(
    600, /* width  */
    900, /* height */
    Surface.SurfaceShape.Flat /* shape */
  );
  // Angle is measured in radians, so 3.14 (pi) puts it right behind you
  // To move this surface to the exact right of the initial view, use 3.14/2
  // To move this surface to the exact left of the initial view, use -3.14/2
  myFlatSurface_II.setAngle(3.14/1, 0);

  myFlatSurface_III.setAngle(3.14/2, 0);

  let myFlatSurface_IV = new Surface(
    600, /* width  */
    600, /* height */
    Surface.SurfaceShape.Flat /* shape */
  );

  myFlatSurface_IV.setAngle(-3.14/2, 0);

  // Render your app content to each surface, using the names registered in index.js
  // ( e.g. AppRegistry.registerComponent('RegisteredOne', () => ComponentOne); links the 
  //   ComponentOne component with the name 'RegisteredOne', and then here we can add it
  //   to a certain surface with r360.createRoot('RegisteredOne')   )
  r360.renderToSurface(
    r360.createRoot('FlowerBug', { /* initial props */ }),
    // r360.getDefaultSurface()
    // myNewSurface
    myFlatSurface
  );

  // The second surface gets a totally different registered component
  // ( can be a duplicate of the same component if you want )
  r360.renderToSurface(
    r360.createRoot('TwoTulips', { /* initial props */ }),
    myFlatSurface_II
  );

  // r360.renderToSurface(
  //   r360.createRoot('PortraitEyes', { /* initial props */ }),
  //   myFlatSurface_III
  // );

  r360.renderToSurface(
    r360.createRoot('StillLife', { /* initial props */ }),
    myFlatSurface_III
  );

  r360.renderToSurface(
    r360.createRoot('MarmosetEyes', { /* initial props */ }),
    myFlatSurface_IV
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
