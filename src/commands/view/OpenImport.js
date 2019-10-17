export default {
  run(editor, sender, opt = {}) {
    const pfx = editor.getConfig('stylePrefix');
    const modal = editor.Modal;
    const config = editor.getConfig().openImportOpt;
    const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
    const container = document.createElement('div');
    const importLabel = config.modalImportLabel;
    const importCnt = config.modalImportContent;
    let viewerEditor = codeViewer.editor;

    const btnImp = document.createElement('button');
    btnImp.type = 'button';
    btnImp.innerHTML = config.modalImportButton;
    btnImp.className = `${pfx}btn-prim ${pfx}btn-import`;
    btnImp.onclick = e => {
      var value = viewerEditor.getValue().trim();
      if (value !== '') editor.setComponents(value);
      modal.close();
    };

    // Init code viewer
    codeViewer.set({
      ...{
        codeName: 'htmlmixed',
        theme: 'hopscotch',
        readOnly: 0
      },
      ...config.importViewerOptions
    });

    if (!viewerEditor) {
      const txtarea = document.createElement('textarea');

      if (importLabel) {
        const labelEl = document.createElement('div');
        labelEl.className = `${pfx}import-label`;
        labelEl.innerHTML = importLabel;
        container.appendChild(labelEl);
      }

      container.appendChild(txtarea);
      container.appendChild(btnImp);
      codeViewer.init(txtarea);
      viewerEditor = codeViewer.editor;
    }

    modal.setTitle(config.modalImportTitle);
    modal.setContent(container);
    const cnt = typeof importCnt == 'function' ? importCnt(editor) : importCnt;
    codeViewer.setContent(cnt || '');
    modal
      .open()
      .getModel()
      .once('change:open', () => editor.stopCommand(this.id));
    viewerEditor.refresh();
  },
  stop(editor) {
    const modal = editor.Modal;
    modal && modal.close();
  }
};
