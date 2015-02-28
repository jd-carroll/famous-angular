/**
 * @ngdoc provider
 * @name $famousProvider
 * @module famous.angular
 * @description
 * This provider will keep a reference on the complete Famo.us library and provide a few useful functions.
 */
ngFameApp.provider('$artecha', function() {
  // hash for storing modules
  var _modules = {
    "famous/artecha/views/FocusPagedLayout": famous.artecha.views.FocusPagedLayout,
    "famous/artecha/views/FocusScrollLayout": famous.artecha.views.FocusScrollLayout,
    "famous/artecha/views/ScrollEdgeStates": famous.artecha.views.ScrollEdgeStates,
    "famous/artecha/views/ScrollView": famous.artecha.views.ScrollView
  };

  this.$get = function() {
    return _modules;
  };
});
