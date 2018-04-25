import request from '../utils/request';
import { convertUrl } from '../utils/utils';
// exam 增删改查
export async function viewMenuData(params) {
  const url = convertUrl('/sys/menuView');
  return request(url, {
    method: 'POST',
    body: params,
  });
}
export async function queryMenuData(params) {
  const url = convertUrl('/sys/menuPage');
  return request(url, {
    method: 'POST',
    body: params,
  });
}
export async function removeMenuData(params) {
  const url = convertUrl('/sys/menu', 'Remove');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'remove',
    },
  });
}
export async function addMenuData(params) {
  const url = convertUrl('/sys/menu', 'Save');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'add',
    },
  });
}
export async function updateMenuData(params) {
  const url = convertUrl('/sys/menu', 'Update');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

// roleManage 增删改查

export async function rolePageQuery(params) {
  const url = convertUrl('/sys/rolePage');
  return request(url, {
    method: 'POST',
    body: params,
  });
}
export async function roleSave(params) {
  const url = convertUrl('/sys/role', 'Save');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'add',
    },
  });
}
export async function roleRemove(params) {
  const url = convertUrl('/sys/role', 'Remove');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'remove',
    },
  });
}
export async function roleSelect(params) {
  const url = convertUrl('/sys/roleSelect');
  return request(url, {
    method: 'POST',
    body: params,
  });
}
export async function roleUpdate(params) {
  const url = convertUrl('/sys/role', 'Update');
  return request(url, {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}
export async function roleMenuBatchSave(params) {
  const url = convertUrl('/sys/roleMenuBatchSave');
  return request(url, {
    method: 'POST',
    body: params,
  });
}
export async function roleNameVerify(params) {
  const url = convertUrl('/sys/roleNameVerify');
  return request(url, {
    method: 'POST',
    body: params,
  });
}
export async function toUpdateRoleMenu(params) {
  const url = convertUrl('/sys/toUpdateRoleMenu');
  return request(url, {
    method: 'POST',
    body: params,
  });
}

