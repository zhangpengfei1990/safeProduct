/* eslint-disable linebreak-style,no-param-reassign */
import { getUrlParams } from './utils';

// mock tableListDataSource
let tableListDataSource = [];

for (let i = 0; i < 46; i += 1) {
  tableListDataSource.push({
    msrId: `${i}`,
    msrMessage: '短信内容',
    msrTaskId: '发送任务',
    taskName: '发送任务名称',
    msrState: 1,
    msrReceiveName: '接收人姓名',
    msrReceivePhone: '接收人电话',
    msrGmtCreate: '2017-12-12 12:12:12',
    msrGmtModified: '2017-12-12 12:12:12',
    msrIsDeleted: false,
  });
}
export function getSendRecordPageMockData(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = getUrlParams(url);
  let dataSource = [...tableListDataSource];
  // 模拟根据查询条件过滤
  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }
      return prev[s[0]] - next[s[0]];
    });
  }
  // if (params.deExamName) {
  //   dataSource = dataSource.filter(data => data.deExamName.trim() === params.deExamName.trim());
  // }
  // if (params.deUnitId) {
  //   dataSource = dataSource.filter(data => data.deUnitId === params.deUnitId);
  // }

  let pageSize = 10;
  if (params.pageSize) {
    pageSize = params.pageSize * 1;
  }

  const result = {
    status: '1',
    msg: '成功',
    dataMain: {
      list: dataSource,
      pagination: {
        total: dataSource.length,
        pageSize,
        current: parseInt(params.current, 10) || 1,
      },
    },
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
export function getSendRecordPageViewData(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const result = {
    status: '1',
    msg: '成功',
    dataMain: {
      msgSendRecordVo: {
        msrId: 'dfdfsdfwerwer234234sdfdf',
        msrMessage: '短信内容',
        msrTaskId: '发送任务',
        taskName: '发送任务名称',
        msrState: '发送状态',
        msrReceiveName: '接收人姓名',
        msrReceivePhone: '接收人电话',
        msrGmtCreate: '2017-12-12 12:12:12',
        msrGmtModified: '2017-12-12 12:12:12',
        msrIsDeleted: false,
      },
    },
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
export function postSendRecordPageMockData(req, res, u, b) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const body = (b && b.body) || req.body;
  const { method, msrId } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'remove':
      tableListDataSource = tableListDataSource.filter(item => msrId.indexOf(item.msrId) === -1);
      break;
    case 'update':
      tableListDataSource = tableListDataSource.map(
        (item) => {
          if (item.msrId === msrId) {
            // item.deExamName = deExamName;
            // item.deExamRemark = deExamRemark;
            // item.deUnitName = deUnitName;
          }
          return item;
        }
      );
      break;
    case 'add':

      break;
    default:
      break;
  }

  const result = {
    status: '1',
    msg: '成功',
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}

export default {
  getSendRecordPageViewData,
  getSendRecordPageMockData,
  postSendRecordPageMockData,
};
