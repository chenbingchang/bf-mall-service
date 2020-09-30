'use strict';

const { v1: uuidv1 } = require('uuid');
const CryptoJS = require('crypto-js');

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
  /**
   * AES加密
   * @param {string} content 需要加密的内容
   * @param {string} keyStr 密钥
   * @param {string} ivStr 偏移
   * @return {string} 加密后的base64
   */
  aesEncrypt(content, keyStr, ivStr) {
  // 密钥
    const key = CryptoJS.enc.Utf8.parse(keyStr);
    // 偏移
    const iv = CryptoJS.enc.Utf8.parse(ivStr);
    // 需要加密的内容
    const srcs = CryptoJS.enc.Utf8.parse(content);
    const encryptObj = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC, // 加密模式
      padding: CryptoJS.pad.Pkcs7, // 填充模式
    });
    // toString默认是HEX格式，Base64内容更短便于传输
    const encryptStr = encryptObj.ciphertext.toString(CryptoJS.enc.Base64);

    return encryptStr;
  },
  /**
   * AES解密
   * @param {string} content 需要解密的内容，根据上面加密应该是加密后的base64字符串
   * @param {string} keyStr 密钥
   * @param {string} ivStr 偏移
   * @return {string} 解密后的内容
   */
  aesDecrypt(content, keyStr, ivStr) {
  // 密钥
    const key = CryptoJS.enc.Utf8.parse(keyStr);
    // 偏移
    const iv = CryptoJS.enc.Utf8.parse(ivStr);
    const decryptObj = CryptoJS.AES.decrypt(content, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptStr = decryptObj.toString(CryptoJS.enc.Utf8);

    return decryptStr;
  },
};
