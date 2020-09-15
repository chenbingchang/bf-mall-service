'use strict';

const { v1: uuidv1 } = require('uuid');

module.exports = {
  /**
   * 生成唯一的文件名。规则:uuid + '.' + 文件原来的后缀，如果没有后缀则直接是uuid
   * @param {File} file 原文件
   * @return {string} 生成的唯一的文件名
   */
  createUuidFileName(file) {
    // v1是基于时间戳的uuid
    const id = uuidv1();
    const pointIndex = file.filename.lastIndexOf('.');
    // 文件后缀
    let fileSuffix;
    let fileName;

    if (pointIndex === -1) {
      fileName = id;
    } else {
      fileSuffix = file.filename.substr(pointIndex + 1);
      fileName = `${id}.${fileSuffix}`;
    }

    return fileName;
  },
};
