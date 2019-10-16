var swv = 'sw-visibility';
var expt = 'export-template';
var osm = 'open-sm';
var otm = 'open-tm';
var ola = 'open-layers';
var obl = 'open-blocks';
var ful = 'fullscreen';
var prv = 'preview';

export default {
  //本地定制
  defaults: [
    {
      id: 'commands',
      buttons: [{}]
    },
    {
      id: 'options',
      buttons: [
        {
          active: true,
          id: swv,
          className: 'fa fa-square-o',
          command: swv,
          context: swv,
          attributes: { title: '查看组件' }
        },
        {
          id: prv,
          className: 'fa fa-eye',
          command: prv,
          context: prv,
          attributes: { title: '预览' }
        },
        {
          id: ful,
          className: 'fa fa-arrows-alt',
          command: ful,
          context: ful,
          attributes: { title: '全屏' }
        },
        {
          id: expt,
          className: 'fa fa-code',
          command: expt,
          attributes: { title: '查看代码' }
        }
      ]
    },
    {
      id: 'views',
      buttons: [
        {
          id: osm,
          className: 'fa fa-paint-brush',
          command: osm,
          active: true,
          togglable: 0,
          attributes: { title: '样式管理' }
        },
        {
          id: otm,
          className: 'fa fa-cog',
          command: otm,
          togglable: 0,
          attributes: { title: '设置' }
        },
        {
          id: ola,
          className: 'fa fa-bars',
          command: ola,
          togglable: 0,
          attributes: { title: '层级管理' }
        },
        {
          id: obl,
          className: 'fa fa-th-large',
          command: obl,
          togglable: 0,
          attributes: { title: '元素管理' }
        }
      ]
    }
  ]
};
