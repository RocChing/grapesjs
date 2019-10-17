export default {
  run(ed) {
    var config = ed.getConfig();
    if (confirm(config.confirmClearCanvas)) {
      ed.DomComponents.clear();
      ed.CssComposer.clear();
    }
  }
};
