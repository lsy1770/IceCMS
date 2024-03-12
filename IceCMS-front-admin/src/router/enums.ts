// 完整版菜单比较多，将 rank 抽离出来，在此方便维护

const home = 0, // 平台规定只有 home 路由的 rank 才能为 0 ，所以后端在返回 rank 的时候需要从 1 开始哦
  components = 20,
  able = 2,
  table = 3,
  list = 9,
  result = 5,
  frame = 8,
  nested = 8,
  permission = 9,
  system = 5,
  tabs = 11,
  about = 7,
  editor = 13,
  flowchart = 14,
  formdesign = 15,
  board = 16,
  guide = 18,
  menuoverflow = 19,
  contentManagement = 1,
  resourcesManagement = 2,
  communityManagement = 3,
  userManagement = 4,
  storeManagement = 5,
  settings = 6

export {
  home,
  components,
  able,
  table,
  list,
  result,
  frame,
  nested,
  permission,
  system,
  tabs,
  about,
  editor,
  flowchart,
  formdesign,
  board,
  guide,
  menuoverflow,
  contentManagement, // 导出新的枚举值
  resourcesManagement,
  communityManagement,
  userManagement,
  storeManagement,
  settings
};
