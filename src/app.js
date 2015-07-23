import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'DevOpsManagement';
    config.map([
      /*
      route: Routes supports patterns like customer/:id
      name: This is a name to use in code when generating URLs for the route
      moduleId: This is a path relative to the current view-model which specifies the view/view-model pair you want to render for this route
      nav: If this route should be included in the navigation model because you want to generate a UI with it, set this to be true
      title: You can optionally provide a title to be used in generating the document's title
      */
      { route: ['welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: ['', 'flickr'],       name: 'flickr',       moduleId: './flickr',       nav: true, title:'Flickr' },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
